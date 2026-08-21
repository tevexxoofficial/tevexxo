import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Tevexxo Projects — Build. Showcase. Get Hired." },
      { name: "description", content: "Portfolio-grade projects from Tevexxo programs, mirroring what engineering teams ship in production." },
      { property: "og:title", content: "Tevexxo Projects — Build. Showcase. Get Hired." },
      { property: "og:description", content: "Portfolio-grade projects from Tevexxo programs, mirroring what engineering teams ship in production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
