import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4} style={{"display":"flex","flexDirection":"column","height":"700px","alignItems":"center","justifyContent":"center", paddingBottom: 100 }}>
            <img src='/images/globe.png' width={250} height={250} />
            
        <Typography variant="headline" component="h1" style={{fontSize: 49, marginTop: 10 }} >
          YayCoding
        </Typography>
        <Typography component="h2" style={{fontSize: 24, flex: 'inline', maxWidth: 700 }} align='center' >
          The quickest way to get started with &nbsp;
            <Typography style={{ display: 'inline-flex', fontSize: 24, fontWeight: 'bold' }} >
              machine learning.
            </Typography>
            &nbsp;
            <Typography style={{ display: 'inline-flex', fontSize: 24, fontWeight: 'bold' }} >
              Code samples, quick starts 
            </Typography>
            &nbsp; 
            for all 
            &nbsp; 
            <Typography style={{ display: 'inline-flex', fontSize: 24, fontWeight: 'bold' }} >
              major ML tools 
            </Typography>
        </Typography>
        <Button component={Link} to="/themes" variant="raised" className={classes.button} style={{ marginTop: 15 }} >
          View by Theme
        </Button>
        <Button component={Link} to="/technologies" variant="raised" className={classes.button} style={{ marginTop: 15 }} >
          View by Technology
        </Button>
        <Button component={Link} to="/chat" variant="raised" className={classes.button} style={{ marginTop: 15 }} >
          Talk to AI Buddy to learn more
        </Button>
      </Paper>

      <Paper elevation={4} style={{"position":"fixed","bottom":"10px","left":"10px"}}>
        <Link to='/'>
          <img src='/images/logo.png' height={80}/>
        </Link>
      </Paper>

    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);