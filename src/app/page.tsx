import SocialLinks from "@/app/components/sociallinks";
import BlogSection from "@/app/components/blogsection";
import AboutPage from "@/app/about/page";
import ProjectsPage from "@/app/projects/page";
import { getSortedPostsData } from '@/app/lib/posts';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex-1 p-5 flex flex-col gap-8 md:flex-row md:py-12">
      <header className="basis-2/5">
        <h1 className="text-4xl font-bold text-yukiwhite">Stuart Yukinaga</h1>
        <h2 className="text-l mt-2 text-yukiwhite">デジタル職人の理想に向かって、</h2>
        <h2 className="text-l text-yukiwhite">日々精進中</h2>
        <SocialLinks />
      </header>
      <main className="basis-3/5">
        <AboutPage />
        <BlogSection allPostsData={allPostsData} />
        <ProjectsPage />
      </main>
    </div>
  );
}
