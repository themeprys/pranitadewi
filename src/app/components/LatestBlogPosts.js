'use client';

import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';

// Define fetcher function for SWR
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
};

export default function LatestBlogPosts() {
  const { data: posts, error } = useSWR('/api/blog', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  if (error) return <div>Failed to load blog posts</div>;
  if (!posts) return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Artikel Terbaru</h2>
        <div className="row">
          {[1, 2, 3].map((index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="position-relative" style={{ height: '200px' }}>
                  <div className="skeleton-loader" style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="card-body">
                  <div className="skeleton-loader mb-2" style={{ height: '24px', width: '80%' }} />
                  <div className="skeleton-loader" style={{ height: '16px', width: '40%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sort posts by tanggal_artikel in descending order and get the latest 3 posts
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.metadata?.tanggal_artikel) - new Date(a.metadata?.tanggal_artikel))
    .slice(0, 3);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Artikel Terbaru</h2>
        <div className="row">
          {latestPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-decoration-none"
              >
                <div className="card h-100 hover-card">
                  {post.metadata?.image && (
                    <div className="position-relative" style={{ height: '200px' }}>
                      <Image
                        src={post.metadata.image.imgix_url}
                        alt={post.title}
                        fill
                        className="object-fit-cover card-img-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="card-body">
                    <h3 className="card-title h5 text-dark fw-bold text-truncate-2">{post.title}</h3>
                    {post.metadata?.tanggal_artikel && (
                      <p className="card-text text-muted small">
                        {new Date(post.metadata.tanggal_artikel).toLocaleDateString('id-ID', {
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
      </div>
    </section>
  );
} 