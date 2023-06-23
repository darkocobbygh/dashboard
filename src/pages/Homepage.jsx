import React, { useEffect, useState } from 'react'
// import Home from './Home'
import './homepage.css'
const Homepage = () => {

    const [data,setData]=useState([
        {
            id: 1,
            user: 'Kitchen staff'
        },
        {
            id: 2,
            user: 'Server'
        },
        {
            id: 3,
            user: 'Bar staff'
        },
        {
            id: 4,
            user: 'User name'
        }
    ])

    const getUsers=()=>{
        setData(data)
    }
    useEffect(()=>{
        getUsers();
    })
  return (
    <div>
        <h1>Select a User</h1>
        <div className='users'>
            {data.map((users,id)=>{
                console.log(users);
                return(
                    <div key={id}>
                        <div className='user'>
                            <div className='ins'></div>
                        </div>
                        <p>{users.user} </p>
                        <button>Sign in</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Homepage