import React, {useState} from 'react'

const ProfileFormCard = props => {
    const [value,
        setValue] = useState(props.placeholder)
    const inputHandler = e => {
        setValue(e.target.value)
    }
    return (
        <div className="profile-form-card">
            <img src={props.src}/>
            <div className="profile-input">
                <label>{props.text}
                </label>
                <input
                    type={props.type}
                    onChange={inputHandler}
                    value={value}
                    placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
export default ProfileFormCard;