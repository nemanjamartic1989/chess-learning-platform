import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

const coachingAreas = [
    {
        title: "Personal Training Plan",
        description:
            "A structured training plan based on your playing level, goals and individual weaknesses.",
    },
    {
        title: "Opening Preparation",
        description:
            "Build a practical opening repertoire and understand the ideas behind the positions you play.",
    },
    {
        title: "Tactical Improvement",
        description:
            "Improve calculation, pattern recognition and your ability to find tactical opportunities.",
    },
    {
        title: "Game Analysis",
        description:
            "Analyze your own games to identify mistakes, understand critical moments and find ways to improve.",
    },
    {
        title: "Middlegame Strategy",
        description:
            "Learn how to evaluate positions, create plans and make better strategic decisions.",
    },
    {
        title: "Endgame Technique",
        description:
            "Develop a strong understanding of fundamental endgames and practical winning and drawing techniques.",
    },
];

export default function CoachingPage() {
    return (
        <Container>
            <section className="py-20">
                <SectionTitle
                    title="Chess Coaching"
                    description="Personalized chess training designed to help you understand the game better and improve your practical results."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {coachingAreas.map((area) => (
                        <div
                            key={area.title}
                            className="rounded-lg border border-slate-200 bg-white p-6"
                        >
                            <h2 className="text-lg font-semibold text-slate-900">
                                {area.title}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button href="/contact">
                        Get in Touch
                    </Button>
                </div>
            </section>
        </Container>
    );
}