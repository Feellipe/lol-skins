import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {ItemCountSpan, ShoppingIconContainer, CartIconContainer} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);