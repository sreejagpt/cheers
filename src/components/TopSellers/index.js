import React from 'react';
import { range, random } from 'lodash';
import { VictoryChart, VictoryBar, VictoryGroup, VictoryLegend } from 'victory-native';
import { StyleSheet, View, Text } from 'react-native';

const colours = ['#903266', '#FFA5D7', '#ff59B5', '#7f536B', '#CC4790'];
const beers = ["Asahi", "Corona", "XXXX", "Grifter", "Little Creatures", "Cascade"];
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
      return {x: bar + 1, y: random(2, 5)};
    });
  }

  randomColour = () => colours[random(0, colours.length - 1)];

  randomBeer = () => {
    const randomBeerIndex = random(0, beers.length - 2); 
    return [beers[randomBeerIndex], beers[randomBeerIndex + 1]];
  }

  render() {
    const colour1 = this.randomColour();
    var colour2 = colour1;
    while (colour2 === colour1) {
      colour2 = this.randomColour();
    }
    const randomBeers = this.randomBeer();
    return (
    <View>
      <Text style={styles.heading}>Sales</Text>
      <VictoryChart
        domainPadding={{ x: 30 }}
        animate={{duration: 500}}>

        <VictoryLegend x={30} y={10}
          centerTitle
          orientation="horizontal"
          gutter={100}
          style={{ title: {fontSize: 20, paddingBottom: 20 } }}
          data={[
            { name: randomBeers[0], symbol: { fill: colour1 } },
            { name: randomBeers[1], symbol: { fill: colour2 } },
          ]}
        /> 

        <VictoryGroup
          offset={25}
          animate={{duration: 500}}
          colorScale={colours}
        >
          <VictoryBar
            data={this.state.data}
            style={{ data: { fill: colour1, width: 20 } }}
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
          style={{ data: { fill: colour2, width: 20 } }}
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
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'open-sans',
  }
});


export default TopSellers;
