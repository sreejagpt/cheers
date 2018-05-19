import React from 'react';
import { range, random } from 'lodash';
import { VictoryChart, VictoryBar, VictoryGroup } from 'victory-native';

const colours = ['#903266', '#FFA5D7', '#ff59B5', '#7f536B', '#CC4790'];

class Chart extends React.Component {
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
    const bars = random(6, 10);
    return range(bars).map((bar) => {
      return {x: bar + 1, y: random(2, 10)};
    });
  }

  randomColour = () => colours[random(0, colours.length - 1)];

  render() {
    return (
      <VictoryChart
        domainPadding={{ x: 30 }}
        animate={{duration: 500}}>

        <VictoryGroup
          offset={35}
          animate={{duration: 500}}
        >
          <VictoryBar
            data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
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
          data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
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
    );
  } 

}

export default Chart;
