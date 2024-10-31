import { prisma } from '@argon/shell-prisma-shell-utils';

export async function fetchUsers() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

// 3export const getServerSideProps = async ({ req }) => {
//   4  const token = req.headers.AUTHORIZATION
//   5  const userId = await getUserId(token)
//   6  const posts = await prisma.post.findMany({
//   7    where: {
//   8      author: { id: userId },
//   9    },
//   10  })
//   11  return { props: { posts } }
//   12}
