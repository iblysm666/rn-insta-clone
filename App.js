import React, {Component} from 'react';

import { Provider } from 'react-redux';

import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/components/Home';

import Search from './src/components/Search';

import SideMenu from './src/components/SideMenu';

import store from './src/store';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home
    }
});

const SearchStack = createStackNavigator({
    Search: {
        screen: Search
    }
});

let DrawerOption = {
    contentComponent: SideMenu,
    drawerWidth: 300
};

let Tab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="ios-home" color={tintColor} size={30}/>
            )
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="ios-search" color={tintColor} size={30}/>
            )
        }
    },
}, {
    tabBarOptions: {
        showLabel: false,
        swipeEnabled: true,
        animationEnabled: true,
        activeTintColor: '#c01722',
        inactiveTintColor: '#404041',
        backgroundColor: '#fafafa',
        style: {
            paddingTop: 5,
            paddingBottom: 5
        }
    }
});

let routes = {
    Home: {
        screen: Tab,
    },
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    let Drawer =  createDrawerNavigator(routes, DrawerOption);

    return (
        <Provider store={store}>
            <Drawer/>
        </Provider>
    );
  }
}