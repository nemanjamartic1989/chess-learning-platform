import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

export default function HomePage() {
    return (
        <>
            <Hero />

            <Container>
                <section className="py-20">
                    <SectionTitle
                        title="About Chess Learning Platform"
                        description="A place where chess players can improve through structured training and educational content."
                    />

                    <div className="mt-8">
                        <Button href="/about">
                            Learn More
                        </Button>
                    </div>
                </section>

                <section className="py-20">
                    <SectionTitle
                        title="Chess Coaching"
                        description="Personalized chess training focused on improving your understanding, calculation and practical decision-making."
                    />

                    <div className="mt-8">
                        <Button href="/coaching">
                            View Coaching
                        </Button>
                    </div>
                </section>

                <section className="py-20">
                    <SectionTitle
                        title="Latest Chess Articles"
                        description="Practical chess knowledge, strategies, ideas and game analysis."
                    />

                    <div className="mt-8">
                        <Button href="/blog">
                            Read Articles
                        </Button>
                    </div>
                </section>
            </Container>
        </>
    );
}