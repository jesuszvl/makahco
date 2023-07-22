import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/shop");

export default function Shop() {
  return (
    <PageContainer
      title="Makahco | Shop"
      description="Descubre tu estilo único con nuestra alucinante selección de ropa y accesorios de moda."
    >
      <div className="content">🛒</div>
    </PageContainer>
  );
}
