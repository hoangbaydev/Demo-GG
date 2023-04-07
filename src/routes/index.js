import React from 'react';
import { Dimensions, StatusBar, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus, faEllipsisH, faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Videos from '../screens/Videos';
import LiveStream from '../screens/LiveStream';
import CreatePost from '../screens/CreatePost';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Editprofile from '../screens/Profile/Editprofile';
import Setting from '.././screens/Setting';
import quanlytaikhoan from '../screens/Setting/quanlytaikhoan';
import Languages from '../screens/Languages';

const Stack = createStackNavigator();

StatusBar.setHidden(true);


const Routes = () => (
  <NavigationContainer onStateChange={state => state.index == 0 ? StatusBar.setHidden(true) : StatusBar.setHidden(false)}>
    <Stack.Navigator>
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="LiveStream"
        component={LiveStream}
        options={{
          headerTitle: () => <TextInput
            placeholder="Search"
            placeholderTextColor="#333"
            style={{
              flex: 1,
              marginBottom: 5,
              paddingHorizontal: 15,
              alignSelf: 'stretch',
              width: Dimensions.get("window").width - 50,
              backgroundColor: '#F5F5F5'
            }} />,
          headerLeft: () => null,
          headerRight: () => null,
        }} />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          header : () => null,
        }} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="Editprofile"
        component={Editprofile}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="quanlytaikhoan"
        component={quanlytaikhoan}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="Languages"
        component={Languages}
        options={{
          header: () => null,
        }} />
    </Stack.Navigator>
  </NavigationContainer>
)


export default Routes;