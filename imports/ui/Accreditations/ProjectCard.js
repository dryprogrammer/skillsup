import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Icons from '@material-ui/icons';

import { Link } from 'react-router-dom'

const styles = {
  card: {
    width: 300,
    height: 350,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 40,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const styles2 = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes, Duration, Frequency, Town, skill } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Icons.PermContactCalendar />
          </ListItemIcon>
          <ListItemText primary={Duration} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icons.AvTimer />
          </ListItemIcon>
          <ListItemText primary={Frequency} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icons.LocationOn />
          </ListItemIcon>
          <ListItemText primary={Town} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icons.Build />
          </ListItemIcon>
          <ListItemText primary={ skill ? skill.reduce((t, a)=>{ return a + t }) : null } />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SkillsList =  withStyles(styles2)(SimpleList);

function SimpleMediaCard(props) {
  const { classes, from, skill, skill_img, level } = props;
  return (
    <Link to={'/project_dashboard/'+'key'} >
      <Card className={classes.card}>
          <Typography align='center' gutterBottom variant="headline" component="h2" style={{ paddingTop: 10 }} >
            { from }
          </Typography>


        <CardMedia
          className={classes.media}
          image={skill_img}
          title={skill}
        />
        <CardContent>

          <Typography align='center' gutterBottom variant="headline" component="h2">
            { skill }
          </Typography>

          <Typography align='center' gutterBottom component="h5">
            { level }
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
