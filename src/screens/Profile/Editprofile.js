import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Editprofile = () => {
  // tạo dữ liệu mẫu cho mảng name,giới tính,ngày sinh, quốc gia, email
  const [name, setName] = useState('Hoàng Báy');
  const [gender, setGender] = useState('Nam');
  const [birthday, setBirthday] = useState('01/01/2000');
  const [country, setCountry] = useState('Việt Nam');
  const [email, setEmail] = useState('hoangbaydev@gmaail.com');
  const [avatar, setAvatar] = useState('null');
  return (
    <View style={styles.container}>
      <View style={styles.ViewText}>
        <TouchableOpacity onPress={()=>
          Alert.alert('Thông báo','Bạn đã hủy thay đổi')
        }>
          <Text style={styles.TextCancel}>
            Cancel
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.TextEdit}>
            Edit Profile
          </Text>
        </View>
        <TouchableOpacity onPress={() => {
          Alert.alert('Thông báo', 'Bạn đã lưu thành công');
        }}
          title="Press me" >
          <Text style={styles.TextDone}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ViewAvatar}>
        <TouchableOpacity>
          <Image style={styles.ImageAvatar}
            source={require('.././../assets/Images/avata.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewButton}>
        <View style={styles.Viewboder}>
          <Image style={styles.Imageboder}
            source={require('../../assets/Images/Profile.png')}

          />
          <Text style={styles.Textboder}>
            {name}
          </Text>
        </View>
        <View style={styles.Viewboder1}>
          <Image style={styles.Imageboder1}
            source={require('../../assets/Images/Swap.png')}
          />
          <Text style={styles.Textboder1}>
            {gender}
          </Text>
        </View>
        <View style={styles.Viewboder2}>
          <Image style={styles.Imageboder2}
            source={require('../../assets/Images/Group.png')}
          />
          <Text style={styles.Textboder2}>
            {birthday}
          </Text>
        </View>
        <View style={styles.Viewboder3}>
          <Image style={styles.Imageboder3}
            source={require('../../assets/Images/Location.png')}
          />
          <Text style={styles.Textboder3}>
            {country}
          </Text>
        </View>
        <View style={styles.Viewboder4}>
          <Image style={styles.Imageboder4}
            source={require('../../assets/Images/Message.png')}
          />
          <Text style={styles.Textboder4}>
            {email}
          </Text>
        </View>
        <View style={styles.Viewboder5}>
          <Image style={styles.Imageboder5}
            source={require('../../assets/Images/report.png')}
          />
          <Text style={styles.Textboder5}>
            {avatar}
          </Text>
        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  ViewText: {
    flexDirection: 'row',
    top: 10,
    justifyContent: 'space-between',

  },
  TextCancel: {
    color: "#000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: 12,
    paddingHorizontal: 1,
    left: 10,
  },
  TextDone: {
    color: "#1A96F0",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: 12,
    paddingHorizontal: 1,
    right: 10,
  },
  TextEdit: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 700,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 150,
    height: 25,
    top: 12,
  },
  ViewAvatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    paddingHorizontal: 1,
  },
  ImageAvatar: {
    width: 140,
    height: 140,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 70,
  },
  viewButton: {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    paddingHorizontal: 1,

  },
  Viewboder: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 10,
    borderRadius: 12,
  },
  Viewboder1: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 20,
    borderRadius: 12,
  },
  Viewboder2: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 30,
    borderRadius: 12,
  },
  Viewboder3: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 40,
    borderRadius: 12,
  },
  Viewboder4: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 50,
    borderRadius: 12,
  },
  Viewboder5: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.2,
    top: 60,
    borderRadius: 12,
  },
  Imageboder: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Imageboder1: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Imageboder2: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Imageboder3: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Imageboder4: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Imageboder5: {
    width: 20,
    height: 20,
    top: 15,
    left: 20,
    color: "#000000",
  },
  Textboder: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },
  Textboder1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },
  Textboder2: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },
  Textboder3: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },
  Textboder4: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },
  Textboder5: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    alignItems: 'center',
    textAlign: 'center',
    oder: 1,
    flexGrow: 0,
    width: 56,
    height: 25,
    top: -10,
    paddingHorizontal: 1,
    left: 60,
  },





});
export default Editprofile;