import { defineConfig, StudioLogo, StudioNavbar } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { Theme } from "./theme";
import StudioNavbarCustomize from "./components/SanityDesign/StudioNavbarCustomize";
import Logo from "./components/SanityDesign/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "nextjs13_sanity_blog",
  title: "Nextjs13 Sanity Blog",
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbarCustomize,
    },
  },
  theme: Theme,
});
