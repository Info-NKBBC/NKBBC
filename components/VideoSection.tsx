'use client';
export default function VideoSection() {
  const videos = [
    { title:'最新講道：恩典之路', thumbnail:'/images/video1.jpg', link:'#' },
    { title:'兒青專題：信心旅程', thumbnail:'/images/video2.jpg', link:'#' },
  ];
  return (
    <section id="影音平台" className="bg-light py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">影音平台</h2>
        <div className="mx-auto mb-12 max-w-3xl aspect-video">
          <iframe className="w-full h-full rounded-2xl shadow-lg" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" allowFullScreen/>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {videos.map(v=>(
            <a key={v.title} href={v.link} className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src={v.thumbnail} alt={v.title} className="w-full h-48 object-cover group-hover:scale-105 transition"/>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-primary">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 