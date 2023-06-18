import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/");

export default function Index() {
  return (
    <PageContainer title="Makahco | Home">
      <Hero />
      <About />
    </PageContainer>
  );
}
