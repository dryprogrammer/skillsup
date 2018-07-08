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
    <Link to="/"  >
      <ListItem button  >
        <ListItemText primary="Introduction" />
      </ListItem>
    </Link>


    <Link to="/project"  >
      <ListItem button >
        <ListItemText primary="List of Projects" />
      </ListItem>
    </Link>

    <Link to="/app_selection"  >
      <ListItem button >
        <ListItemText primary="Learner" />
      </ListItem>
    </Link>


    <Link to="/skills_chart"  >
      <ListItem button >
        <ListItemText primary="Skills Genie" />
      </ListItem>
    </Link>

    <Link to="/current_projects"  >
      <ListItem button >
        <ListItemText primary="Current Projects" />
      </ListItem>
    </Link>

    <Link to="/accreditations"  >
      <ListItem button >
        <ListItemText primary="Accreditations" />
      </ListItem>
    </Link>

    <Link to="/skills_chart"  >
      <ListItem button >
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>


      <Link to="/app_selection"  >

    <ListItem button >
        <ListItemText primary="SkillsFuture Singapore" />
    </ListItem>
      </Link>
  </div>
);

// export const otherMailFolderListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <MailIcon />
//       </ListItemIcon>
//       <ListItemText primary="All mail" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <DeleteIcon />
//       </ListItemIcon>
//       <ListItemText primary="Trash" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem>
//   </div>
// );