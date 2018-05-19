import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Queue from './queue';
import PickupQueue from './pickupQueue';
import { orders } from './data';

export default class OrdersScreen extends React.Component {
  state = {
    orderStatus: 0,
    orders,
    fulfilledOrders: [],
  }

  onPress = () => {
    if (this.state.orderStatus === 1) {
      this.setState({
        orderStatus: 0,
        orders: this.state.orders.slice(1),
        fulfilledOrders: this.state.fulfilledOrders.concat(this.state.orders[0]),
      });
    } else {
      this.setState({ orderStatus: this.state.orderStatus + 1});
    }
  };

  onFulfilled = id => {
    this.setState({
      fulfilledOrders: this.state.fulfilledOrders.filter(o => o.id !== id),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Orders</Text>
        {this.state.orders.length > 0 && <Queue status={this.state.orderStatus} onPress={this.onPress} orders={this.state.orders}/>}
        <Text>Ready to pick up</Text>
        <PickupQueue status={this.state.orderStatus} onFulfilled={this.onFulfilled} fulfilledOrders={this.state.fulfilledOrders}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
