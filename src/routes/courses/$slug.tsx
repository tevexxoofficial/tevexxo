import { createFileRoute } from "@tanstack/react-router";
import { CourseDetailPage } from "@/components/pages/CourseDetailPage";

export const Route = createFileRoute("/courses/$slug")({
  component: CourseDetailRoute,
  head: () => ({
    meta: [
      { title: "Course — Tevexxo" },
      {
        name: "description",
        content: "Explore this Tevexxo course: details, pricing and enquiry.",
      },
      { property: "og:title", content: "Course — Tevexxo" },
      {
        property: "og:description",
        content: "Explore this Tevexxo course: details, pricing and enquiry.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CourseDetailRoute() {
  const { slug } = Route.useParams();
  return <CourseDetailPage slug={slug} />;
}
