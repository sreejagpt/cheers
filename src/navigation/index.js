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

    [screenNames.STORE_MENU]: {
      screen: OrdersScreen,
    },

    [screenNames.REPORTS]: {
      screen: OrdersScreen,
    },

    [screenNames.SETTINGS]: {
      screen: OrdersScreen,
    },

    [screenNames.EMPLOYEES]: {
      screen: OrdersScreen,
    },

    [screenNames.LOGOUT]: {
      screen: OrdersScreen,
    },
  });
