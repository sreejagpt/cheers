import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopSellers from '../../components/TopSellers';

export default class InsightsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopSellers/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#979797',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

