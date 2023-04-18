import musicPic from "../../../public/music.png";
import photoPic from "../../../public/photo.png";
import softwarePic from "../../../public/software.png";
import Gallery from "./Gallery";

export default function People() {
  return (
    <Gallery
      title="We got Fun and Games"
      images={[softwarePic, musicPic, photoPic]}
    />
  );
}
