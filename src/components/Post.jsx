import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
        height: "150px",
    },
  },
}));

function Post() {

    const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media} 
          image="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          title= "My Post"
        />
        <CardContent>
            <Typography gutterBottom variant='h5'>My First Post</Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nihil?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, veritatis!
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>Share</Button>
        <Button size='small' color='primary'>Learn more</Button>
      </CardActions>
    </Card>
  );
}

export default Post;
