const { compileFromFile } = require('json-schema-to-typescript');
const fs = require('fs');
const path = require('path');
const platform = 'jd';
const jsonPath = path.join(__dirname, `src/${platform}/jsonSchema`);
const files = fs.readdirSync(jsonPath);
files.forEach((file) => {
  const filePath = path.join(jsonPath, file);
  compileFromFile(filePath).then((ts) =>
    fs.writeFileSync(
      path.join(
        __dirname,
        `dist/${platform}/${file.replace('.json', '.d.ts')}`,
      ),
      ts,
    ),
  );
});
