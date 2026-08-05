import Container from "@/components/Container";

export default function BlogPage() {
    return (
        <Container>
            <section className="py-16">
                <h1 className="text-4xl font-bold">
                    Chess Blog
                </h1>

                <p className="mt-6 text-slate-600">
                    Articles about chess improvement,
                    strategies, openings and practical lessons.
                </p>
            </section>
        </Container>
    );
}