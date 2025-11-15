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
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </article>
  )
}
