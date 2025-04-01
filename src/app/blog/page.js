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
      sort: '-metadata.tanggal_artikel'
    });
    
    // Log the posts to check the data
    console.log('Blog posts:', posts.objects.map(post => ({
      title: post.title,
      date: post.metadata?.tanggal_artikel,
      formattedDate: post.metadata?.tanggal_artikel ? new Date(post.metadata.tanggal_artikel).toLocaleDateString('id-ID') : 'No date'
    })));
    
    return posts.objects;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Sort posts manually as a fallback
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.metadata?.tanggal_artikel ? new Date(a.metadata.tanggal_artikel) : new Date(0);
    const dateB = b.metadata?.tanggal_artikel ? new Date(b.metadata.tanggal_artikel) : new Date(0);
    return dateB - dateA; // Sort in descending order
  });

  return (
    <div className="container blog-container px-0">
      <h1 className="mb-4">Blog</h1>
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
    </div>
  );
}