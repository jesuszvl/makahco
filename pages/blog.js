import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/blog");

export default function Blog() {
  return (
    <PageContainer
      title="Makahco | Blog"
      content="Explore an abundance of exciting hands-on experiences in our captivating blog."
    >
      <div className="content">✍🏽</div>
    </PageContainer>
  );
}
