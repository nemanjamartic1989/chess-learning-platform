import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

export default function HomePage() {
    return (
        <Container>
            <Hero />

            <section className="py-12">
                <SectionTitle
                    title="About Chess Learning Platform"
                    description="A place where chess players can improve through structured training and educational content."
                />
            </section>

            <section className="py-12">
                <SectionTitle
                    title="Chess Coaching"
                    description="Personalized lessons for beginners and advanced players."
                />
            </section>

            <section className="py-12">
                <SectionTitle
                    title="Latest Chess Articles"
                    description="Practical chess knowledge, strategies and analysis."
                />
            </section>
        </Container>
    );
}