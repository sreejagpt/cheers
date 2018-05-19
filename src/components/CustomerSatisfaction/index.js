import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { random, round } from 'lodash';
import { VictoryPie } from 'victory-native';

export default class CustomerSatisfaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(), 
    };
  }
 
  randomPercentage = () => round(random(80, 95));

  getData = () => {
    const perc = this.randomPercentage();
    return [{x: perc + '%', y: perc}, {x: ' ', y: round(100-perc)}];
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }


  render() {
    return (
      <View>
        <Text style={styles.heading}>Customer Satisfaction</Text>
        <VictoryPie
          innerRadius={100}
          labels={(d) => d.x}
          startAngle={-170}
          colorScale={['#903266', '#fff']}
          labelRadius={2}
          style={{ labels: { fill: "black", fontSize: 50, fontWeight: "bold" } }}
          data={this.state.data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'open-sans',
  }
});

