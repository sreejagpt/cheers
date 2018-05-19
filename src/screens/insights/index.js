import React from 'react';
import { StyleSheet, View, ScrollView, Platform, StatusBar } from 'react-native';
import TopSellers from '../../components/TopSellers';
import AvgWaitTime from '../../components/AvgWaitTime';
import CustomerSatisfaction from '../../components/CustomerSatisfaction';
import Header from '../../components/Header';

export default class InsightsScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header navigation={this.props.navigation} />

        <View style={styles.chart}>
          <TopSellers/>
        </View>

        <View style={styles.chart}>
          <AvgWaitTime/>
        </View>

        <View style={styles.chart}>
          <CustomerSatisfaction/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF0F3',
    marginTop: Platform.os === 'ios' ? 20: StatusBar.currentHeight,
  },

  chart: {
    backgroundColor: '#fff',
    marginBottom: 40,
  },
});

