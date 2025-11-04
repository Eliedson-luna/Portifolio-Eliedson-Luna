import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        slug: { type: 'string', required: true },
        images: { type: 'list', of: { type: 'string' }, required: false },
        publishedAt: { type: 'date', required: true },
        tags: { type: 'list', of: { type: "string" } },
        description: { type: 'string' },
        thumbnail: {type: 'string'}
    },
}))

export default makeSource({
    contentDirPath: './src/content',
    documentTypes: [Project],
    mdx: {}
})