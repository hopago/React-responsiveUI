import { Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from 'react';
import { Alert as MuiAlert } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: "20px",
        right: "20px",
    },
    container: {
        width: 700,
        height: 600,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        }
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function Add() {

    const classes = useStyles();

    const [open,setOpen] = useState(false);
    const [openAlert,setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {

        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);

    };

  return (
    <>
    <Tooltip title="Add" aria-label='add' onClick={() => setOpen(true)}>
        <Fab color='primary' className={classes.fab}>
            <AddIcon />
        </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete='off'>
                <div className={classes.item}>
                    <TextField 
                      id='standard-basic'
                      label="title" 
                      size='small' 
                      style={{width: "100%"}} 
                    />
                </div>
                <div className={classes.item}>
                    <TextField 
                      id='outlined-multiline-static'
                      label="Desc" 
                      size='small' 
                      placeholder='Write something!'
                      rows={4}
                      variant='outlined'
                      multiline 
                      style={{width: "100%"}} 
                    />
                </div>
                <div className={classes.item}>
                    <TextField select label="Visibility" value='Public'>
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unlisted">Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={classes.item}>
                    <FormLabel component='legend'>Comment Authentication</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value='Everyone' control={<Radio size="small" />} label='Everyone' />
                        <FormControlLabel value='My Followers' control={<Radio size="small" />} label='My Followers' />
                        <FormControlLabel value='Disabled' control={<Radio size="small" />} label='Disabled' />
                        <FormControlLabel disabled control={<Radio size="small" />} label='Custom(Premium)' />
                    </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button 
                      variant='outlined' 
                      color='primary' 
                      style={{marginRight: 20}} 
                      onClick={e => setOpenAlert(true)}
                    >
                    Create
                    </Button>
                    <Button 
                      variant='outlined' 
                      color='secondary' 
                      onClick={() => setOpen(false)}
                    >
                    Cancel
                    </Button>
                </div>
            </form>
        </Container>
    </Modal>
    <Snackbar 
      open={openAlert} 
      autoHideDuration={1000} 
      onClose={handleClose} 
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
        <Alert onClose={handleClose} severity="success">
            Post Uploaded!
        </Alert>
    </Snackbar>
    </>
  );
}

export default Add;
