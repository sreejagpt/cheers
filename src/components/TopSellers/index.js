import React from 'react';
import { range, random } from 'lodash';
import { StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryGroup } from 'victory-native';

const colours = ['#903266', '#FFA5D7', '#ff59B5', '#7f536B', '#CC4790'];

class TopSellers extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
}

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const bars = 4;
    return range(bars).map((bar) => {
      return {x: bar + 1, y: random(2, 10)};
    });
  }

  randomColour = () => colours[random(0, colours.length - 1)];

  render() {
    return (
    <View style={styles.container}>
      <VictoryChart
        domainPadding={{ x: 30 }}
        animate={{duration: 500}}>

        <VictoryGroup
          offset={25}
          animate={{duration: 500}}
          colorScale={colours}
        >
          <VictoryBar
            data={this.state.data}
            style={{ data: { fill: this.randomColour(), width: 20 } }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: this.randomColour(),
                })
              }
            }}
          />
        <VictoryBar
          style={{ data: { fill: this.randomColour(), width: 20 } }}
          data={this.state.data}
              animate={{
                onExit: {
                  duration: 500,
                  before: () => ({
                    _y: 0,
                    fill: this.randomColour(),
                  })
                }
              }}
        />
        </VictoryGroup>
      </VictoryChart>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '95%', 
  },
});

export default TopSellers;