export default function BlogPage() {
    return (
        <main className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">
                Chess Blog
            </h1>

            <p className="mb-8">
                Here you'll find educational chess articles, practical tips,
                opening ideas, endgame lessons, tournament experiences, and game
                analysis.
            </p>

            <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold">
                    No articles yet
                </h2>

                <p className="text-gray-600 mt-2">
                    Stay tuned! New chess content will be published soon.
                </p>
            </div>
        </main>
    );
}