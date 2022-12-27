import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset: string = process.env.EXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "nextjs13_sanity_blog",
  title: "Nextjs13 Sanity Blog",
  projectId: "7e0x7tym",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
