import React, { useContext } from 'react'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './topbar.css';
import {Link} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom';


const Topbar = () => {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

  const homeClick =() =>{
    navigate("/")
  }
  


  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}> 
        <span className="logo">KeepConnected</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="text" className="searchInput" placeholder='Search for friend, post or video' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink" onClick={homeClick}>Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatarImg.webp"} alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
