import React from 'react';

const icons = [
  { href: '#', label: 'Facebook', icon: 'fa-facebook-f' },
  { href: '#', label: 'Instagram', icon: 'fa-instagram' },
  { href: '#', label: 'Line', icon: 'fa-line' },
  { href: '#', label: 'Youtube', icon: 'fa-youtube' },
];

export default function SocialFloat() {
  return (
    <div className="fixed top-1/3 right-4 z-50 flex flex-col gap-4">
      {icons.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-yellow-500 transition"
          aria-label={item.label}
        >
          <i className={`fab ${item.icon} text-2xl text-gray-800`}></i>
        </a>
      ))}
    </div>
  );
}
