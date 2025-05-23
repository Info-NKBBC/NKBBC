'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Calendar, MapPin, Pencil, Clock } from 'lucide-react';
import { client, fetchQuery, getOptimizedImage } from '../../lib/sanity.client';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import type { Event as EventType } from '../../types/event';
import { PortableText } from '@portabletext/react';

// 動態載入表單組件，禁用 SSR
const EventRegistrationForm = dynamic(
  () => import('@/components/EventRegistrationForm'),
  { ssr: false }
);

type Event = EventType;

export default function EventRegistration() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<{ id: string, title: string } | null>(null);
  const [error, setError] = useState('');

  // 報名人數（map: eventId -> count）
  const [registrationCounts, setRegistrationCounts] = useState<{ [key: string]: number | null }>({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const query = `*[_type == "event"] | order(date asc) {
          _id,
          title,
          date,
          endDate,
          location,
          description,
          content,
          "image": image,
          registrationUrl,
          category
        }`;
        const data = await fetchQuery(query);

        if (!data || !Array.isArray(data)) {
          throw new Error('Invalid data format');
        }

        const formattedEvents = data.map((event: any) => {
          const rawDateObj = event.date ? new Date(event.date) : null;
          const rawEndDateObj = event.endDate ? new Date(event.endDate) : null;
          return {
            ...event,
            _rawDateObj: rawDateObj,
            _rawEndDateObj: rawEndDateObj,
            displayDate: rawDateObj
              ? rawDateObj.toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long'
                })
              : '無日期',
          };
        });

        setEvents(formattedEvents);
        setLoading(false);

        // 查詢所有活動的報名人數
        for (const event of data) {
          fetch(`/api/event-registration-count?eventId=${event._id}`)
            .then(res => res.json())
            .then(data => {
              setRegistrationCounts(prev => ({ ...prev, [event._id]: data.count }));
            })
            .catch(() => {
              setRegistrationCounts(prev => ({ ...prev, [event._id]: null }));
            });
        }
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : '未知錯誤';
        setError(`無法載入活動資訊，請稍後再試 (${errorMessage})`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const portableTextComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="text-2xl font-bold mt-4 mb-2 text-pink-700">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-xl font-semibold mt-3 mb-2 text-blue-700">{children}</h2>,
      normal: ({ children }: any) => <p className="mb-3">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700 my-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-3">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-3">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
      number: ({ children }: any) => <li className="mb-1">{children}</li>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-pink-600">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      underline: ({ children }: any) => <span className="underline">{children}</span>,
      link: ({ children, value }: any) => (
        <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-pink-600">{children}</a>
      ),
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-4 bg-blue-400 rounded-full delay-100"></div>
          <div className="h-4 w-4 bg-blue-400 rounded-full delay-200"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center p-4">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            重新載入
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 relative overflow-hidden">
        {/* 裝飾性背景元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto pb-24 relative z-10">
          <div className="pt-32">
            {events.length > 0 ? (
              events.map((event) => (
                <div key={event._id} className="mb-12">
                  <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl overflow-hidden border border-white/20 transition-all duration-300 hover:shadow-2xl hover:bg-white/80">
                    <div className="md:flex items-stretch">
                      <div className="p-8 flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <Calendar className="w-8 h-8 text-pink-500" />
                          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">{event.title}</h2>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{event.displayDate}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>
                              {event._rawDateObj
                                ? event._rawEndDateObj
                                  ? `${event._rawDateObj.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })} - ${event._rawEndDateObj.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}`
                                  : event._rawDateObj.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })
                                : ''}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          {/* 報名人數 */}
                          <div className="flex items-center text-blue-700 font-bold mt-2">
                            <span className="mr-2">目前報名人數：</span>
                            <span>
                              {registrationCounts[event._id] === null || registrationCounts[event._id] === undefined
                                ? '查詢中...'
                                : registrationCounts[event._id]}
                            </span>
                          </div>
                          <p className="text-gray-700 mt-2">{event.description}</p>
                          {event.content && (
                            <div className="prose prose-lg max-w-none mt-4 text-gray-800">
                              <PortableText value={event.content} components={portableTextComponents} />
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => setSelectedEvent({ id: event._id, title: event.title })}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity transform hover:-translate-y-0.5 shadow-lg hover:shadow-pink-200 mt-6"
                        >
                          <Pencil className="w-4 h-4" />
                          報名參加
                        </button>
                      </div>
                      {event.image && (
                        <div className="hidden md:flex items-center w-full md:w-1/2 lg:w-2/5 relative pr-8">{/* ← 只加 pr-8 */}
                          <div className="relative w-full h-48 md:h-56 lg:h-64">
                            {/* object-left 讓圖片主要靠左，pr-8 增加右邊間距 */}
                            <Image
                              src={getOptimizedImage(event.image, 800, 450, 80)}
                              alt={event.title}
                              fill
                              className="object-cover object-left transition-transform duration-700 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">目前沒有活動</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer className="relative z-10" />

      {/* 報名表單彈窗 */}
      {selectedEvent && (
        <EventRegistrationForm
          eventId={selectedEvent.id}
          eventTitle={selectedEvent.title}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* 動畫 keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .prose ul { list-style: disc; margin-left: 1.5em; }
        .prose ol { list-style: decimal; margin-left: 1.5em; }
        .prose h1, .prose h2 { margin-top: 1.5em; margin-bottom: 0.5em; }
        .prose strong { color: #db2777; }
        .prose a { color: #2563eb; text-decoration: underline; }
        .prose blockquote { border-left: 4px solid #60a5fa; color: #64748b; }
      `}</style>
    </>
  );
}
