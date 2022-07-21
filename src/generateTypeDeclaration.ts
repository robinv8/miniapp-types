import { compileFromFile } from "json-schema-to-typescript";
import * as fs from "fs-extra";
import * as path from "path";

const platforms = ['alipay', 'swan', 'weapp', 'jd', 'qq', 'tt'];
platforms.forEach((platform) => {
  const jsonPath = path.join(__dirname, `${platform}/jsonSchema`);
  const dist = path.join(__dirname, `../dist/types/${platform}`);
  const distSchema = path.join(__dirname, `../dist/schema/${platform}`);

  // copy jsonschema to dist
  if (!fs.existsSync(distSchema)) {
    fs.mkdirSync(distSchema, { recursive: true });
  }
  fs.copySync(jsonPath, distSchema);

  // generate typescript
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
  }
  const files = fs.readdirSync(jsonPath);
  const fileNames: string[] = []
  files.forEach((file) => {
    const filePath = path.join(jsonPath, file);
    fileNames.push(file.replace('.json', ''));
    compileFromFile(filePath).then((ts) =>
      fs.writeFileSync(
        path.join(dist, `${file.replace('.json', '.d.ts')}`),
        ts,
      ),
    );
  });
  const index = path.join(dist, 'index.d.ts');
  const code = fileNames.map(fileName => {
    return `export * from './${fileName}';`
  }).join('\n');
  fs.writeFileSync(index, code);

});

const code = platforms.map(platform => {
  return `export * as ${platform} from './${platform}/index';`
}).join('\n');

fs.writeFileSync(path.join(__dirname, `../dist/types/index.d.ts`), code);
