// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    images: { type: "list", of: { type: "string" }, required: false },
    publishedAt: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    description: { type: "string" },
    thumbnail: { type: "string" }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/shared/contentlayer",
  documentTypes: [Project],
  mdx: {}
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UAGAYYSD.mjs.map
