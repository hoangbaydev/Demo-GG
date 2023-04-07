import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image,Container,Tile} from './styles'

const index = () => {
  return (
    <View style ={Container} >
      <Image style ={Image} source={require('../../../assets/Images/FrameLogin.png')} />
      <Tile style ={Tile}>Đăng nhập</Tile>
    </View>
  )
}

export default index
