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
    whoAndWhy: "I have made this piece for a small business where I got my kitten from about a year ago. They have been struggling, and I was so happy to have an opportunity to hopefully bring business in for them.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    result: "Increased user retention by 28% and reduced onboarding time by 35%.",
    hasBeforeAfter: true,
    image: projectCats,
  },
  {
    title: "Flowers",
    category: "Brand Identity",
    year: "2024",
    description: "Full brand identity for fintech startup",
    whoAndWhy: "My mom receives flowers from this business all the time, but you don't hear about them a lot. I decided to make a flyer for them where they can share it on social media to bring people in.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    result: "Delivered a scalable brand system that supported successful seed funding launch.",
    hasBeforeAfter: false,
    image: projectFlowers,
  },
  {
    title: "Spa",
    category: "E-commerce UX",
    year: "2024",
    description: "Product page optimization for online retailer",
    whoAndWhy: "This spa is very highly rated, but doesn't have a lot of business. I decided to make them a flyer to hang in places, so hopefully they get many more customers.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    result: "Boosted conversion rate by 19% and increased average order value by 12%.",
    hasBeforeAfter: true,
    image: projectSpa,
  },
  {
    title: "Denver Zoo",
    category: "App Redesign",
    year: "2023",
    description: "Wellness app usability redesign",
    whoAndWhy: "The zoo had a big event that was not really talked about, but it was to fundraise. I made them a flyer to show people, so more people come to the event, and they can fundraise more.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    result: "Improved daily active users by 24% and increased session time by 31%.",
    hasBeforeAfter: true,
    image: projectDenverZoo,
  },
];
