/** @format */

import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="" />
          <SearchIcon />
        </div>
        <div className="navbar-items">
          <div className="navbar-item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="navbar-item">
            <ChatBubbleOutlineIcon className="icon" />
          </div>
          <div className="navbar-item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="navbar-item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="navbar-item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="navbar-item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="navbar-item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="navbar-item">
            <img src="" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
