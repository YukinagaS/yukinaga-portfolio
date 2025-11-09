import projects from '../data/projects.json'
import ProjectCard from '../components/projectcard'

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-yukiwhite">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project}/>
      ))}
    </section>
  )
}
