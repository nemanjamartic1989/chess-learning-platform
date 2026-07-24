export default function CoachingPage() {
    return (
        <main className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">
                Chess Coaching
            </h1>

            <p className="mb-4">
                I offer personalized online chess lessons for beginners,
                intermediate, and advanced players.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3">
                What you can expect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
                <li>Personalized training plan</li>
                <li>Opening preparation</li>
                <li>Tactical exercises</li>
                <li>Game analysis</li>
                <li>Middlegame strategy</li>
                <li>Endgame technique</li>
                <li>Homework between lessons</li>
            </ul>
        </main>
    );
}