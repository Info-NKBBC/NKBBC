import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AboutAccordionProps {
  items: AccordionItem[];
}

export default function AboutAccordion({ items }: AboutAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-200">
          <button
            className={`w-full text-left px-6 py-4 font-bold text-xl flex justify-between items-center focus:outline-none transition bg-white hover:bg-gray-50 ${openIdx === idx ? 'text-teal-700' : 'text-gray-800'}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
          >
            <span>{item.title}</span>
            <span className={`ml-2 transform transition-transform ${openIdx === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openIdx === idx ? 'max-h-[1000px] py-4 px-6' : 'max-h-0 py-0 px-6'}`}
            style={{}}
          >
            {openIdx === idx && (
              <div className="text-gray-700 text-base">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
