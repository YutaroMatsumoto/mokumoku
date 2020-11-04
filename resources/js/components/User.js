import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function User() {
    // const users = [
    //     {
    //         id: 1,
    //         name: 'John',
    //         email: 'john@example.com'
    //     },
    //     {
    //         id: 2,
    //         name: 'Kevin',
    //         email: 'kevin@test.com'
    //     },
    //     {
    //         id: 3,
    //         name: 'Joshua',
    //         email: 'joshua@example.com'
    //     }
    // ]
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const response = await axios.get('/api/user');
        setUsers(response.data.users)
    }
    
    return (
        <div>
            <h1>Userページ</h1>
            <ul>
                {users.map((user) => <li key={user.id}>{user.name} <Link to={`/user/${user.id}`}>詳細</Link></li>)}
            </ul>
        </div>
    );
}

export default User;