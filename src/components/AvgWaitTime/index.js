import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import { random } from 'lodash';

class AvgWaitTime extends React.Component {

  randomColour = () => colours[random(0, colours.length - 1)];

   render() {
     return (
      <View>
        <Text style={styles.heading}>Average Wait Time</Text>
        <Svg
            height="300"
            width="100%"
          >
            <Circle
                cx="50%"
                cy="50%"
                r="100"
                stroke="#FFA5d7"
                strokeWidth="7"
                fill="#ff59B5">
            </Circle>
          </Svg>

          <Text style={styles.text}>2 minutes</Text>
        </View>
    );
   }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '35%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#40162d',
    fontSize: 30,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
  }
});
export default AvgWaitTime;
