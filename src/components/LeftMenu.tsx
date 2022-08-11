import './leftmenu.css';
import {BiHomeCircle, BiEnvelope} from 'react-icons/bi';
import {BsHash,BsBookmarks} from 'react-icons/bs';
import{IoIosNotificationsOutline} from 'react-icons/io';
import {AiOutlineProfile } from 'react-icons/ai';
import {FaRegUser,FaTwitter} from 'react-icons/fa';
import {CgMoreO} from 'react-icons/cg';
import { Link } from 'react-router-dom';
export function LeftMenu() {
 
  return (
    <div className="left-menu">
      <ul className='naviagtion-list'>
        <li className='bird'><FaTwitter/></li>
        
        <li className='naviagtion-item' >
          <Link to="/home">
         <BiHomeCircle/> Home 
          </Link>
        </li>

        <li className='naviagtion-item' >
          <BsHash/> Explore
        </li>

        <li className='naviagtion-item' >
          <IoIosNotificationsOutline/> Notification 
        </li>

        <li className='naviagtion-item' >
          <BiEnvelope/> Messages 
        </li>

        <li className='naviagtion-item' >
          <BsBookmarks/> Bookmarks
        </li>

        <li className='naviagtion-item' >
          <AiOutlineProfile/> Lists
        </li>

        <li className='naviagtion-item' >
        <Link to="/profile">
          <FaRegUser/> Profile
        </Link >
        </li>
        <li className='naviagtion-item' >
          <CgMoreO/> More
        </li>
        <button className='tweet-button'>Tweet</button>
      </ul>
      
    </div>
    )
}