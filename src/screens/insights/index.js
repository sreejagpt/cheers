import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopSellers from '../../components/TopSellers';
import AvgWaitTime from '../../components/AvgWaitTime';

export default class InsightsScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.chart}>
          <TopSellers/>
        </View>

        <View style={styles.chart}>
          <AvgWaitTime/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#979797',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chart: {
    backgroundColor: '#fff',
    width: '98%',
    marginTop: 50,
  },
});

