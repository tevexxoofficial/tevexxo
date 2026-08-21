import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/pages/CoursesPage";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Tevexxo Courses — AI, Full Stack, Cloud & more" },
      { name: "description", content: "Six industry-aligned Tevexxo programs in AI/ML, Data Analytics, Full Stack, Cyber Security, Cloud & DevOps and UI/UX." },
      { property: "og:title", content: "Tevexxo Courses — AI, Full Stack, Cloud & more" },
      { property: "og:description", content: "Six industry-aligned Tevexxo programs in AI/ML, Data Analytics, Full Stack, Cyber Security, Cloud & DevOps and UI/UX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
