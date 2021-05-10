import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  ImageBackground,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import bckImage from '../Settings/SettingsAssets/BackImageSettings.png';
import SimplabText from '../Home/images/SIMPLAB.png';
import dots from '../Home/images/dots.png';
import des1 from '../Home/images/Intersect.png';
import des2 from '../Home/images/Intersect-3.png';
import des3 from '../Home/images/Intersect-1.png';
import des4 from '../Home/images/path166.png';
import des5 from '../Home/images/Intersect-2.png';
import profphoto from '../Home/images/Ellipse-9.png';
import lib from '../Home/images/lib.png';
import create from '../Home/images/create.png';
import hash from '../Home/images/hash.png';
import router from '../Team/router';
import library from '../Home/images/Library.png';
import createteam from '../Home/images/Create-Team.png';
import jointeam from '../Home/images/Join-Team.png';
import profile from '../Profile/Profile';

export default function Teams({navigation}) {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <ImageBackground source={bckImage} style={styles.imageBackground}>
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <Menu
                style={{
                  marginTop: 40,
                  marginLeft: 20,
                  borderRadius: 10,
                  width: 200,
                  backgroundColor: '#3C3C3C',
                }}
                ref={ref => (_menu = ref)}
                button={
                  <TouchableOpacity onPress={() => _menu.show()}>
                    <Image
                      style={{marginBottom: 20, marginTop: 49, marginLeft: 20}}
                      source={dots}
                    />
                  </TouchableOpacity>
                }>
                <MenuItem
                  style={{marginLeft: -3}}
                  onPress={() => {
                    console.log('hi');
                    _menu.hide();
                  }}>
                  <Image
                    style={{marginBottom: 20, marginTop: 49, marginLeft: 10}}
                    source={create}
                  />
                  <Text
                    style={{
                      marginLeft: 25,
                      marginTop: 10,
                      fontWeight: '700',
                      fontSize: 15,
                      color: '#FFFFFF',
                    }}>
                    Create Team
                  </Text>
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    console.log('hi1');
                    _menu.hide();
                  }}>
                  <Image
                    style={{marginBottom: 20, marginTop: 49, marginLeft: 10}}
                    source={hash}
                  />
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      fontWeight: '700',
                      fontSize: 15,
                      color: '#FFFFFF',
                    }}>
                    Join Team with Code
                  </Text>
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    console.log('hi2');
                    _menu.hide();
                  }}>
                  <Image
                    style={{marginBottom: 20, marginTop: 49, marginLeft: 10}}
                    source={lib}
                  />
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 10,
                      fontWeight: '700',
                      fontSize: 15,
                      color: '#FFFFFF',
                    }}>
                    Library
                  </Text>
                </MenuItem>
              </Menu>
              <Image
                style={{marginBottom: 20, marginTop: 49, marginLeft: 10}}
                source={SimplabText}
              />
              <TouchableOpacity
                style={{
                  borderRadius: 35,
                  height: 70,
                  width: 70,
                  //marginRight: 10,
                  marginLeft: 70,
                  marginTop: 25,
                }}
                onPress={() => navigation.navigate('profile')}>
                <View>
                  <Image source={profphoto} style={{height: 70, width: 70}} />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#1E2326',
                borderRadius: 12,
                height: 91,
                alignSelf: 'stretch',
                marginRight: 10,
                marginLeft: 10,
                marginTop: 20,
              }}
              onPress={() => navigation.navigate('router')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginLeft: 15,
                    marginTop: 10,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}>
                  Class 12 Physics
                </Text>
                <View>
                  <Image
                    source={des1}
                    style={{height: 40, marginLeft: 130, marginTop: 10}}
                  />
                  <Image
                    source={des2}
                    style={{height: 35, marginLeft: 128, marginTop: 5}}
                  />
                  <Image
                    source={des3}
                    style={{height: 45, marginLeft: 105, marginTop: -42}}
                  />
                  <Image
                    source={des4}
                    style={{height: 45, marginLeft: 95, marginTop: -72}}
                  />
                  <Image
                    source={des5}
                    style={{height: 35, marginLeft: -30, marginTop: -10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#1E2326',
                borderRadius: 12,
                height: 91,
                alignSelf: 'stretch',
                marginRight: 10,
                marginLeft: 10,
                marginTop: 20,
              }}
              onPress={() => console.log('hi')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginLeft: 15,
                    marginTop: 10,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}>
                  Class 12 Physics
                </Text>
                <View>
                  <Image
                    source={des1}
                    style={{height: 40, marginLeft: 130, marginTop: 10}}
                  />
                  <Image
                    source={des2}
                    style={{height: 35, marginLeft: 128, marginTop: 5}}
                  />
                  <Image
                    source={des3}
                    style={{height: 45, marginLeft: 105, marginTop: -42}}
                  />
                  <Image
                    source={des4}
                    style={{height: 45, marginLeft: 95, marginTop: -72}}
                  />
                  <Image
                    source={des5}
                    style={{height: 35, marginLeft: -30, marginTop: -10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#1E2326',
                borderRadius: 12,
                height: 91,
                alignSelf: 'stretch',
                marginRight: 10,
                marginLeft: 10,
                marginTop: 20,
              }}
              onPress={() => console.log('hi')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginLeft: 15,
                    marginTop: 10,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}>
                  Class 12 Physics
                </Text>
                <View>
                  <Image
                    source={des1}
                    style={{height: 40, marginLeft: 130, marginTop: 10}}
                  />
                  <Image
                    source={des2}
                    style={{height: 35, marginLeft: 128, marginTop: 5}}
                  />
                  <Image
                    source={des3}
                    style={{height: 45, marginLeft: 105, marginTop: -42}}
                  />
                  <Image
                    source={des4}
                    style={{height: 45, marginLeft: 95, marginTop: -72}}
                  />
                  <Image
                    source={des5}
                    style={{height: 35, marginLeft: -30, marginTop: -10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    position: 'relative',
    textAlignVertical: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  switchText: {
    color: '#939393',
    backgroundColor: '#1E2326',
    height: 46,
    fontWeight: '700',
    fontSize: 16,
    borderRadius: 6,
    paddingLeft: 20,
    textAlignVertical: 'center',
  },
  switch: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
    top: 10,
  },
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#272B2E',
  },
  labeltext: {
    color: '#C0C0C0',
    fontWeight: '700',
    paddingLeft: 21,
  },
  headertext: {
    color: '#C0C0C0',
    fontWeight: '700',
    paddingLeft: 21,
    fontSize: 21,
    paddingVertical: 20,
  },
  Textinput: {
    color: '#9C9C9C',
    backgroundColor: '#1E2326',
    height: 46,
    borderRadius: 6,
    paddingLeft: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    //justifyContent: 'space-around',
    alignItems: 'center',
  },
  Textinputcontainer: {
    position: 'relative',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  texticon: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
    top: 10,
  },

  text: {
    color: '#F37A27',
    fontSize: 100,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#444444',
    borderRadius: 6,
  },
  buttonicon: {
    left: '8.33%',
    right: '8.33%',
  },
  buttontext: {
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#A6A6A6',
  },
});
