import Container from "@/components/Container";

export default function AboutPage() {
    return (
        <Container>
            <section className="py-16">
                <h1 className="text-4xl font-bold">
                    About Me
                </h1>

                <p className="mt-6 text-slate-600">
                    I am Nemanja Martic, FIDE Candidate Master
                    and chess coach. My goal is to help players
                    understand chess deeper and improve their skills.
                </p>

                <p className="mt-4 text-slate-600">
                    My coaching focuses on tactics, strategy,
                    openings, middlegames, endgames and practical
                    game analysis.
                </p>
            </section>
        </Container>
    );
}