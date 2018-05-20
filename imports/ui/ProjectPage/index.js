import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import Icons from '@material-ui/icons';

import { Link } from 'react-router-dom'

// const styles = theme => ({
//   root: theme.mixins.gutters({
//     paddingTop: 16,
//     paddingBottom: 16,
//     marginTop: theme.spacing.unit * 3,
//   }),
// });

// const Description = withStyles(styles)(PaperSheet);


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
    padding: 30,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  flex: {
    flex: 1,
  },

  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    // margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },

});


function CenteredGrid(props) {
  const { classes } = props;

  return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3" style={{ marginBottom: 15 }} >
          Teaching coding to kids within the Community
        </Typography>
      <Grid container spacing={24}>

       <Grid item xs={6}>
         <img width={400} height={280} src="https://www.giving.sg/image/logo?img_id=7099155" alt=""/>
        </Grid>
        <Grid item xs={6}>

          <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }} >
            <Link to='/skills_chart' >
              <Button variant="raised" color="primary" className={classes.button}>
                JOIN NOW
              </Button>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', margin: 10 }}>
            <div className={classes.row}>
              <Avatar alt="Remy Sharp" src="/images/remy.jpg" className={classes.avatar} />
              <Avatar alt="Adelle Charles" src="/images/uxceo-128.jpg" className={classes.avatar} />
            </div>


            <Typography style={{ marginBottom: 20, marginLeft: 10 }} >
              have joined.
            </Typography>
          </div>

          <div style={{ display: 'flex' }} >
            <Icons.Build />

            <Typography  style={{ marginLeft: 5 }} >
              Related/Relevant Skills:
            </Typography>
          </div>

          <Typography >
          Coding, Python Programming, Teaching, Communication, ... see more
          </Typography>

        </Grid>
      </Grid>
      <div style={{ margin: 30 }}>
          <Typography style={{ fontWeight: 'bold', marginBottom: 10 }} >
          About Us
          </Typography>

        <Typography component="p" >
        Code in The Community is a community initiative in which Google is sponsoring free coding classes for 3,000 underprivileged children in Singapore.

The program consists of 10-week terms in which kids learn either Scratch (8-11yo) or Python (12-15) in a fun and engaging way, allowing them to build digital literacy, confidence and resourcefulness.

Note: Please see our other listings for other available locations.
        </Typography>
        </div>
      </Paper>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
