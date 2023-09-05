import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography, makeStyles } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  list: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: "16px",
  },
}));

function Rightbar() {

    const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4} style={{marginBottom: "20px"}}>
        <Avatar 
          alt='Friend1' 
          src='https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Avatar 
          alt='Friend2' 
          src='https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Avatar 
          alt='Friend3' 
          src='https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Avatar 
          alt='Friend4' 
          src='https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Avatar 
          alt='Friend5' 
          src='https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>Hot Posts</Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={2} style={{marginBottom: "20px"}}>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
        <ImageListItem>
          <img 
            src="https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>Category</Typography>
      <Link href="#" className={classes.link} variant='body2'>
        Sport
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Food
      </Link>
      <Divider flexItem style={{ marginBottom: "5px" }}/>
      <Link href="#" className={classes.link} variant='body2'>
        Movie
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Science
      </Link>
      <Divider flexItem style={{ marginBottom: "5px" }}/>
      <Link href="#" className={classes.link} variant='body2'>
        Music
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Hot Posts
      </Link>
    </Container>
  );
}

export default Rightbar;
