import fs from 'fs'; // Node.js module that reads files from file system
import path from 'path'; // Node.js module that manipulates file paths
import matter from 'gray-matter'; // Library for parsing markdown metadata
import { remark } from 'remark';
import html from 'remark-html';

export interface PostProps {
  id: string;
  date: string;
  title: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/app/posts');

export function getSortedPostsData(): PostProps[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResults = matter(fileContents);

    // OCmbine the data with the id
    return {
      id,
      title: matterResults.data.title,
      date: matterResults.data.date,
      content: matterResults.content,
    } as PostProps;
  });
  // Sort posts by date
  return allPostsData.sort((a,b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostProps> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResults = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResults.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    date: matterResults.data.date,
    title: matterResults.data.title,
    content: contentHtml
  };
}
