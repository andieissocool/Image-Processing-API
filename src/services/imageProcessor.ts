import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';

export const processImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<any> => {
  try {
    const outputDir = path.join('assets', 'thumbs');
    await fsPromises.mkdir('assets/thumbs', { recursive: true });
    const outputPath = path.join(outputDir, `${filename}-thumb.jpg`);
    const response = await sharp(`assets/full/${filename}.jpg`)
      .resize({
        width: width,
        height: height,
      })
      .toFile(outputPath);

    return outputPath;
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};
