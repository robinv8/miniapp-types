import * as path from "path";
import * as fs from "fs-extra";
const propAlias = require("./propAlias.json");
const platforms = ["alipay", "swan", "weapp", "jd", "qq", "tt"];
const wordsSet: Set<string> = new Set();
platforms.forEach((platform) => {
  const jsonPath = path.join(__dirname, `${platform}/jsonSchema`);
  const files = fs.readdirSync(jsonPath);
  files.forEach((file) => {
    const jsonSchema = require(path.join(jsonPath, file));
    const keys = Object.keys(jsonSchema.properties).filter(
      (key) => key.match(/^bind/) && key === key.toLowerCase()
    );
    if (keys.length > 0) {
      keys.forEach((item) => wordsSet.add(item));
    }
  });
});
const array: string[] = [...wordsSet];
const json: { [key: string]: any }[] = propAlias;
array.forEach((item) => {
  if (typeof json[item] !== "string") {
    json[item] = item;
  }
});
fs.writeFileSync(
  path.join(__dirname, "propAlias.json"),
  JSON.stringify(json, null, 2)
);

platforms.forEach((platform) => {
  const jsonPath = path.join(__dirname, `${platform}/jsonSchema`);
  const files = fs.readdirSync(jsonPath);
  files.forEach((file) => {
    const jsonSchema = require(path.join(jsonPath, file));
    const keys = Object.keys(jsonSchema.properties).filter((key) => {
      if (propAlias[key]) {
        return true;
      }
      return key.match(/^bind/) && key === key.toLowerCase();
    });
    if (keys.length === 0) {
      return;
    }
    keys.forEach((key) => {
      const formatedKey = json[key];
      jsonSchema.properties[formatedKey] = jsonSchema.properties[key];
      delete jsonSchema.properties[key];
    });
    fs.writeFileSync(
      path.join(jsonPath, file),
      JSON.stringify(jsonSchema, null, 2)
    );
  });
});
