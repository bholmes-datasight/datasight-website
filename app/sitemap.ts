import { MetadataRoute } from "next";
import { getCaseStudies, getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://datasightuk.com";

  const staticRoutes = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/case-studies`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/blog`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
  ].map((r) => ({
    ...r,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  const caseStudyRoutes = getCaseStudies().map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
