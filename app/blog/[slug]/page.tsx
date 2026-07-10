import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '../../lib/blog';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article introuvable | Kinesvelt",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  if (!resolvedParams || !resolvedParams.slug) {
    return <div>Article introuvable</div>;
  }
  const post = getPostBySlug(resolvedParams.slug);
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 lg:pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post Header */}
        <div className="text-center mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#E38F75] hover:text-[#d47b60] transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Retour au journal
          </Link>
          <p className="text-sm text-gray-500 font-medium mb-4">
            {post.date ? new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          </p>
          <h1 className="text-3xl lg:text-5xl font-medium leading-[1.2] text-[#2A2A2A] mb-8">
            {post.title}
          </h1>
        </div>
        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[300px] lg:h-[450px] rounded-[2rem] overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        {/* Content Rendered by ReactMarkdown and styled by Tailwind Typography */}
        <div className="prose prose-lg prose-headings:font-medium prose-headings:text-[#2A2A2A] prose-a:text-[#E38F75] hover:prose-a:text-[#d47b60] prose-img:rounded-2xl max-w-none text-gray-600">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}