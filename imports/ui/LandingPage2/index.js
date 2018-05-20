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
          SkillsUp
        </Typography>
        <Typography component="h2" style={{fontSize: 24, flex: 'inline', maxWidth: 700 }} align='center' >
          An online ecosystem for &nbsp;
            <Typography style={{ display: 'inline-flex', fontSize: 24, fontWeight: 'bold' }} >
              personalised skills identification
            </Typography>

&nbsp;

          and 
&nbsp;

            <Typography style={{ display: 'inline-flex', fontSize: 24, fontWeight: 'bold' }} >
            peer-to-peer skills acquisition
            </Typography>
            &nbsp; through purposeful projects

        </Typography>
        <Button component={Link} to="/grid_list" variant="raised" className={classes.button} style={{ marginTop: 15 }} >
          View Projects
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