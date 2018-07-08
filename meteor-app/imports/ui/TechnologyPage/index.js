import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
  card: {
    width: 300,
    height: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

});


const ChatBox = ({ classes }) => {
  const { title, img, subtitle } = { title: 'chat', img: 'google', subtitle: 'chat with other learners' };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
      />
      <CardContent>

        <Typography gutterBottom variant="headline" component="h2">
          { title }
        </Typography>

        <Typography gutterBottom component="h5">
          By: { subtitle }
        </Typography>
      </CardContent>
    </Card>
  );

};
const CourseBox = ({ classes }) => {
  const { title, img, subtitle } = { title: 'curriculum', img: 'google', subtitle: 'your progress' };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={img}
        title={title}
      />
      <CardContent>

        <Typography gutterBottom variant="headline" component="h2">
          { title }
        </Typography>

        <Typography gutterBottom component="h5">
          By: { subtitle }
        </Typography>
      </CardContent>
    </Card>
  )
};

function CenteredGrid(props) {
  const { classes } = props;

  return (
      <div style={{ flexGrow: 1 }} elevation={4}>
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <div>
            <iframe src='http://localhost:3000' style={{ width: '100%', height: '100%', minHeight: 850 }}></iframe>
          </div>
          <div style={{ right: 0, position: 'fixed' }} >
            <ChatBox classes={classes} />
            <CourseBox classes={classes} />
          </div>
        </div>
      </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
