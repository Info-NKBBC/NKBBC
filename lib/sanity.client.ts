import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'von9yh08',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN
});

export async function fetchQuery(query: string, params = {}) {
  try {
    const result = await client.fetch(query, params);
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

const builder = imageUrlBuilder(client);

type ImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: ImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export function getOptimizedImage(
  source: ImageSource,
  width: number = 1200,
  height: number = 675,
  quality: number = 75
): string {
  return builder
    .image(source)
    .width(width)
    .height(height)
    .quality(quality)
    .fit('crop')
    .auto('format')
    .url();
}
