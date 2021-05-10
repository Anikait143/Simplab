import React from 'react'
import { StyleSheet,Button  ,View,ImageBackground ,Text,TextInput,Image,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import bckImage from '../AuthScreen/Login/Backgrounf.png';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
//import Icon from 'react-native-vector-icons/Ionicons';  

export default function Experiments() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={bckImage}
                style={styles.imageBackground}>
            </ImageBackground>
        </View>
        //<Text>Hello this is Experiments screen</Text>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        color:"#fff",
        backgroundColor: '#9C9C9C',
      
      },
      Textinput:{
        
        marginBottom:20,
        color:"#9C9C9C",
         backgroundColor:"#272B2E",
         textAlign:"center",
         width:300,
         height:40,
         borderRadius:30,
      },
    imageBackground:{
        flex:1,
        resizeMode:"cover",
        justifyContent:'center',
        alignItems: 'center'    
      },
    
      text:{
        color:"white",
        fontSize:15,
        textAlign: "center",
        
      
      },
      signuptext:{
        color:"#F37A27",
        fontSize:20,
        fontWeight:"700",        
      
      }, signupbutton:{
        height:25,
        width:70,
        
        alignItems:'center',
        justifyContent:"center",
        borderRadius:40,
        position:"absolute",
        top:70,
        right:30
        
    }
});