import { React } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import Layout from '../../components/Layout';
import CardDetail from '../../components/CardDetail';
import posts from '../../public/api/posts.json';
import users from '../../public/api/users.json';

const Post = (props) => {
  const router = useRouter();
  const postId = router.query.id;

  const post = posts.filter((post) => post.id == postId);
  const userId = post && post.length > 0 && post.user;

  const user = users.filter((post) => post.user == userId);

  return (
    <Layout title='Blogger'>
      <Container maxWidth='lg'>
        <CardDetail post={post} user={user} />
      </Container>
    </Layout>
  );
};

export default Post;
