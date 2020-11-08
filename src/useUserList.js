import React, {useState, useEffect} from "react";
import axios from 'axios';

export function useUserList(pageId) {
    const [users, setUsers] = useState([]);
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        // fetch(`https://reqres.in/api/users?page=${pageId}`)
        //     .then(result=>{
        //         setUsers(result.json);
        //     })
        setCurrentId(pageId);
        if (currentId != pageId) {
            axios({method: 'get', url: `https://reqres.in/api/users?page=${pageId}`})
                .then(response => {
                    setUsers(response.data.data);
                })
        }

    });
    console.log("Users: " + users.map(item=>item.email))
    // return users;
    return users.map(item =>
        <li key={item.id}>
            <div>
                <div>email: {item.email}</div>
                <div>name: {item.last_name} {item.first_name}</div>
                <img src={item.avatar}/>
            </div>
        </li>
    );
}
