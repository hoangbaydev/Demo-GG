import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';


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
                <Text style={styles.headerTitle}>Quản lý tài khoản</Text>
                <View style={{ width: 50 }}></View>
            </View>
            <View style={styles.ViewText}>
                <Text style={styles.TextTile}>
                    Thông tin tài khoản
                </Text>
            </View>
            <ScrollView>
                <View style={styles.settingContainer}>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Phone Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Data of Birth</Text>
                    </TouchableOpacity>
                    <View style={styles.ViewText2}>
                        <Text style={styles.TextTile}>
                            Kiểm soát tài khoản
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText1}>Xóa tài khoản</Text>
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
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    settingItem: {
        paddingVertical: 13,
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
    ViewText: {
        backgroundColor: '#000',
        padding: 10,
        paddingLeft: 20,

    },
    ViewText2: {
        backgroundColor: '#000',
        marginTop: 20,

    },
    TextTile: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    settingText1: {
        fontSize: 16,
        color: 'red',
    },
});

