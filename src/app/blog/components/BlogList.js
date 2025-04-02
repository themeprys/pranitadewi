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

export default function BlogList({ fallback }) {
  const { data: posts, error } = useSWR('/api/blog', fetcher, {
    fallbackData: fallback,
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  if (error) return <div>Failed to load blog posts</div>;
  if (!posts) return <div>Loading...</div>;

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.metadata?.tanggal_artikel ? new Date(a.metadata.tanggal_artikel) : new Date(0);
    const dateB = b.metadata?.tanggal_artikel ? new Date(b.metadata.tanggal_artikel) : new Date(0);
    return dateB - dateA;
  });

  return (
    <div className="row">
      {sortedPosts.map((post) => (
        <div key={post.id} className="col-md-6 mb-4">
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
                <h2 className="card-title h4 text-dark fw-bold">{post.title}</h2>
                <div className="d-flex justify-content-between align-items-center text-muted">
                  {post.metadata?.tanggal_artikel && (
                    <small>
                      {new Date(post.metadata.tanggal_artikel).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </small>
                  )}
                  {post.metadata?.sumber_artikel && (
                    <small>
                      Sumber: {post.metadata.sumber_artikel}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
} 