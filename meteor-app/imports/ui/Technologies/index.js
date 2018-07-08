import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

import TechCard from './TechCard';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const technologies_data = [
  {
    id: 'jupyter',
    name: 'jupyter',
    description: 'jupyter',
    img: 'jupyter',
    url: 'https://jupyter.com',
    apis: ['vision', 'speech', 'cognitive', 'deep learning'],
  },
  {
    id: 'google',
    name: 'google',
    description: 'google',
    img: 'google',
    url: 'https://google.com',
    apis: ['vision', 'speech', 'cognitive', 'deep learning'],
  },
  {
    id: 'watson',
    name: 'watson',
    description: 'watson',
    img: 'watson',
    url: 'https://watson.com',
    apis: ['vision', 'speech', 'cognitive', 'deep learning'],
  },
  {
    id: 'aws',
    name: 'aws',
    description: 'aws',
    img: 'aws',
    url: 'https://aws.com',
    apis: ['vision', 'speech', 'cognitive', 'deep learning'],
  },
  {
    id: 'ge',
    name: 'ge',
    description: 'ge',
    img: 'ge',
    url: 'https://ge.com',
    apis: ['vision', 'speech', 'cognitive', 'deep learning'],
  },
];

function TitlebarGridList(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <GridList cols={3} cellHeight={400} spacing={10} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} rows={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {technologies_data.map((tile) => <TechCard key={tile.id} {...tile} />)}
        </GridList>
      </div>

      <Paper elevation={4} style={{"position":"fixed","bottom":"10px","left":"10px"}}>
        <Link to='/'>
          <img src='/images/logo.png' height={80}/>
        </Link>
      </Paper>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);