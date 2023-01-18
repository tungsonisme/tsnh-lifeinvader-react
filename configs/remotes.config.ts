import * as fs from 'fs';

const EXPOSES_DIR = 'src/exposes';

const initializeExposes = () => {
  const result: Record<string, string> = {};
  const files = fs.readdirSync(EXPOSES_DIR);

  files.forEach((fileName) => {
    if (!fileName.endsWith('.tsx')) {
      return
    }

    const componentName = fileName.split('.tsx')[0];
    result[`./${componentName}`] = `./${EXPOSES_DIR}/${componentName}.tsx`;
  });

  return result;
};

export default initializeExposes;
