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
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard(props) {
  const router = useRouter();
  const { title, body, createdAt } =
    props.post && props.post.length > 0 && props.post[0];
  const { name } = props.user && props.user.length > 0 && props.user[0];

  return (
    <Card sx={{ maxWidth: 1000, marginBottom: '10px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={createdAt}
      />
      <CardMedia
        component='img'
        height='194'
        image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='h4' color='text.primary'>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
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
