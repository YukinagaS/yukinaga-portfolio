import Link from "next/link";
import SocialLinks from "@/app/components/sociallinks"
import AboutPage from "@/app/about/page"
import ProjectsPage from "@/app/projects/page"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row p-12 gap-8">
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
