import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase_auth';
import NavBar from '../NavBar'
import "./profile.css"

function Profile () {

    const user = useSelector(selectUser);

    return (
        <div className="ProfilePage">
            <NavBar />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen__plan">
                            <h3>Plans</h3>
                            <p>Renewal Date: 04/03/2021</p>
                            <button className="profileScreen__signout" onClick={() => auth.signOut()}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
