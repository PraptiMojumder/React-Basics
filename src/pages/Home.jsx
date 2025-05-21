import React from 'react';
import ChildComponent from './homePage/ChildComponent';

const users = {
            "id":"1",
            "name" :"pias",
            "email" : "pias@gmail"
 }
 const developer = {
            "id":"2",
            "name" :"prapti",
            "email" : "prapti@gmail"

        }

function Home () {
    return (
        <div>
            <p>User Name:{users.name}</p>
            <p>User Id:{users.id}</p>
            <p>User Email:{users.email}</p>
            <ChildComponent UserInfo={users} developerInfo={developer}/>
        </div>

    )
}

export default Home;