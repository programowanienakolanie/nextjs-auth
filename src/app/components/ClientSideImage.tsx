"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const ClientSideImage = ({ src, alt }: Props) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <div>Image failed to load</div>;
  }

  return (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={src}
      width={200}
      height={200}
      alt={alt}
      priority
      onError={() => setImageError(true)}
    />
  );
};

export default ClientSideImage;
