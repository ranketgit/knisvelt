import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../lib/blog';

export const metadata = {
  title: 'Blog Kinesvelt | Actualités et conseils minceur',
  description: 'Retrouvez tous nos conseils sur la minceur, le remodelage corporel et les soins du visage.',
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#FAF8F7] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Le Journal
            </span>
          </div>
          <h1 className="text-4xl lg:text-[3rem] font-medium leading-[1.2] text-[#2A2A2A]">
            Actualités & Conseils Kinesvelt
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-50 flex flex-col h-full hover:shadow-xl hover:shadow-[#E38F75]/5 transition-all duration-300">
              
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm text-[#E38F75] font-medium mb-3">
                  {post.date ? new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                </p>
                <h2 className="text-xl font-medium text-[#2A2A2A] mb-4 group-hover:text-[#E38F75] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A2A2A] group-hover:text-[#E38F75] transition-colors">
                  Lire l'article
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}