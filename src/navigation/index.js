import InsightsScreen from '../screens/insights';
import OrdersScreen from '../screens/orders';
import * as screenNames from './screen-names';
import { createDrawerNavigator } from 'react-navigation';

export const Root = createDrawerNavigator({
    [screenNames.ORDERS]: {
        screen: OrdersScreen
      },
      
    [screenNames.INSIGHTS]: {
      screen: InsightsScreen
    },
  });