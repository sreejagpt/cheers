import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import { random } from 'lodash';

class AvgWaitTime extends React.Component {

  randomColour = () => colours[random(0, colours.length - 1)];

   render() {
     return (
      <View>
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
    top: '40%',
    left: '35%',
    fontWeight: 'bold',
    color: '#40162d',
    fontSize: 30,
  },

});
export default AvgWaitTime;
