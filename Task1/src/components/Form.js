import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import './Form.css';

const styles = theme => ({
    input: {
        height: 30
    }
});


const Form = withStyles(styles)(props => {
    const { classes } = props;
    return (
        <form className="main">
            <h2>Register</h2>
            <TextField
                className="text-field"
                id="full-name"
                label="Full Name"
                defaultValue=" "
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    shrink: true
                }}
            />

            <TextField
                className="text-field"
                id="email"
                type="mail"
                label="E-mail"
                defaultValue=" "
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    shrink: true
                }}
            />

            <TextField
                className="text-field"
                id="password"
                label="Password"
                defaultValue=" "
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    shrink: true
                }}
            />

            <button className="register-button" type="submit" value="submit">
                Register
                </button>
        </form>
    );
});

export default Form;