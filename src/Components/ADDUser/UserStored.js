import React from "react";
import './UserStored.css'

function UserList(props){
    return(<div className="users">
        <ul className="users ul">
            {props.users.map((user) => (
                <li className="users li">
                    {user.name} ({user.age} year old) {user.email}
                </li>
            ))}
        </ul>
        </div>
    )


}

export default UserList;