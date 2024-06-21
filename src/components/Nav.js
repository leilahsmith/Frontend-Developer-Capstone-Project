import React from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMeu = () =>{
        setMenuOpen(!menuOpen);
    }




    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='logo'></img>
            </a>

            {/* mobile navbar */}
            <div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>


            {/* nav items */}
            <ul>
                <li>
                    <a href="/">HOME</a> 
                </li>
                <li>
                    <a href="/">ABOUT</a> 
                </li>
                <li>
                    <a href="/">MENU</a> 
                </li>
                <li>
                    <a href="/">RESERVATIONS</a> 
                </li>
                <li>
                    <a href="/">ORDER ONLINE</a> 
                </li>
                <li>
                    <a href="/">LOGIN</a> 
                </li>
            </ul>



            
        </nav>
    )
}
