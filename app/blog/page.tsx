
import Link from "next/link";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/prisma";

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            title: true,
            slug: true,
            excerpt: true,
            createdAt: true,
        },
    });

    return (
        <Container>
            <section className="py-20">
                <SectionTitle
                    title="Chess Blog"
                    description="Practical articles about chess improvement, strategy, openings, endgames and lessons from real games."
                />

                {posts.length === 0 ? (
                    <div className="mt-12 rounded-lg border border-slate-200 bg-white p-10 text-center">
                        <h2 className="text-xl font-semibold text-slate-900">
                            No articles yet
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            New chess articles will be published here soon.
                        </p>
                    </div>
                ) : (
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="flex flex-col rounded-lg border border-slate-200 bg-white p-6"
                            >
                                <time
                                    dateTime={post.createdAt.toISOString()}
                                    className="text-sm font-medium text-slate-500"
                                >
                                    {post.createdAt.toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        timeZone: "UTC",
                                    })}
                                </time>

                                <h2 className="mt-3 text-xl font-semibold text-slate-900">
                                    {post.title}
                                </h2>

                                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                                    {post.excerpt ?? "Read this article to learn more."}
                                </p>

                                <div className="mt-6">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                                    >
                                        Read Article
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </Container>
    );
}
