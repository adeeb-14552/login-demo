import React from 'react'

const Homepage = ({handleLogout}) => {
    return (
        <section className="hero">
        <nav>
            <h2>welcome to home page</h2>
            <button onClick={handleLogout}>Log Out</button>
        </nav>
            
        </section>
    )
}
export default Homepage;