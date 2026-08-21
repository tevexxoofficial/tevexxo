import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Tevexxo — Practitioner-led tech training" },
      { name: "description", content: "Tevexxo is a technology training platform built by practitioners, with mentorship from first principles to shipped projects." },
      { property: "og:title", content: "About Tevexxo — Practitioner-led tech training" },
      { property: "og:description", content: "Tevexxo is a technology training platform built by practitioners, with mentorship from first principles to shipped projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
