import React from 'react';
import { Image } from 'react-native';


import { Tab, Button, Title, Add } from './styles';

export default function BottomTabNavigator({ navigation, background, colorTitle }) {
    return (
        <Tab background={background}>
            <Button onPress={() => navigation.navigate("Videos")}>
                <Image source={require('../../assets/Images/Video.png')} />
                <Title style={{ color: colorTitle }}>Video</Title>
            </Button>
            <Button onPress={() => navigation.navigate("LiveStream")}>
                <Image source={require('../../assets/Images/Play.png')} />
                <Title style={{ color: colorTitle }}>Live Stream</Title>
            </Button>
            <Button onPress={() => navigation.navigate("CreatePost")}>
                <Image style={{ width: 40, height: 40 }} source={require('../../assets/Images/Frame.png')} />
            </Button>
            <Button onPress={() => navigation.navigate("Chat")}>
                <Image source={require('../../assets/Images/Chat.png')} />
                <Title style={{ color: colorTitle }}>Tin nhắn</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Profile")}>
                <Image source={require('../../assets/Images/Profile.png')} />
                <Title style={{ color: colorTitle }}>Profile</Title>
            </Button>
        </Tab>
    );
}


