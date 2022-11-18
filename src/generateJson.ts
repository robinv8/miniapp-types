import * as fs from "fs-extra";

const miniappTypes = ["alipay", "swan", "weapp", "jd", "qq", "tt"];

const types: { key; value }[] = [];

miniappTypes.forEach((miniappType) => {
  // 读取文件夹下的所有文件
  const files = fs.readdirSync(`./src/${miniappType}/jsonSchema`);

  const subTypes: { key; value }[] = [];
  files.forEach((file) => {
    const content = fs.readFileSync(
      `./src/${miniappType}/jsonSchema/${file}`,
      "utf-8"
    );
    const json = JSON.parse(content);
    subTypes.push({
      key: json.title,
      value: json,
    });
  });

  types.push({
    key: miniappType,
    value: subTypes,
  });
});
// dist 文件夹下生成 json 文件
fs.writeFileSync("./dist/jsonSchema.json", JSON.stringify(types, null, 2));
