import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DATA.name} - DevOps Engineer Portfolio`,
    short_name: "Chirag DevOps",
    description: DATA.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["technology", "business", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Desktop view of DevOps portfolio",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Mobile view of DevOps portfolio",
      },
    ],
    related_applications: [
      {
        platform: "webapp",
        url: "https://chiragdev.in",
      },
    ],
    prefer_related_applications: false,
  };
}
