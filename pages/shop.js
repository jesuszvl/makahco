import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/shop");

export default function Shop() {
  return (
    <PageContainer
      title="Makahco | Shop"
      content="Find your ultimate style with our amazing range of trendy clothes and accessories."
    >
      <div className="content">🛒</div>
    </PageContainer>
  );
}
