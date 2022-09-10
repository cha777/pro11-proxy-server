import path from 'path';

export const srcDirectory: string = ((): string => {
  const assetPath = path.join(__dirname, '../assets');

  return path.join(assetPath, 'dist');
})();
