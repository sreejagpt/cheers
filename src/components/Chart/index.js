import React from 'react';
import { range, random } from 'lodash';
import { VictoryChart, VictoryBar } from 'victory-native';

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  getData() {
    const bars = 7;
    return range(bars).map((bar) => {
      return {x: bar + 1, y: 3};
    });
  }

  render() {
    return (
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{duration: 500}}
      >
        <VictoryBar
          data={this.state.data}
          style={{
            data: { fill: "tomato", width: 12 }
          }}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE"
              })
            }
          }}
        />
      </VictoryChart>
    );
  }
}

export default Chart;
