import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, TouchableOpacity, View, Text } from 'react-native-ui-lib';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  RestaurantScreen,
  FoodScreen,
  FavoritesScreen,
  FilterScreen,
  FilteredItemsScreen,
  CartScreen,
  ShowAllScreen
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Orders() {
  return (
    <View flex-1 center>
      <Text text50>Orders</Text>
    </View>
  );
}


function Profile() {
  return (
    <View flex-1 center>
      <Text text50>Profile</Text>
    </View>
  );
}

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Restaurant"
        component={RestaurantScreen}
      />
      <Stack.Screen
        name="Food"
        component={FoodScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Đăng nhập',
          headerShown: true
        }}
      />
      <Stack.Screen name="Register"
        component={RegisterScreen}
        options={{
          title: 'Đăng ký',
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
}

function MainTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          height: 58,
          paddingBottom: 8
        },
        headerStyle: {
          backgroundColor: Colors.primary
        },
        headerTintColor: Colors.white,
        headerLeft: () => (
          <TouchableOpacity paddingL-20 onPress={() => navigation.navigate("Home")} center>
            <MaterialCommunityIcons name="arrow-left" color={Colors.white} size={32} />
          </TouchableOpacity>
        )
      }}
    >
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Đơn hàng',
          headerTitle: 'Đơn hàng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ hàng',
          headerTitle: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Yêu thích',
          headerTitle: 'Yêu thích',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Tài khoản',
          headerTitle: 'Tài khoản',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const FilterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Filter'
        component={FilterScreen}
        options={{
          headerTitle: 'Lọc món ăn và địa điểm',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='FilteredItems'
        component={FilteredItemsScreen}
        options={{
          headerTitle: 'Danh sách món ăn và địa điểm',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}

const ShowAllStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ShowAll'
        component={ShowAllScreen}
        options={{
          headerTitle: 'Xem tất cả',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name="Trang chủ" component={MainTab} />
        <Drawer.Screen name="Lọc" component={FilterStack} />
        <Drawer.Screen name="Xem tất cả" component={ShowAllStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

