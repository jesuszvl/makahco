import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery-title">Welcome to the Jungle</h1>
      <div className="grid">
        <img className="image" src="outside.png" alt="outside" />
        <img className="image" src="terrace.png" alt="terrace" />
        <img className="image" src="office.png" alt="office" />
      </div>
    </div>
  );
};

export default Gallery;
