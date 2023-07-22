import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/blog");

export default function Blog() {
  return (
    <PageContainer
      title="Makahco | Blog"
      description="Explora una enorme cantidad de experiencias de primera mano y tips en nuestro blog."
    >
      <div className="content">✍🏽</div>
    </PageContainer>
  );
}
