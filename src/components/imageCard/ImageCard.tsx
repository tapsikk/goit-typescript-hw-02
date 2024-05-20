import './ImageCard.css';

type ImageCardProps = {
  image: {
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
  };
  openModal: (url: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };

  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;