import { Button, IconButton } from '@mui/material';
import React from 'react';
import '../styles/Sidebar.css';
import { Add } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from '../components/SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={46} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={32} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={27} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={11} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={21} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;