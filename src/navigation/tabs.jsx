import { useDispatch, useSelector } from 'react-redux';

import CartNavigator from './cart';
import ContactNavigator from './contact';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from './orders';
import PlacesNavigator from './places';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  const onHandlerSelectLogout = () => {
    console.log('seleccionado');
  };

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Bitter-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: THEME.colors.secondary,
            color: THEME.colors.text,
            fontFamily: 'Bitter-Bold',
            fontSize: 11,
          },
        }}
      />

      <BottomTab.Screen
        name="ContactTab"
        component={ContactNavigator}
        options={{
          title: 'Contact',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'at-circle' : 'at'} size={22} color={THEME.colors.primary} />
          ),
        }}
      />
      <BottomTab.Screen
        name="PlacesTab"
        component={PlacesNavigator}
        options={{
          title: 'Places',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'business' : 'business-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
