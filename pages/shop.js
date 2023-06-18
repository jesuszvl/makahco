import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/shop");

export default function Shop() {
  return (
    <PageContainer title="Makahco | Shop">
      <div className="content">🛒</div>
    </PageContainer>
  );
}
