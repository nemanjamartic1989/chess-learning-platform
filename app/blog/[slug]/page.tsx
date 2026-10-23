
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import { prisma } from "@/lib/prisma";

type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { slug } = await params;

    const post = await prisma.post.findFirst({
        where: {
            slug,
            published: true,
        },
        select: {
            title: true,
            content: true,
            createdAt: true,
        },
    });

    if (!post) {
        notFound();
    }

    return (
        <Container>
            <article className="mx-auto max-w-3xl py-20">
                <Link
                    href="/blog"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                    ← Back to Blog
                </Link>

                <time
                    dateTime={post.createdAt.toISOString()}
                    className="mt-8 block text-sm text-slate-500"
                >
                    {post.createdAt.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                    })}
                </time>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    {post.title}
                </h1>

                <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-slate-700">
                    {post.content}
                </div>
            </article>
        </Container>
    );
}
