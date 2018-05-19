import InsightsScreen from '../screens/insights';
import * as screenNames from './screen-names';
import { createDrawerNavigator } from 'react-navigation';

export const Root = createDrawerNavigator({
    [screenNames.INSIGHTS]: {
      screen: InsightsScreen
    },
  });