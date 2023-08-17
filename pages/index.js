import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import PageContainer from "../src/components/PageContainer/PageContainer";

export default function Index() {
  return (
    <PageContainer
      title="Makahco | Home"
      description="Mata Al Karma Ahora, Hazlo Con Orden"
    >
      <Hero />
      <About />
    </PageContainer>
  );
}
