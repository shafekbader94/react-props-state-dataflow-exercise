import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
discount = (price, discount) => price * (1 - discount)

    render() {
        return(
            <div>
                
       {this.props.shouldDiscount ? this.props.store.map(s => <Item item={s.item} price={this.discount(s.price, s.discount)} key={s.item}/>)
                                    : this.props.store.map(s => <Item item={s.item} price={s.price} key={s.item}/>)}
        </div>
        )
    }
}

export default Home