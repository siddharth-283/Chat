import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Lamadmin</span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          
          <li>
            <DashboardIcon className="icone" />
            <span>Dashboard</span>
          </li>
          
          <p className="title">List</p>

          <li>
            <StoreIcon className="icone" />
            <span>Users</span>
          </li>

          <li>
            <PersonOutlineIcon className="icone" />
            <span>Product</span>
          </li>

          <li>
            <CreditCardIcon className="icone" />
            <span>Order</span>
          </li>

          <li>
            <LocalShippingOutlinedIcon className="icone" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <InsertChartIcon className="icone" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneOutlinedIcon className="icone" />
            <span>Notification</span>
          </li>

          <p className="title">Servics</p>
          
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icone" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icone" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsApplicationsOutlinedIcon className="icone" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <PortraitOutlinedIcon className="icone" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icone" />
            <span>Logout</span>
          </li>

        </ul>
      </div>

      <div className="bottom ">
        <div className="colourOption"></div>
        <div className="colourOption"></div>

      </div>
    </div>
  )
}

export default Sidebar
