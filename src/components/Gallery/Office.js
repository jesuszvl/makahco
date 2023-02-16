import officePic from "../../../public/office.png";
import outsidePic from "../../../public/outside.png";
import terracePic from "../../../public/terrace.png";
import Gallery from "./Gallery";

export default function Office() {
  return (
    <Gallery
      title="Welcome to the Jungle"
      images={[officePic, outsidePic, terracePic]}
    />
  );
}
