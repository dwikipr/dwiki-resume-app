import Contents from '@/components/Contents';
import Covers from '@/components/Covers';
import Footer from '@/components/Footer';
import Headers from '@/components/Headers';
import resumeData from '@/public/data/resume.json';

// Server Component - allowed to be async (in app directory)
export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--dm-sans)] max-w-[1440px] mx-auto">
      {/* HEADERS */}
      <Headers data={resumeData} />
      {/* COVER */}
      <Covers data={resumeData} />
      {/* CONTENTS */}
      <Contents data={resumeData} />
      {/* FOOTER */}
      <Footer data={resumeData} />
    </div>
  );
}
