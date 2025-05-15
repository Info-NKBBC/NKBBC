import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import AboutUsSubNav from '../../components/AboutUsSubNav';
import MeetingCard from '../../components/MeetingCard';

export default function Meetings() {
  const meetings = [
    {
      id: 1,
      title: '主日崇拜',
      description: '每週日舉行的主日崇拜，讓我們一同敬拜神，領受神的話語。',
      time: '每週日 上午 10:00-12:00',
      location: '教會大堂',
      target: '全體會友及慕道友',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      title: '禱告會',
      description: '同心合意的禱告會，為教會、國家和個人需要代求。',
      time: '每週三 晚上 7:30-9:00',
      location: '教會副堂',
      target: '全體會友',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: '查經班',
      description: '深入研讀聖經，明白神的話語，應用在日常生活中。',
      time: '每週五 晚上 7:30-9:30',
      location: '教會教室',
      target: '渴慕神話語的弟兄姊妹',
      gradient: 'from-green-500 to-teal-400'
    },
    {
      id: 4,
      title: '團契聚會',
      description: '小組團契生活，彼此關懷、分享與代禱。',
      time: '每週六 下午 2:00-4:00',
      location: '教會各團契教室',
      target: '各團契成員',
      gradient: 'from-yellow-500 to-orange-400'
    },
    {
      id: 5,
      title: '青年聚會',
      description: '專為青年人設計的聚會，在真理中成長，在愛中建立。',
      time: '每週六 晚上 7:00-9:00',
      location: '青年中心',
      target: '12-30歲青年',
      gradient: 'from-red-500 to-pink-400'
    },
    {
      id: 6,
      title: '兒童主日學',
      description: '透過詩歌、故事和遊戲，讓孩子在歡樂中認識神。',
      time: '每週日 上午 10:00-12:00',
      location: '兒童主日學教室',
      target: '3-12歲兒童',
      gradient: 'from-indigo-500 to-blue-400'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>教會的各種成全聚會 | 南科福氣教會</title>
        <meta name="description" content="了解南科福氣教會的各種聚會時間與內容" />
      </Head>
      <AboutUsSubNav />
      
      <main className="flex-grow">
        {/* 主標題區塊 */}
        <section className="relative pt-32 pb-12 md:pt-48 md:py-28 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
                教會聚會
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                我們提供多樣化的聚會，幫助每位會友在真理中成長，在愛中建立，在盼望中前進
              </p>
            </motion.div>
          </div>
        </section>

        {/* 聚會內容 */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {meetings.map((meeting) => (
                <MeetingCard 
                  key={meeting.id}
                  id={meeting.id}
                  title={meeting.title}
                  description={meeting.description}
                  time={meeting.time}
                  location={meeting.location}
                  target={meeting.target}
                  gradient={meeting.gradient}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}