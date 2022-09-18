import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Icon,IconComponentProvider } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import background from "../screen2/materials/background.png";

export default function App() { 
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode = 'cover' style ={styles.ImageBackground} ></ImageBackground>
      <StatusBar style="auto" />
      <View style = {styles.top}> 
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <Icon name='lock' size={100} color = 'black'></Icon>
        </IconComponentProvider>
      </View>
      <View style = {styles.middle}></View >
      <View style = {styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex:1,
    justifyContent:'center'
  }
});
