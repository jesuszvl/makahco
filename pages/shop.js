import useSWR from "swr";

import PageContainer from "../src/components/PageContainer/PageContainer";
import ProductCard from "../src/components/ProductCard/ProductCard";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/shop");

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Shop() {
  const { data } = { data: null }; // useSWR("https://dummyjson.com/products", fetcher);

  return (
    <PageContainer
      title="Makahco | Shop"
      description="Descubre tu estilo único con nuestra alucinante selección de ropa y accesorios de moda."
    >
      <div className="content">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageContainer>
  );
}
