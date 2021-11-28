import { React } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import posts from '../../public/api/posts.json';
import users from '../../public/api/users.json';
import Typography from '@mui/material/Typography';

const UserPosts = (props) => {
  const router = useRouter();
  const { id: userId } = router.query;

  const userPosts = posts.filter((post) => post.user == userId);
  const user = users.filter((user) => user.id == userId);

  const username = user && user.length > 0 && user[0].name;

  return (
    <Layout title='Blogger'>
      <Container maxWidth='lg'>
        <Typography variant='h4'>Posts from</Typography>
        <Typography color='gray' variant='h6' my={1}>
          {username}
        </Typography>

        {userPosts.map((post, index) => (
          <Card key={post.title + index} post={post} username={username} />
        ))}

        {userPosts && userPosts.length < 1 && (
          <Typography variant='h4'>
            User {username} has not posted anything yet
          </Typography>
        )}
      </Container>
    </Layout>
  );
};

export default UserPosts;
