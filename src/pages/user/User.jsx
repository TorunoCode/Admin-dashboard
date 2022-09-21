import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/newUser">
        <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">            
          <img src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna </span>
              <span className="userShowUserTitle">Boo </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className="userShowIcon"/>
            <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className="userShowIcon"/>
            <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon"/>
            <span className="userShowInfoTitle">+84 123 122 12</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className="userShowIcon"/>
            <span className="userShowInfoTitle">aa@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className="userShowIcon"/>
            <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className='userUpdateItem'>
                    <label>Email</label>
                    <input type="text" placeholder='aa@gmail.com' className='userUpdateRight'></input>
                </div>
                <div className='userUpdateItem'>
                    <label>UserName</label>
                    <input type="text" placeholder='annabeck99' className='userUpdateRight'></input>
                </div>
                <div className='userUpdateItem'>
                    <label>Phone</label>
                    <input type="text" placeholder='+84 123 122 12' className='userUpdateRight'></input>
                </div>
                <div className='userUpdateItem'>
                    <label>Address</label>
                    <input type="text" placeholder='New York | USA' className='userUpdateRight'></input>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png" alt="" />
                <label htmlFor='file'><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}
