import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Queue from './queue';
import PickupQueue from './pickupQueue';
import { orders } from './data';
import Header from '../../components/Header';

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
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Orders queue</Text>
        </View>
        {this.state.orders.length > 0 && <Queue status={this.state.orderStatus} onPress={this.onPress} orders={this.state.orders}/>}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ready to pick up</Text>
        </View>
        <PickupQueue status={this.state.orderStatus} onFulfilled={this.onFulfilled} fulfilledOrders={this.state.fulfilledOrders}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF0F3',
    marginTop: Platform.os === 'ios' ? 20: StatusBar.currentHeight,
  },
  textContainer: {
    paddingVertical: 5,
    paddingLeft: 12,
    backgroundColor: '#903266',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  }
});
