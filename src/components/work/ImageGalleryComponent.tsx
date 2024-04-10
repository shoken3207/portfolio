"use client";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImageGalleryComponent = ({
  images,
}: {
  images: { original: string; thumbnail: string }[];
}) => {
  return <ImageGallery items={images} />;
};

export default ImageGalleryComponent;
