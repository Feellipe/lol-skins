import React from "react";
import { ReactComponent as Logo } from "../../assets/lean-caviar-preta.svg";
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

// o createStructuresdSelector funciona para em vez de passar o state para cada selector, chamamos essa função que recebe os selectors e já passa o state pra
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
})

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/" >
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop" >
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
        :
        <OptionLink to='/signin'> SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown /> 
    }
  </HeaderContainer>
);


export default connect(mapStateToProps)(Header);
