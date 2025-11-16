import Link from 'next/link'
import { getAllPostIds, getPostData } from '@/app/lib/posts'

export async function generateStaticParams() {
  const ids = getAllPostIds()

  return (
    ids.map((item) => ({
      id: item.params.id
    }))
  )
}

export default async function PostPage({ params,}: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const data = await getPostData(id);

  return (
    <article className="flex-1 p-5 flex flex-col gap-2">
      <header>
        <Link
        href="/"
        className="underline hover:no-underline"
        >
        Return to Home
        </Link>
      </header>
      <h1 className="text-3xl sm:text-4xl fond-bold">{data.title}</h1>
      <p className="font-light">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </article>
  )
}
