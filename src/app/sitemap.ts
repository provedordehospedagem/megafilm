export const dynamic = "force-static"

import type { MetadataRoute } from "next";

const baseUrl = "https://megafilm.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/catalogo", "/servicos", "/sobre", "/contato"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}