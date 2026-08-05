import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="py-20">
            <h1 className="text-5xl font-bold text-slate-900">
                Improve Your Chess Skills
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-600">
                Learn chess with a FIDE Candidate Master.
                Structured lessons, game analysis, strategy,
                tactics and endgame training.
            </p>

            <div className="mt-8 flex gap-4">
                <Button href="/coaching">
                    Start Coaching
                </Button>

                <Button
                    href="/blog"
                    variant="secondary"
                >
                    Read Articles
                </Button>
            </div>
        </section>
    );
}