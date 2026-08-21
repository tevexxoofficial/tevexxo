import { createFileRoute } from "@tanstack/react-router";
import { WhyTevexxoPage } from "@/components/pages/WhyTevexxoPage";

export const Route = createFileRoute("/why-tevexxo")({
  component: WhyTevexxoPage,
  head: () => ({
    meta: [
      { title: "Why Tevexxo — Learn with a real advantage" },
      { name: "description", content: "Industry-aligned curriculum, hands-on projects, expert mentors, certification and placement support — see why learners choose Tevexxo." },
      { property: "og:title", content: "Why Tevexxo — Learn with a real advantage" },
      { property: "og:description", content: "Industry-aligned curriculum, hands-on projects, expert mentors, certification and placement support — see why learners choose Tevexxo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
