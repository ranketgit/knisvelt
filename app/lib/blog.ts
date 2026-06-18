import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
};

export function getPostSlugs() {
  console.log("🛠️ DÉBOGAGE: Je cherche les articles dans ce dossier ->", postsDirectory);
  
  if (!fs.existsSync(postsDirectory)) {
    console.log("❌ ERREUR: Le dossier n'existe pas ou le chemin est mauvais !");
    return [];
  }
  
  const files = fs.readdirSync(postsDirectory);
  console.log("✅ SUCCÈS: J'ai trouvé ces fichiers ->", files);
  return files;
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || 'Sans Titre',
    date: data.date || 'Date inconnue',
    excerpt: data.excerpt || '',
    image: data.image || '',
    content: content || '',
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  console.log("🚀 Articles finaux prêts à être affichés ->", posts.length);
  return posts;
}