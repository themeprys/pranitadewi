import { cosmic } from '../../config/cosmic';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from '../blog.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import ShareButtons from './ShareButtons';

async function getBlogPost(slug) {
  try {
    const post = await cosmic.objects.findOne({
      type: 'blogs',
      slug: slug,
      props: 'id,title,slug,metadata',
    });
    return post.object;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

async function getRelatedArticles(currentSlug) {
  try {
    const articles = await cosmic.objects.find({
      type: 'blogs',
      limit: 4,
      props: 'id,title,slug,metadata',
    });
    return articles.objects.filter(article => article.slug !== currentSlug).slice(0, 3);
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

// Generate keywords from title and add branding keywords
function generateKeywords(title) {
  // Remove special characters and split into words
  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2); // Filter out short words

  // Add branding keywords
  const brandingKeywords = ['pranita dewi', 'penulis', 'puisi', 'prosa', 'cerpen', 'sastra indonesia'];
  
  // Combine and remove duplicates
  const allKeywords = [...new Set([...words, ...brandingKeywords])];
  
  return allKeywords.join(', ');
}

// Generate metadata for the blog post
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Handle title length
  let metaTitle = post.title;
  if (post.title.length < 30) {
    // If title is too short, add site name
    metaTitle = `${post.title} | Pranita Dewi`;
  } else if (post.title.length > 60) {
    // If title is too long, truncate it and add site name
    metaTitle = `${post.title.substring(0, 57)}... | Pranita Dewi`;
  } else {
    // For normal length titles, add site name
    metaTitle = `${post.title} | Pranita Dewi`;
  }

  // Extract description from excerpt or first paragraph
  let description = post.metadata?.excerpt;
  if (!description && post.metadata?.body) {
    // Try to get first paragraph from body
    const firstParagraph = post.metadata.body
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .split('\n')[0] // Get first line
      .trim();
    
    // Truncate to 155 characters (Google's recommended length)
    description = firstParagraph.length > 155 
      ? firstParagraph.substring(0, 152) + '...'
      : firstParagraph;
  }

  // Fallback to title if no description available
  if (!description) {
    description = post.title;
  }

  // Generate keywords
  const keywords = generateKeywords(post.title);

  return {
    title: metaTitle,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      nocache: false,
      'googlebot-image': 'index',
      'googlebot-news': 'index',
      'googlebot-video': 'index',
    },
    alternates: {
      canonical: `https://pranitadewi.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description,
      type: 'article',
      publishedTime: post.metadata?.tanggal_artikel,
      authors: ['Pranita Dewi'],
      publisher: 'https://pranitadewi.vercel.app',
      url: `https://pranitadewi.vercel.app/blog/${post.slug}`,
      images: post.metadata?.image ? [
        {
          url: post.metadata.image.imgix_url,
          width: 800,
          height: 400,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: post.metadata?.image ? [post.metadata.image.imgix_url] : [],
    },
  };
}

// Add X-Robots-Tag header
export async function generateHeaders() {
  return {
    'X-Robots-Tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, nocache:false, googlebot-image:index, googlebot-news:index, googlebot-video:index',
  };
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  const relatedArticles = await getRelatedArticles(params.slug);

  if (!post) {
    notFound();
  }

  // Generate schema markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metadata?.excerpt || post.title,
    image: post.metadata?.image ? post.metadata.image.imgix_url : '',
    datePublished: post.metadata?.tanggal_artikel,
    dateModified: post.metadata?.tanggal_artikel,
    author: {
      '@type': 'Person',
      name: 'Pranita Dewi',
      url: 'https://pranitadewi.vercel.app/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pranita Dewi',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pranitadewi.vercel.app/pranitadewi.webp'
      },
      url: 'https://pranitadewi.vercel.app'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pranitadewi.vercel.app/blog/${post.slug}`
    }
  };

  const shareUrl = `https://pranitadewi.vercel.app/blog/${post.slug}`;
  const shareTitle = post.title;

  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="container blog-container px-0">
        <article>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="mb-4">{post.title}</h1>
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                {post.metadata?.tanggal_artikel && (
                  <div className="text-muted">
                    {new Date(post.metadata.tanggal_artikel).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                )}
                {post.metadata?.sumber_artikel && (
                  <div className="text-muted">
                    Sumber: {post.metadata.sumber_artikel}
                  </div>
                )}
              </div>

              <ShareButtons url={shareUrl} title={shareTitle} />

              {post.metadata?.image && (
                <div className="mb-4">
                  <Image
                    src={post.metadata.image.imgix_url}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="img-fluid rounded"
                    priority
                  />
                </div>
              )}

              <div 
                className={styles['blog-content']}
                dangerouslySetInnerHTML={{ __html: post.metadata?.body }}
              />

              {post.metadata?.link_sumber_artikel && (
                <div className="mt-4 pt-4 border-top">
                  <a 
                    href={post.metadata.link_sumber_artikel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    Baca di {post.metadata.sumber_artikel}
                  </a>
                </div>
              )}
            </div>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="mt-5 pt-5 border-top">
            <h2 className="mb-4">Artikel Terkait</h2>
            <div className="row">
              {relatedArticles.map((article) => (
                <div key={article.id} className="col-md-4 mb-4">
                  <Link href={`/blog/${article.slug}`} className="text-decoration-none text-dark">
                    <div className="card h-100">
                      {article.metadata?.image && (
                        <div className="position-relative" style={{ paddingTop: '56.25%' }}>
                          <Image
                            src={article.metadata.image.imgix_url}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="card-img-top object-fit-cover"
                            style={{ objectPosition: 'center' }}
                          />
                        </div>
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        {article.metadata?.tanggal_artikel && (
                          <p className="card-text text-muted">
                            {new Date(article.metadata.tanggal_artikel).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
} 