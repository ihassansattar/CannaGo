import React from 'react'

const ProfileFormButton = props => {

    return (
        <button className="profile-form-card profile-button" type="button">
            <img src={props.src}/>
            <h3>{props.text}
            </h3>
        </button>
    )
}
export default ProfileFormButton;