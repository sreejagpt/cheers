import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chart from '../../components/Chart';

export default class InsightsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Chart/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

