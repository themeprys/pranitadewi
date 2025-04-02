import { cosmic } from './config/cosmic';

// Add revalidation time (in seconds)
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap() {
  try {
    // Get all blog posts with sorting by date
    const posts = await cosmic.objects.find({
      type: 'blogs',
      props: 'slug,metadata',
      sort: '-metadata.tanggal_artikel', // Sort by date descending
      limit: 100, // Get up to 100 posts
    });

    // Generate blog post URLs with proper dates
    const blogUrls = posts.objects.map((post) => ({
      url: `https://pranitadewi.vercel.app/blog/${post.slug}`,
      lastModified: post.metadata?.tanggal_artikel ? new Date(post.metadata.tanggal_artikel) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Static pages with their last modified dates
    const staticPages = [
      {
        url: 'https://pranitadewi.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://pranitadewi.vercel.app/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://pranitadewi.vercel.app/blog',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
    ];

    // Combine all URLs and sort by priority
    const allUrls = [...staticPages, ...blogUrls].sort((a, b) => b.priority - a.priority);

    return allUrls;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
} 