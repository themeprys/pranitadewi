import { cosmic } from '../../config/cosmic';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await cosmic.objects.find({
      type: 'blogs',
      props: 'id,title,slug,metadata',
      limit: 10,
      sort: '-metadata.tanggal_artikel'
    });
    
    return NextResponse.json(posts.objects);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
} 