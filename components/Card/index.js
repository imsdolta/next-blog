import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard(props) {
  const router = useRouter();
  const { title, id, postUser, createdAt } = props.post;

  return (
    <Card sx={{ maxWidth: 1000, marginBottom: '10px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {postUser.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={postUser}
        subheader={createdAt}
      />
      <CardMedia
        component='img'
        height='194'
        image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography
          onClick={() => {
            router.push(`/post/${id}`);
          }}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#424961de',
            },
          }}
          variant='h4'
          color='text.primary'
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
