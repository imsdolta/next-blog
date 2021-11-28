import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function RecipeReviewCard(props) {
  const router = useRouter();
  const { title, body, createdAt } =
    props.post && props.post.length > 0 && props.post[0];
  const { name, id: userId } =
    props.user && props.user.length > 0 && props.user[0];

  return (
    <Card sx={{ maxWidth: 1000, marginBottom: '10px' }}>
      <CardHeader
        avatar={
          <Avatar
            onClick={() => {
              router.push(`/user/${userId}`);
            }}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: '#424961de',
              },
              bgcolor: red[500],
            }}
            aria-label='recipe'
          >
            {name?.slice(0, 1)}
          </Avatar>
        }
        title={name}
        subheader={createdAt}
      />
      <CardMedia
        component='img'
        height='194'
        image='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h4' color='text.primary'>
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        {body && body.length > 0 && (
          <>
            <Typography variant='h6'>Content</Typography>
            <Typography paragraph>{body}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
