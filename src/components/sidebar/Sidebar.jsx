/** @format */

import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <span className="sidebar-logo">Admin Panel</span>
      </div>
      <div className="sidebar-center">
        <ul>
          <p className="sidebar-center__title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashbord</span>
          </li>
          <p className="sidebar-center__title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="sidebar-center__title">USEFUL</p>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delevery</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="sidebar-center__title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="sidebar-center__title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
