import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/blog");

export default function Blog() {
  return (
    <PageContainer title="Makahco | Blog">
      <div className="content">✍🏽</div>
    </PageContainer>
  );
}
