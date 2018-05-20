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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
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
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root}>
        <GridList cols={3} cellHeight={400} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} rows={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.volunteerId}>
              <img src={'https://www.giving.sg' + tile.Url} alt={tile.DisplayName} />
              <GridListTileBar
                title={tile.DisplayName}
                subtitle={<span>{tile.Suitabilities}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
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