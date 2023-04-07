import React, { useState } from 'react';
import { View, Dimensions, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import Editprofile from '../Profile/Editprofile';
import Setting from '../././Setting';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faBars, faLock, faHeart } from '@fortawesome/free-solid-svg-icons';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import {
    Container,
    UserImage,
    UserImageLetf,
    UserImageRight,
    UserName,
    UserFollowers,
    UserFollowersText,
    UserFollowersTextNumber,
    UserFollowersTextDesc,
    EditProfile,
    ButtonEditProfile,
    ButtonEditProfileText,
    ButtonFavorites,
    ButtonAddBio,
    ButtonAddBioText,
    Tabs,
    Tab,
    TileName,
    Milkurine
} from './styles';

import Posts from '../../components/TabsProfile/Posts';
import Likeds from '../../components/TabsProfile/Likeds';

const initialLayout = { width: Dimensions.get('window').width };

export default function Profile({ navigation }) {

  


    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'posts', title: 'Bài viết' },
        { key: 'likeds', title: 'Đã thích' },
    ]);

    const renderScene = SceneMap({
        posts: Posts,
        likeds: Likeds,
    });

    return (
        <Container>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                    <UserImageLetf source={require("../../assets/Images/AddUser.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate("Setting")} >
                    <UserImageRight 
                    source={require("../../assets/Images/Setting.png")} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TileName>Hoang Bay</TileName>
                </View>
                <UserImage resizeMode="contain" source={require("../../assets/Images/avata.png")} />
                <View><UserName>@hoangbaydev</UserName></View>
                <View>
                    <Milkurine>
                        21, The United States
                    </Milkurine>

                </View>
                

                <UserFollowers>
                    <UserFollowersText>
                        <UserFollowersTextNumber>368k</UserFollowersTextNumber>
                        <UserFollowersTextDesc>Người theo dõi</UserFollowersTextDesc>
                    </UserFollowersText>
                    <UserFollowersText>
                        <UserFollowersTextNumber>|</UserFollowersTextNumber>

                    </UserFollowersText>
                    <UserFollowersText>
                        <UserFollowersTextNumber>3.7M</UserFollowersTextNumber>
                        <UserFollowersTextDesc>Lượt Thích</UserFollowersTextDesc>
                    </UserFollowersText>
                </UserFollowers>
                <EditProfile >
                    <ButtonEditProfile >
                    
                        <ButtonEditProfileText onPress = {() => navigation.navigate("Editprofile")}>Chỉnh sửa hồ sơ</ButtonEditProfileText>



                    </ButtonEditProfile>
                </EditProfile>
                <TabView
                    renderTabBar={props => (
                        <Tabs>
                        {props.navigationState.routes.map((tab, key) => (
                            <Tab key={key} onPress={() => props.jumpTo(tab.key)}>
                                {tab.key === "posts" && 
                                    <FontAwesomeIcon icon={faBars} size={20} color={key == props.navigationState.index ? "#333" : "#E5E5E5"} />
                                }
                                {tab.key === "likeds" &&
                                    <FontAwesomeIcon icon={faHeart} size={20} color={key == props.navigationState.index ? "#333" : "#E5E5E5"} />
                                }
                                {/* <Text style={{ color: key == props.navigationState.index ? "#333" : "#E5E5E5" }}>{tab.title}</Text> */}
                            </Tab>
                        ))}
                        </Tabs>
                    )}
                    style={{ width: Dimensions.get("window").width }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get("window").width, height: 200 }}
                />
            </ScrollView>
            <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </Container>
    )
}
