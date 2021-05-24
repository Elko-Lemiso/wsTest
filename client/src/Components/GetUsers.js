import React, {useEffect, useState} from 'react';
import {useQuery, gql} from "@apollo/client";
import {LOAD_USERS} from "../GraphQL/Queries";

//testing sandbox to fetch all users
function GetUsers(){

    const {error, loading, data } = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers)
        }
    }, [data]);

    return (
        <div>
            {users.map((val)=>{
                return <h1>{val.lastName}</h1>
            })}
        </div>
    );
}

export default GetUsers;
