import React,{ useState } from 'react'
import { StyleSheet,ScrollView, Button, View,ImageBackground ,Text,TextInput,Image,TouchableOpacity} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import bckImage from '../Settings/SettingsAssets/BackImageSettings.png';
import addpic from '../Home/images/addpic.png';
import profpic from '../Home/images/profpic.png';
import simpText from '../Home/images/SIMPLAB-white.png';
import back from '../Home/images/Vector.png';

export default function Profile({navigation}) {
    const [email, onChangeEmail] = React.useState('pepper_sj@cs.iitr.ac.in');
    const [contact, onChangeContact] = React.useState('8821820534');
    const [organization, onChangeOrganization] = React.useState('ARMY PUBLIC SCHOOL, MHOW');
    const [name, onChangeName] = React.useState('PEPPER  STARK');

    return (
        <View style={{flex:1}}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <ImageBackground source={bckImage} style={styles.imageBackground}>
                    <View style={{alignSelf: 'stretch'}}>
                    <View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 18,
                            height: 36,
                            width: 36,
                            alignSelf: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginRight: 10,
                            marginLeft: 30,
                            marginTop: 50,
                        }}
                        onPress={() => navigation.navigate('Home')}>
                        <View style={{width: 40, height: 40, borderRadius: 80, marginTop: 0}}>
                            <Image source={back} style={{ zIndex: 1, height:25, width:25, marginTop: 5, marginLeft: 5}} />
                        </View>
                    </TouchableOpacity>    
                    <TouchableOpacity
                        style={{
                            borderRadius: 80,
                            height: 160,
                            width: 160,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginRight: 10,
                            marginLeft: 10,
                            marginTop: -25,
                        }}
                        onPress={() => console.log('hi')}>
                        <View style={{width: 160, height: 160, borderRadius: 80, backgroundColor: 'white', marginTop: 0}}>
                            <Image source={profpic} style={{ zIndex: 1, height:150, width:150, marginTop: 5, marginLeft: 5}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 25,
                            height: 50,
                            width: 50,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginRight: 10,
                            marginLeft: 120,
                            marginTop: -60,
                            zIndex: 1
                        }}
                        onPress={() => console.log('hi1')}>
                        <View style={{marginTop: -10,marginLeft:-5}}>
                            <Image source={addpic} style={{ zIndex: 1, height:65, width:65, marginTop: 0, marginLeft: 5}} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#FFFFFF',
                        fontWeight: '700',
                        fontSize: 18,
                        marginTop: 25,
                        textAlign: 'center'
                    }}>{name}</Text>
                    </View>
                    <View style={{marginTop: 40}}>
                    <Text style={styles.labeltext}>EMAIL</Text>
                    <View style={styles.Textinputcontainer}>
                        <TextInput
                            style={styles.Textinput}
                            label="Email"
                            editable = {false}
                            value={email}
                        />
                    </View>
                    <Text style={styles.labeltext}>ORGANIZATION</Text>
                    <View style={styles.Textinputcontainer}>
                        <TextInput
                            style={styles.Textinput}
                            label="Organization"
                            editable = {false}
                            value={organization}
                        />
                    </View>
                    <Text style={styles.labeltext}>CONTACT</Text>
                    <View style={styles.Textinputcontainer}>
                        <TextInput
                            style={styles.Textinput}
                            label="Contact"
                            editable = {false}
                            value={contact}
                        />
                    </View>
                    </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
        <View style={{backgroundColor: '#272B2E', height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Image source = {simpText} style={{width:110, height:14}}></Image>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: '#fff',
      backgroundColor: '#272B2E',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      //justifyContent: 'space-around',
      alignItems: 'center',
    },
    labeltext: {
      color: '#C0C0C0',
      fontWeight: '700',
      paddingLeft: 21,
      marginTop: 10
    },
    Textinput: {
      color: '#F37A27',
      backgroundColor: '#23282B',
      fontWeight: '700',
      height: 46,
      borderRadius: 6,
      paddingLeft: 20,
    },
    Textinputcontainer: {
      position: 'relative',
      marginLeft: 17,
      marginHorizontal: 10,
      marginVertical: 5,
    },
  });