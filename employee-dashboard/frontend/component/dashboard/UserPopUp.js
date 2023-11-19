import React from 'react'

function UserPopUp(props) {
    return (props.trigger) ? (
        <div>
            <div>
                {props.children}
            </div>
        </div>
        ):"";
}

export default UserPopUp