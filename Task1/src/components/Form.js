import React from 'react';
import { FormControl, Grid, TextField } from '@material-ui/core';
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
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <FormControl className="main">
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
                <div className="button-container">
                    <button className="register-button" type="submit" value="submit">
                        register
                    </button>
                </div>
            </FormControl>
            <a className="oauth-container" href="/google-oauth">
                <img width="15px" alt="google-logo" className="google-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                <p className="google-signin"> Sign in with Google </p>
            </a>

        </Grid>
    );
});

export default Form;