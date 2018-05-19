import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, {Circle, Text as SvgText} from 'react-native-svg';
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
            <SvgText
              x="50%"
              y="50%"
              stroke="#40162d"
              fill="#40162d"
              textAnchor="middle"
              fontSize={30}
              fontWeight="bold"
              fontFamily="open-sans">
                2 minutes
            </SvgText>
          </Svg>

        </View>
    );
   }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'open-sans',
  }
});
export default AvgWaitTime;
