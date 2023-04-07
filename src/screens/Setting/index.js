import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';


export default function SettingScreen({ navigation }) {
  const handleLogout = () => {
    // Điều hướng đến màn hình đăng nhập
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/Images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{width: 50}}></View>
      </View>
      <ScrollView>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('quanlytaikhoan')
          }>
            <Text style={styles.settingText}>Quản lý tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Ví</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Languages') }>
            <Text style={styles.settingText}>Ngôn ngữ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Tùy chọn nội dung</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Báo cáo vấn đề</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Trung tâm trợ giúp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Điều khoản dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Chính sách bảo mật</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={""}>
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#000',
  },
  backButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    right: 20,
  },
  settingContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
  },
});

