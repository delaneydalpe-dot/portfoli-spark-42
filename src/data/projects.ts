import projectCats from "@/assets/project-cats.jpeg";
import projectFlowers from "@/assets/project-flowers.png";
import projectSpa from "@/assets/project-spa.png";
import projectDenverZoo from "@/assets/project-denver-zoo.png";

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  whoAndWhy: string;
  tools: string[];
  result: string;
  hasBeforeAfter: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Cats",
    category: "Dashboard Redesign",
    year: "2025",
    description: "B2B analytics dashboard redesign",
    whoAndWhy: "Redesigned a B2B analytics dashboard to improve user engagement and reduce churn.",
    tools: ["Figma", "Notion", "Maze", "Adobe Illustrator"],
    result: "Increased user retention by 28% and reduced onboarding time by 35%.",
    hasBeforeAfter: true,
    image: projectCats,
  },
  {
    title: "Flowers",
    category: "Brand Identity",
    year: "2024",
    description: "Full brand identity for fintech startup",
    whoAndWhy: "Developed a full brand identity for a startup entering a competitive fintech space.",
    tools: ["Adobe Illustrator", "InDesign", "Figma"],
    result: "Delivered a scalable brand system that supported successful seed funding launch.",
    hasBeforeAfter: false,
    image: projectFlowers,
  },
  {
    title: "Spa",
    category: "E-commerce UX",
    year: "2024",
    description: "Product page optimization for online retailer",
    whoAndWhy: "Improved product pages for a mid-sized online retailer to increase conversions.",
    tools: ["Figma", "Hotjar", "Google Analytics", "Shopify"],
    result: "Boosted conversion rate by 19% and increased average order value by 12%.",
    hasBeforeAfter: true,
    image: projectSpa,
  },
  {
    title: "Denver Zoo",
    category: "App Redesign",
    year: "2023",
    description: "Wellness app usability redesign",
    whoAndWhy: "Redesigned a wellness app to improve usability and engagement metrics.",
    tools: ["Figma", "FigJam", "User Interviews", "Prototyping Tools"],
    result: "Improved daily active users by 24% and increased session time by 31%.",
    hasBeforeAfter: true,
    image: projectDenverZoo,
  },
];
