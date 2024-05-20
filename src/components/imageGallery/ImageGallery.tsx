import ImageCard from '../imageCard/ImageCard';
import './ImageGallery.css';

type Image = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
};

type ImageGalleryProps = {
  images: Image[];
  openModal: (url: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;