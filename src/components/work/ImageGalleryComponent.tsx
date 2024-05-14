"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryComponent = ({
  images,
}: {
  images: { original: string; thumbnail: string }[];
}) => {
  return <ImageGallery items={images} />;
};

export default ImageGalleryComponent;
