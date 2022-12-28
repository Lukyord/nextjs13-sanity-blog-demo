"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
if (!projectId) {
  throw new Error(`Missing projectId. Check your sanity.json or .env`);
}
if (!dataset) {
  throw new Error(`Missing dataset. Check your sanity.json or .env`);
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
