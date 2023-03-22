import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Button, View, Text } from 'react-native-ui-lib';
import { HomeScreen, LoginScreen, RegisterScreen } from './screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Orders() {
  return (
    <View flex-1 center>
      <Text text50>Orders</Text>
    </View>
  );
}

function Favorites() {
  return (
    <View flex-1 center>
      <Text text50>Favorites</Text>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View flex-1 center>
      <Button label='Đăng nhập' onPress={() => { navigation.navigate('Login') }} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#009872',
        headerShown: false,
        tabBarStyle: {
          height: 58,
          paddingBottom: 8
        }
      }}

    >
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Yêu thích',
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009872',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng nhập' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Đăng ký' }} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}