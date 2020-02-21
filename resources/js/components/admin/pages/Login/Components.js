import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        display: 'flex',
    
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        width: "-webkit-fill-available"
    },
    titleLoginContainer: {
        margin: '32px 0px'
    },
    mainLoginContainer: {
        // margin: '16px 0px'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
}));


export default function LoginLabel() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        username: '',
        showPassword: false,
    });

    const history = useHistory(); 

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    function goPath() {
        history.push('/admin/register');
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <center>
                    <div className={classes.titleLoginContainer}>
                        <Typography variant="h3" component="h3">Blackboard</Typography>
                        <Typography variant="h5" component="h5">Login Admin System</Typography>
                    </div>
                    <div className={classes.mainLoginContainer}>
                        <div>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-username">E-mail or Username</InputLabel>
                                <Input
                                    id="standard-adornment-username"
                                    type={values.showUsername ? 'text' : 'username'}
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle username visibility"
                                            // onClick={handleClickShowUsername}
                                            // onMouseDown={handleMouseDownUsername}
                                            >
                                                <AccountCircleIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <Button variant="outlined" size="large" color="primary" className={classes.margin}>Login</Button>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={goPath}
                            >Register</Link>
                        </div>
                    </div>
                </center>
            </Paper>
        </div>
    )
}