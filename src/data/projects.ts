export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
}

export const projects: Project[] = [
  { title: "Brand Identity System", category: "Branding", year: "2025", description: "Complete visual identity for a fintech startup" },
  { title: "E-commerce Platform", category: "Web Design", year: "2024", description: "Full-stack shopping experience with custom CMS" },
  { title: "Mobile Banking App", category: "UI/UX Design", year: "2024", description: "iOS and Android app for a digital bank" },
  { title: "Editorial Website", category: "Development", year: "2023", description: "Content-rich magazine built with modern web tech" },
  { title: "SaaS Dashboard", category: "Product Design", year: "2023", description: "Analytics platform for enterprise clients" },
  { title: "Photography Portfolio", category: "Web Design", year: "2022", description: "Minimal portfolio showcasing fine art photography" },
];
