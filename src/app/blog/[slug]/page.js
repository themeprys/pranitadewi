import { cosmic } from '../../config/cosmic';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from '../blog.module.css';

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

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-5">
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
  );
} 