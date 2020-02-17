import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assests/crown.svg'
const Header=({currentUser})=>(
<div className='header'>
    <Link to="/" className='logo-container'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link> 
        <Link to='/shop' className='option'>CONTACT</Link> 
        {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>:
            <Link className='option' to='/signin'>SIGNIN</Link>
        }
    </div>
</div>
)
export default Header;