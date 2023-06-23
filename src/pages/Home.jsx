import React from 'react'

const Home = (props) => {
  return (
    <div>
        <p>{props.user} </p>
        <button>Sign in</button>
    </div>
  )
}

export default Home