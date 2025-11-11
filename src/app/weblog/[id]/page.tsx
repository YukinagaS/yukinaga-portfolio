import { PostProps } from '@/app/lib/posts';
import { getSortedPostsData } from '@/app/lib/posts';

interface PostPageProps {
  params: PostProps;
}

export async function generateStaticParams() {
  const sortedPosts = await getSortedPostsData();
  return sortedPosts.map((post) => ({
    id: post.id,
    title: post.title,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  console.log(resolvedParams.title);

  return (
    <article>
      {/* <h2>{params.title}</h2>
      <h3>{params.date}</h3>
      <p>{params.content}</p> */}
    </article>
  )
}
