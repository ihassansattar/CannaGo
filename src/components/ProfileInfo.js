import React from 'react'
import ImageRight from '../images/profile-right.png';
import ImageLeft from '../images/profile-left.png';
import User from '../images/user-green.svg'
import Contact from '../images/contact.png'
import Email from '../images/email.png'
import Password from '../images/password.png';
import ProfileFormNameCard from './ProfileFormNameCard'
import ProfileFormCard from './ProfileFormCard';
import ProfileFormButton from './ProfileFormButton'

const ProfileInfo = () => {
    const submitHandler = e => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="profile-img-right"><img src={ImageRight}/></div>
            <div className="profile-body-cont">
                <div className="profile-form-cont">
                    <form onSubmit={submitHandler} className="profile-form">
                        <h1>Profile Information</h1>
                        <p>Welcome John H, 25</p>
                        <div className="profile-form-name">
                            <ProfileFormNameCard src={User} text="John" placeholder="First name"/>
                            <ProfileFormNameCard src={User} text="Henry" placeholder="Last name"/>
                            <ProfileFormNameCard src={User} text="06/28/1994" placeholder="D.O.B"/>
                        </div>
                        <div className="profile-cards">
                            <ProfileFormCard
                                text="Phone Number:"
                                type="text"
                                placeholder="786 7821 1232"
                                src={Contact}/>
                            <ProfileFormCard
                                text="Email:"
                                type="email"
                                placeholder="JohnH@gmail.com"
                                src={Email}/>
                            <ProfileFormButton text="Change Password" src={Password}/>
                            <ProfileFormButton text="Deactivate Account" src={User}/>
                        </div>
                        <div className="form-submit">
                            <button>Update</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="profile-img-left"><img src={ImageLeft}/></div>
        </div>
    )
}
export default ProfileInfo