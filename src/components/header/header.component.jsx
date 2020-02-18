import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'



const Header=({currentUser,hidden})=>(
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
        <CartIcon/>
    </div>
    {
        hidden?null:
        <CartDropDown></CartDropDown>
    }
    
</div>
)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Header);