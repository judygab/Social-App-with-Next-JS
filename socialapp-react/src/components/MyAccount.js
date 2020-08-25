import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { UserContext } from '../context/UserContext';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { API } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  profileUpload: {
    width: 'auto',
    display: 'flex',
    position: 'relative',
    "& img" : {
      maxWidth: '100%',
    }
  },
  addProfilePhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
}));

export default function AddressForm() {
  const { user } = React.useContext(UserContext);
  const classes = useStyles();

  // async function fetchUserByUserName() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   setNotes(apiData.data.listNotes.items);
  // }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4} style={{ margin: "auto"}}>
              <div className={classes.profileUpload}>
                <img src={require('../assets/images/user-profile.png')} />
                <div className={classes.addProfilePhoto}>
                  <AddCircleIcon fontSize="large" style={{color: '#46C5CE'}}/>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="email"
                fullWidth
                autoComplete="email email-url"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Facebook</InputLabel>
                <OutlinedInput
                  id="facebook"
                  value={''}
                  autoComplete="facebook facebook-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><FacebookIcon style={{ color: '3b5998'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Instagram</InputLabel>
                <OutlinedInput
                  id="instagram"
                  value={''}
                  autoComplete="instagram instagram-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><InstagramIcon style={{ color: 'e4405f'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">YouTube</InputLabel>
                <OutlinedInput
                  id="youtube"
                  value={''}
                  autoComplete="youtube youtube-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><YouTubeIcon style={{ color: 'cd201f'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Twitter</InputLabel>
                <OutlinedInput
                  id="twitter"
                  value={''}
                  autoComplete="twitter twitter-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><TwitterIcon style={{ color: '55acee'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">LinkedIn</InputLabel>
                <OutlinedInput
                  id="linkedin"
                  value={''}
                  autoComplete="linkedin linkedin-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><LinkedInIcon style={{ color: '0077B5'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Pinterest</InputLabel>
                <OutlinedInput
                  id="pinterest"
                  value={''}
                  autoComplete="pinterest pinterest-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><PinterestIcon style={{ color: 'bd081c'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Reddit</InputLabel>
                <OutlinedInput
                  id="reddit"
                  value={''}
                  autoComplete="reddit reddit-url"
                  //onChange={handleChange('amount')}
                  startAdornment={<InputAdornment position="start"><RedditIcon style={{ color: 'ff5700'}}/></InputAdornment>}
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField id="phone" name="phone" label="phone number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox required color="secondary" name="saveAddress" value="yes" />}
                label="Privacy Policy"
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </Paper>
    </main>
  );
}
