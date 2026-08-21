import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailRoute,
  head: () => ({
    meta: [
      { title: "Project — Tevexxo" },
      { name: "description", content: "Real-world Tevexxo learner project: stack, links and details." },
      { property: "og:title", content: "Project — Tevexxo" },
      { property: "og:description", content: "Real-world Tevexxo learner project: stack, links and details." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ProjectDetailRoute() {
  const { slug } = Route.useParams();
  return <ProjectDetailPage slug={slug} />;
}
