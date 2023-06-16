import officePic from "../../../public/office.png";
import outsidePic from "../../../public/outside.png";
import terracePic from "../../../public/terrace.png";
import musicPic from "../../../public/music.png";
import photoPic from "../../../public/photo.png";
import softwarePic from "../../../public/software.png";
import Gallery from "./Gallery";

export default function Office() {
  return <Gallery images={[{ src: musicPic, caption: "music" }]} />;
}
