import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: #000;
`;

export const UserImage = styled.Image`
    width: 120px;
    height: 120px;
    left: 130;
    top: 15px;
    margin: 25px 0px;
   
`;

export const UserName = styled.Text`
   font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height:20;
    color: #FFFFFF;
    width: 380px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    
`;
export const TileName = styled.Text`
    font-family: 'Urbanist';   
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #FFFFFF;
    width: 380px;
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex : none;
    top: 35px;

`;

export const Milkurine = styled.Text`
   font-family: 'Urbanist';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #FFFFFF;
    width: 380px;
    height: 25px;
    letter-spacing: 0.2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    flex : none;
    
`;

export const UserFollowers = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    

`;

export const UserFollowersText = styled.View`
    width: 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserFollowersTextNumber = styled.Text`
    width: 180px;
    height: 29px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 1px;
`;

export const UserFollowersTextDesc = styled.Text`
    margin-top: 5px;  
    color: #E0E0E0;
`;

export const EditProfile = styled.View`
    margin-top: 20px;
    width: 100%;
    display: flex;
   margin - bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
    margin-right: 10px;
    display: flex;
    height: 44px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    border: 1px solid #9034EB;
    border-radius: 100px;
    gap: 8px;



`;
export const UserImageLetf = styled.Image`
   width: 21px;
   height: 22px;
    left: 10px;
    top: 15px;
    padding: 14px;
    background: black;
    position: absolute;
   
`;
export const UserImageRight = styled.Image`
    width: 21px;
    height: 22px;
    right: 10px;
    top: 15px;
    padding: 14px;
    background: black;
    position: absolute;

    

`;

export const ButtonEditProfileText = styled.Text`
    color: #9034EB;
`;

// export const ButtonFavorites = styled.TouchableOpacity`
//  ;
// `;

export const ButtonAddBio = styled.TouchableOpacity`
    margin-left: 10px;
    display: flex;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const ButtonAddBioText = styled.Text`
    color: #333;
`;

export const Tabs = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: #E5E5E5;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #E5E5E5;
`;

export const Tab = styled.TouchableOpacity`
    width: 33%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;