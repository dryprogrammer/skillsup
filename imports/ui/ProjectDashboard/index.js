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
{ subject: 'COMMUNICATION', A: 100, B: 110, fullMark: 150 },
{ subject: 'SOFT SKILLS', A: 78, B: 130, fullMark: 150 },
{ subject: 'ANALYTICAL', A: 86, B: 130, fullMark: 150 },
{ subject: 'TEAMWORK', A: 99, B: 100, fullMark: 150 },
{ subject: 'SALES', A: 85, B: 90, fullMark: 150 },
{ subject: 'LEADERSHIP', A: 65, B: 85, fullMark: 150 },
];
const data1 = [
{ subject: 'COMMUNICATION', A: 30, B: 110, fullMark: 150 },
{ subject: 'SOFT SKILLS', A: 80, B: 130, fullMark: 150 },
{ subject: 'ANALYTICAL', A: 50, B: 130, fullMark: 150 },
{ subject: 'TEAMWORK', A: 100, B: 100, fullMark: 150 },
{ subject: 'SALES', A: 55, B: 90, fullMark: 150 },
{ subject: 'LEADERSHIP', A: 87, B: 85, fullMark: 150 },
];
const data2 = [
{ subject: 'COMMUNICATION', A: 89, B: 110, fullMark: 150 },
{ subject: 'SOFT SKILLS', A: 29, B: 130, fullMark: 150 },
{ subject: 'ANALYTICAL', A: 58, B: 130, fullMark: 150 },
{ subject: 'TEAMWORK', A: 38, B: 100, fullMark: 150 },
{ subject: 'SALES', A: 91, B: 90, fullMark: 150 },
{ subject: 'LEADERSHIP', A: 26, B: 85, fullMark: 150 },
];

const TwoLevelPieChartSmall = ({ data, stroke, fill }) => (
  <RadarChart outerRadius='50%' width={300} height={250} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis/>
    <Radar name="Mike" dataKey="A" stroke={stroke} fill={fill} fillOpacity={0.6}/>
  </RadarChart>
);

const TwoLevelPieChart = ({ data }) => (
  <RadarChart outerRadius='50%' width={600} height={500} data={data}>
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
    // justifyContent: 'center',
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
          Project Dashboard
        </Typography>


      <Grid container spacing={24}>

        <Grid item xs={4}>
          <div style={{ display: 'flex' }} >
            <Typography variant="headline" component="p" style={{ marginBottom: 40, fontSize: 20, marginRight: 20 }} >
              Matched
            </Typography>
              <div className={classes.row}>
                <Avatar alt="Remy Sharp" src="/images/remy.jpg" className={classes.avatar} />
                <Avatar alt="Adelle Charles" src="/images/uxceo-128.jpg" className={classes.avatar} />
              </div>
          </div>

          <TwoLevelPieChartSmall data={data1} fill='#d1ead3' stroke='#61a467' />
          <TwoLevelPieChartSmall data={data2} fill='#f8dbb8' stroke='#e5bb8a' />
        </Grid>

        <Grid item xs={8}>
          <Typography align='center' variant="headline" component="h3" style={{ marginBottom: 15 }} >
            ‘Teaching coding to kids within the Community’
          </Typography>

          <TwoLevelPieChart data={data}/>
        </Grid>

      </Grid>
      </Paper>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
