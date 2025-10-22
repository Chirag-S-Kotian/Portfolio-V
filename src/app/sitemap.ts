import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://chiragdev.in";
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Add dynamic project pages if they exist
  const projectRoutes: MetadataRoute.Sitemap = [
    "kubernetes-cluster-automation",
    "aws-infrastructure-as-code",
    "cicd-pipeline-jenkins",
    "monitoring-observability-stack",
    "devops-automation-scripts"
  ].map((project) => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Add name-specific pages for better personal branding
  const nameRoutes: MetadataRoute.Sitemap = [
    "chirag-s-kotian",
    "chirag-kotian-devops",
    "chirag-kotian-engineer",
    "chirag-s-kotian-india",
    "chirag-kotian-udupi",
    "chirag-s-kotian-karnataka"
  ].map((name) => ({
    url: `${baseUrl}/about/${name}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Add skill-specific pages for better SEO
  const skillRoutes: MetadataRoute.Sitemap = [
    "aws-devops",
    "kubernetes-expert",
    "docker-containerization",
    "terraform-infrastructure",
    "jenkins-cicd",
    "monitoring-grafana",
    "cloud-security",
    "full-stack-developer",
    "react-developer",
    "nodejs-developer",
    "multi-cloud-expert"
  ].map((skill) => ({
    url: `${baseUrl}/skills/${skill}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Add location-based pages for local SEO
  const locationRoutes: MetadataRoute.Sitemap = [
    "devops-engineer-udupi",
    "cloud-consultant-karnataka",
    "devops-freelancer-india"
  ].map((location) => ({
    url: `${baseUrl}/location/${location}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const posts = await getBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...nameRoutes,
    ...skillRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}


