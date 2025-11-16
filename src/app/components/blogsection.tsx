import Link from 'next/link'
import { PostProps } from '../lib/posts';

interface BlogSectionProps {
  allPostsData: PostProps[];
}

export default function BlogSection({ allPostsData }: BlogSectionProps) {
  return (
    <section className="flex flex-col gap-4 mb-8">
      <h2 className="text-2xl font-bold text-yukiwhite">Weblog</h2>
      <ul>
        {allPostsData.map(({ id, date, title}) => (
          <li key={id}>
            <Link
            href={`weblog/${id}`}
            className="underline hover:no-underline"
            >
            {date} - {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
