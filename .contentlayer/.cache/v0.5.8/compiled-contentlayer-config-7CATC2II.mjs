// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    image1: { type: "image" },
    published: { type: "date", required: true },
    tags: { type: "list" }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Project],
  mdx: {}
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7CATC2II.mjs.map
