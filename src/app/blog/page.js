import { cosmic } from '../config/cosmic';
import BlogList from './components/BlogList';
import { blogMetadata } from '../metadata';

export const metadata = blogMetadata;

// Add revalidation time (in seconds)
export const revalidate = 60; // Revalidate every 60 seconds

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
  const initialPosts = await getBlogPosts();
  
  return (
    <div className="container blog-container px-0">
      <h1 className="mb-4">Blog</h1>
      <BlogList fallback={initialPosts} />
    </div>
  );
}