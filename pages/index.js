import { React } from 'react';
import { Container } from '@mui/material';
import Layout from '../components/Layout';
import Card from '../components/Card';
import posts from '../public/api/posts.json';
import users from '../public/api/users.json';

export default function Home(props) {
  const posts = props.posts;

  return (
    <Layout title='Blog'>
      <Container maxWidth='lg'>
        {posts.map((post, index) => (
          <Card key={post.title + index} post={post} />
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  posts.forEach((post, index) => {
    const name = users.filter((user) => user.id == post.user)[0].name;
    posts[index].postUser = name;
  });

  return {
    props: {
      posts: posts,
    },
  };
}
