import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const GITHUB_OWNER = "VictorNoe24";
const GITHUB_REPO = "portfolio";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: `https://${GITHUB_OWNER.toLowerCase()}.github.io`,
  base: isGitHubPagesBuild ? `/${GITHUB_REPO}` : "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
