import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Wordmark from './logo-wordmark-gradient.svg';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 3),
        height: '50px'
    },
    wordmark: {
        height: '55px' 
    },

}));


function Login() {
    const classes = useStyles();
    
    return (
    <Container component="main" maxWidth="xs">
      <div style={{textAlign: 'right', width: "100%"}}>
       <img className={classes.wordmark} src={Wordmark} alt="logo" />
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography variant="subtitle1">
            <Link href="/">
              forgot password?
            </Link>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            LOG IN
          </Button>
          <Typography variant="subtitle1">
            no account?{' '}
            <Link href="/">
              sign up
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
    
}

export default Login;