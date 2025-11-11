import Image from 'next/image'
import Link from 'next/link'
import nextConfig from '../../../next.config'

interface ProjectCardProps {
  id: string,
  title: string,
  description: string,
  project_link: string,
  image_source: string,
  tech: string[]
}

export default function ProjectCard({id, title, description, project_link, image_source, tech}: ProjectCardProps) {
  return (
    <Link
      href={project_link}
      target="blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${title} project page`}
    >
      <div className="flex flex-col md:flex-row rounded hover:bg-charcoal">
        <div className="relative w-36 h-36 flex-shrink-0">
          <Image
            src={`${nextConfig.basePath}${image_source}`}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover rounded"
          />
        </div>

        <div className="pt-2 md:pl-4 md:pt-0">
            <h3 className="text-xl font-bold text-yukiwhite">{title}</h3>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </Link>
  )
}
