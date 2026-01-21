import { defineCollection, defineConfig, s } from 'velite';

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').pop() || data.slug,
});

const posts = defineCollection({
    name: 'Post',
    pattern: 'posts/**/*.mdx',
    schema: s.object({
        title: s.string().max(100),
        slug: s.path(),
        publishedAt: s.isodate(),
        description: s.string().max(150).optional(),
        thumbnail: s.string().optional(),
        images: s.array(s.string()).optional(),
        tags: s.array(s.string()).default([]),
        github: s.string().optional(),
        body: s.mdx(),
    })
    .transform(computedFields)
});

export default defineConfig({
    root: "src/shared/content/",
    collections: { posts },
    output: {
        data: '.velite',
        assets: 'public/static',
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
});