import { createFileRoute } from "@tanstack/react-router";
import TevexxoPage from "@/components/TevexxoPage";

const title = "Tevexxo — Build Skills. Build Your Future.";
const description =
  "Industry-focused technology training programs. Learn AI, Full Stack, Data Analytics, Cyber Security, Cloud & DevOps and UI/UX with real-world projects and expert mentors.";

export const Route = createFileRoute("/")({
  component: TevexxoPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
