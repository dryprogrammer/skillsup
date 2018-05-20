// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import { Link } from 'react-router-dom'

const MyLink = props => <Link to="/open-collective" {...props} />

export const mailFolderListItems = (
  <div>
    <ListItem button  >
      <Link to="/"  >
        <ListItemText primary="Landing Page" />
      </Link>
    </ListItem>
    <ListItem button >
      <Link to="/app_selection"  >
      <ListItemText primary="Learner" />
      </Link>
    </ListItem>
    <ListItem button >
      <Link to="/grid_list"  >
      <ListItemText primary="Project owner" />
      </Link>
    </ListItem>
    <ListItem button >
      <Link to="/app_selection"  >
        <ListItemText primary="SkillsFuture Singapore" />
      </Link>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);