import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

export default function AboutPage() {
    return (
        <Container>
            <section className="py-20">
                <SectionTitle
                    title="About Me"
                    description="FIDE Candidate Master and chess coach focused on helping players understand chess and improve through structured training."
                />

                <div className="mt-10 max-w-3xl space-y-6 text-slate-600">
                    <p>
                        I am Nemanja Martic, a FIDE Candidate Master and
                        chess coach. I have been playing chess for many
                        years and coaching players of different levels.
                    </p>

                    <p>
                        My approach to coaching is based on understanding
                        rather than memorizing. I help players develop
                        their ability to analyze positions, recognize
                        important ideas and make better decisions during
                        their games.
                    </p>

                    <p>
                        Our work can include opening preparation, tactical
                        training, middlegame strategy, endgames and
                        detailed analysis of your own games.
                    </p>
                </div>

                <div className="mt-10">
                    <Button href="/coaching">
                        Learn About Coaching
                    </Button>
                </div>
            </section>
        </Container>
    );
}