import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Queue from './queue';

export default class OrdersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Queue/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
