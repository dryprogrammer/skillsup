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

import {
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share';

import {Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
{ subject: 'COMMUNICATION and Interpersonal', A: 120, B: 110, fullMark: 150 },
{ subject: 'SOFT SKILLS', A: 98, B: 130, fullMark: 150 },
{ subject: 'THOUGHT PROCESSSES', A: 86, B: 130, fullMark: 150 },
{ subject: 'TEAMWORK', A: 99, B: 100, fullMark: 150 },
{ subject: 'SALES and Marketing', A: 85, B: 90, fullMark: 150 },
{ subject: 'LEADERSHIP and Management', A: 65, B: 85, fullMark: 150 },
];

const TwoLevelPieChart = () => (
  <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis/>
    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
  </RadarChart>
);

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
          Dashboard
        </Typography>
      <Grid container spacing={24}>

        <Grid item xs={8}>
          <Typography variant="headline" component="p" style={{ marginBottom: 15, fontSize: 20 }} >
            Skills Chart
          </Typography>
          <TwoLevelPieChart />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="headline" component="p" style={{ marginBottom: 15, fontSize: 20 }} >
            Data imported from:
          </Typography>

          <div style={{ display: 'flex' }} >
            <LinkedinIcon size={32} round={true} />
            <FacebookIcon size={32} round={true} />
            <GooglePlusIcon size={32} round={true} />
          </div>
          <img src="/images/logo_myskillsfuture.png" alt=""/>
        </Grid>
      </Grid>
      <div style={{ margin: 30 }}>
          <Typography style={{ fontWeight: 'bold', marginBottom: 10 }} >
            Suggested careers
          </Typography>

        <a href="http://www.skillsfuture.sg/-/media/Initiatives/Files/SF-for-Infocomm-Technology/iii-Job-Roles/6-Software-Applications/Applications-Developer.pdf?la=en">
        <Typography component="p" >
          Solution architect
        </Typography>
        </a>
        
        <a href="http://www.skillsfuture.sg/-/media/Initiatives/Files/SF-for-Infocomm-Technology/iii-Job-Roles/6-Software-Applications/Applications-Developer.pdf?la=en">
          <Typography component="p" >
            Application developer
          </Typography>
        </a>

        <a href="http://www.skillsfuture.sg/-/media/Initiatives/Files/SF-for-Infocomm-Technology/iii-Job-Roles/6-Software-Applications/Applications-Developer.pdf?la=en">
                <Typography component="p" >
          Data engineer
        </Typography>
        </a>
 
        </div>
      </Paper>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
