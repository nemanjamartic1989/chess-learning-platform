import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto px-6 py-16">
            <section className="space-y-6">
                <h1 className="text-5xl font-bold">
                    Welcome to Chess Learning Platform
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl">
                    My name is Nemanja Martic, a FIDE Candidate Master (CM) and
                    passionate chess coach. This platform is dedicated to helping
                    chess players improve through structured lessons, practical
                    examples, game analysis, and educational articles.
                </p>

                <p className="text-lg text-gray-600 max-w-3xl">
                    Whether you're just starting your chess journey or aiming to
                    reach an advanced level, you'll find useful resources,
                    coaching information, and regularly published blog posts.
                </p>
            </section>
        </main>
    </div>
  );
}
