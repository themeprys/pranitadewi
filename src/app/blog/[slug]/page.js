import { cosmic } from '../../config/cosmic';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from '../blog.module.css';
import Link from 'next/link';

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

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);
  const relatedArticles = await getRelatedArticles(params.slug);

  if (!post) {
    notFound();
  }

  return (
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
  );
} 