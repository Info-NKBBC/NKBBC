'use client';
import Image from 'next/image';

const photos = [
  { src: '/images/about.jpg', alt: '教堂內部' },
  { src: '/images/worship.jpg', alt: '敬拜' },
  { src: '/images/community.jpg', alt: '團契' },
  { src: '/images/smallgroup.jpg', alt: '小組' },
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-square group">
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h3 className="text-lg font-semibold">{photo.alt}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
