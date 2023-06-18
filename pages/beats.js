import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

trackPageView("/beats");

export default function Beats() {
  return (
    <PageContainer title="Makahco | Beats">
      <div className="content">
        <h3 className="page-title">
          Not ready yet... Listen to my fav jams in the meantime!
        </h3>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/2NzyWV9sT9rnKMncFHCkJG?utm_source=generator&theme=0"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </PageContainer>
  );
}
