import React from 'react'

const AddButton = (props) => {
    return (
        <button className="add-button">
            {props.text}
        </button>
    )
}
export default AddButton;