import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Tevexxo — Talk to a learning advisor" },
      { name: "description", content: "Questions about a Tevexxo program, a free demo or a partnership? We usually reply within one business day." },
      { property: "og:title", content: "Contact Tevexxo — Talk to a learning advisor" },
      { property: "og:description", content: "Questions about a Tevexxo program, a free demo or a partnership? We usually reply within one business day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
