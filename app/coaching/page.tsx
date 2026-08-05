import Container from "@/components/Container";

export default function CoachingPage() {
    return (
        <Container>
            <section className="py-16">
                <h1 className="text-4xl font-bold">
                    Chess Coaching
                </h1>

                <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Personal training plan</li>
                    <li>Opening preparation</li>
                    <li>Tactical improvement</li>
                    <li>Game analysis</li>
                    <li>Endgame technique</li>
                </ul>
            </section>
        </Container>
    );
}