import { cosmic } from '../config/cosmic';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';

async function getBlogPosts() {
  try {
    const posts = await cosmic.objects.find({
      type: 'blogs',
      props: 'id,title,slug,metadata',
      limit: 10,
      sort: '-created_at'
    });
    return posts.objects;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container py-5">
      <h1 className="mb-5">Blog</h1>
      <div className="row">
        {posts.map((post) => (
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
                  <h2 className="card-title h4 text-dark">{post.title}</h2>
                  {post.metadata?.tanggal_artikel && (
                    <small className="text-muted">
                      {new Date(post.metadata.tanggal_artikel).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </small>
                  )}
                  {post.metadata?.sumber_artikel && (
                    <div className="mt-2">
                      <small className="text-muted">
                        Sumber: {post.metadata.sumber_artikel}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}