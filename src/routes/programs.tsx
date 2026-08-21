import { createFileRoute } from "@tanstack/react-router";
import { ProgramsPage } from "@/components/pages/ProgramsPage";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Tevexxo Programs — Certifications & internships" },
      { name: "description", content: "Certification programs, industry projects, internships and career support built around real hiring outcomes." },
      { property: "og:title", content: "Tevexxo Programs — Certifications & internships" },
      { property: "og:description", content: "Certification programs, industry projects, internships and career support built around real hiring outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
