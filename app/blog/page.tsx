import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

const articles = [
    {
        title: "Understanding the Philidor Position",
        description:
            "Learn the key ideas behind one of the most important rook endgame positions.",
        category: "Endgames",
    },
    {
        title: "How to Create a Middlegame Plan",
        description:
            "A practical approach to evaluating positions and finding the right plan.",
        category: "Strategy",
    },
    {
        title: "Common Mistakes in the Opening",
        description:
            "Discover some of the most common opening mistakes and how to avoid them.",
        category: "Openings",
    },
];

export default function BlogPage() {
    return (
        <Container>
            <section className="py-20">
                <SectionTitle
                    title="Chess Blog"
                    description="Practical articles about chess improvement, strategy, openings, endgames and lessons from real games."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article
                            key={article.title}
                            className="flex flex-col rounded-lg border border-slate-200 bg-white p-6"
                        >
                            <span className="text-sm font-medium text-slate-500">
                                {article.category}
                            </span>

                            <h2 className="mt-3 text-xl font-semibold text-slate-900">
                                {article.title}
                            </h2>

                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                                {article.description}
                            </p>

                            <div className="mt-6">
                                <Button
                                    href={`/blog/${article.title
                                        .toLowerCase()
                                        .replaceAll(" ", "-")}`}
                                    variant="secondary"
                                >
                                    Read Article
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </Container>
    );
}