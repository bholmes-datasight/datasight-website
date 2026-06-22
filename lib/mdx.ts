import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export interface CaseStudyMeta {
  slug: string;
  title: string;
  client: string;
  sector: string;
  summary: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  date: string;
  featured?: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

function readDir(dir: string): string[] {
  const full = path.join(contentRoot, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
}

export function getCaseStudies(): CaseStudyMeta[] {
  return readDir("case-studies").map((file) => {
    const raw = fs.readFileSync(
      path.join(contentRoot, "case-studies", file),
      "utf-8"
    );
    const { data } = matter(raw);
    return { slug: file.replace(".mdx", ""), ...data } as CaseStudyMeta;
  });
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(contentRoot, "case-studies", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...data } as CaseStudyMeta, content };
}

export function getBlogPosts(): BlogPostMeta[] {
  return readDir("blog").map((file) => {
    const raw = fs.readFileSync(
      path.join(contentRoot, "blog", file),
      "utf-8"
    );
    const { data } = matter(raw);
    return { slug: file.replace(".mdx", ""), ...data } as BlogPostMeta;
  });
}

export function getBlogPost(slug: string) {
  const filePath = path.join(contentRoot, "blog", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...data } as BlogPostMeta, content };
}
