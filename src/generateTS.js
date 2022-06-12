const { compileFromFile } = require('json-schema-to-typescript');
const fs = require('fs');
const path = require('path');
const platforms = ['alipay', 'swan', 'weapp', 'jd', 'qq', 'tt'];
platforms.forEach((platform) => {
  const jsonPath = path.join(__dirname, `${platform}/jsonSchema`);
  const dist = path.join(__dirname, `../dist/${platform}`);
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
  }
  const files = fs.readdirSync(jsonPath);
  files.forEach((file) => {
    const filePath = path.join(jsonPath, file);
    compileFromFile(filePath).then((ts) =>
      fs.writeFileSync(
        path.join(dist, `${file.replace('.json', '.d.ts')}`),
        ts,
      ),
    );
  });
});
