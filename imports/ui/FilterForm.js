import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  paper: {
    // height: 140,
    // width: '80%',
    maxWidth: 700,
  },
 
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class InputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: 0,
    showPassword: false,

    auth: true,
    anchorEl: null,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>

          <Grid xs={1} md={2} item/>
          <Grid xs={12} md={8} item>
            <Paper className={classes.paper} style={{ padding: 10 }} >
              <Typography variant="title" >
                Welcome to SkillsUp!
              </Typography>
             <Typography >
                We will help you find your path. Please tell me about yourself.
              </Typography>
            </Paper>
      
            <Paper className={classes.paper}  >

        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Learner' : 'Educator'}
          />
        </FormGroup>
 

        <TextField
          label="Name"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
        />
        <TextField
          select
          label="Age group"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Career goals</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl
          className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
          aria-describedby="weight-helper-text"
        >
          <Input
            id="adornment-weight"
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            endAdornment={<InputAdornment position="end">skills</InputAdornment>}
            inputProps={{
              'aria-label': 'Weight',
            }}
          />
          <FormHelperText id="weight-helper-text">Skills</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Dream</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

          </Paper>

          </Grid>
          <Grid xs={1} md={2} item />

      </Grid>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);