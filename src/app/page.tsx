import SocialLinks from "@/app/components/sociallinks"
import AboutPage from "@/app/about/page"
import ProjectsPage from "@/app/projects/page"

export default function Home() {
  return (
    <div className="h-full w-full p-5 flex flex-col gap-8 md:flex-row md:p-12">
      <header className="basis-2/5">
        <h1 className="text-4xl font-bold text-yukiwhite">Stuart Yukinaga</h1>
        <h2 className="text-l mt-2 text-yukiwhite">デジタル職人の理想に向かって、</h2>
        <h2 className="text-l text-yukiwhite">日々精進中</h2>
        <SocialLinks />
      </header>
      <main className="basis-3/5">
        <AboutPage />
        <ProjectsPage />
      </main>
    </div>
  );
}
