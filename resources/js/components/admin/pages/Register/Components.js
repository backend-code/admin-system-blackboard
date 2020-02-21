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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

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
    mainRegisterContainer: {},
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


export default function RegisterLabel() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        email: '',
        firstName: "",
        lastName: "",
        showPassword: false,
        showPasswordConfirm: false,
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

    const handleClickShowPasswordConfirm = () => {
        setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
    };

    const handleMouseDownPasswordConfirm = event => {
        event.preventDefault();
    };

    function goPath() {
        history.push('/admin/login');
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <center>
                    <div className={classes.titleLoginContainer}>
                        <Typography variant="h3" component="h3">Blackboard</Typography>
                        <Typography variant="h5" component="h5">Register Admin System</Typography>
                    </div>

                    <div className={classes.mainRegisterContainer}>
                        <div>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-first-name">First Name</InputLabel>
                                <Input
                                    id="standard-adornment-first-name"
                                    type={values.showEmail ? 'text' : 'firstName'}
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle first-name visibility"
                                            // onClick={handleClickShowEmail}
                                            // onMouseDown={handleMouseDownEmail}
                                            >
                                                <AccountCircleIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-last-name">Last Name</InputLabel>
                                <Input
                                    id="standard-adornment-last-name"
                                    type={values.showEmail ? 'text' : 'lastName'}
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle last-name visibility"
                                            // onClick={handleClickShowEmail}
                                            // onMouseDown={handleMouseDownEmail}
                                            >
                                                <AccountCircleIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-email">E-mail</InputLabel>
                                <Input
                                    id="standard-adornment-email"
                                    type={values.showEmail ? 'text' : 'email'}
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle email visibility"
                                            // onClick={handleClickShowEmail}
                                            // onMouseDown={handleMouseDownEmail}
                                            >
                                                <AlternateEmailIcon />
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
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password-confirmation">Password Confirmation</InputLabel>
                                <Input
                                    id="standard-adornment-password-confirmation"
                                    type={values.showPasswordConfirm ? 'text' : 'password'}
                                    value={values.passwordConfirm}
                                    onChange={handleChange('passwordConfirm')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password-confirmation visibility"
                                                onClick={handleClickShowPasswordConfirm}
                                                onMouseDown={handleMouseDownPasswordConfirm}
                                            >
                                                {values.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div>
                            <Button variant="outlined" size="large" color="primary" className={classes.margin}>Register</Button>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={goPath}
                            >Login</Link>
                        </div>
                    </div>
                </center>
            </Paper>
        </div>
    )
}