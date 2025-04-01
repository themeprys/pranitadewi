import { createBucketClient } from '@cosmicjs/sdk';

if (!process.env.COSMIC_BUCKET_SLUG) {
  throw new Error('COSMIC_BUCKET_SLUG is not defined in environment variables');
}

if (!process.env.COSMIC_READ_KEY) {
  throw new Error('COSMIC_READ_KEY is not defined in environment variables');
}

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
}); 