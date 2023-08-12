import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faThumbsUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'; // Added faQuestionCircle

interface OfferImageProps {
  src: string;
  alt: string;
  offerTitle: string;
}

const OfferImage: React.FC<OfferImageProps> = ({ src, alt, offerTitle }) => {
  const [isImageBroken, setIsImageBroken] = React.useState(false);

  const handleError = () => {
    setIsImageBroken(true);
  };

  const getFallbackIcon = (title: string) => {
    switch (title) {
      case "Gift packaging":
        return faGift;
      case "First in line":
        return faThumbsUp;
      default:
        return faQuestionCircle;  // default icon
    }
  };

  return (
    <>
      {!isImageBroken ? (
        <img src={src} alt={alt} onError={handleError} className="object-cover bg-gray-100 h-16 w-16" />
      ) : (
        <div className="bg-gray-100 h-16 w-16 flex justify-center items-center">
          <FontAwesomeIcon icon={getFallbackIcon(offerTitle)} size="lg" />
        </div>
      )}
    </>
);

};

export default OfferImage;
