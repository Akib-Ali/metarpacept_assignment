import "./navbar.css"

export const Navbar=()=>{




    return(
        <div className="navbar">
            <ul>
                <li>Title</li>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <button style={{border:"1px solid teal", width:"90px"}}>Button</button>
            </ul>
        </div>
    )
}