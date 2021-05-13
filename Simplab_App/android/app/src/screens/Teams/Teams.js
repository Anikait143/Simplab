import React, {useState} from 'react';
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
import profphoto from '../Home/images/Ellipse-9.png';
import lib from '../Home/images/lib.png';
import create from '../Home/images/create.png';
import hash from '../Home/images/hash.png';
import pattern from '../alerts/AlertsAssets/intersect2.png';
import Profile from '../Profile/Profile';
import Library from '../Library/Library'
import router from '../Team/router';
import {createStackNavigator} from '@react-navigation/stack';

export default function Teams({navigation}) {
  const [ShowCreateTeam, setShowCreateTeam] = useState(false);
  const [ShowJoinTeam, setShowJoinTeam] = useState(false);
  const [Code, onChangeCode] = React.useState('');
  const [Title, onChangeTitle] = React.useState('');
  const [List, onChangeList] = React.useState('');

    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <ImageBackground source={bckImage} style={styles.imageBackground}>
            <View style={{width: '100%', marginBottom: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
                        style={{
                          marginBottom: 20,
                          marginTop: 49,
                          marginLeft: -10,
                          height: 30,
                        }}
                        source={dots}
                      />
                    </TouchableOpacity>
                  }>
                  <MenuItem
                    style={{marginLeft: 0}}
                    onPress={() => {
                      setShowJoinTeam(false);
                      setShowCreateTeam(true);
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
                      setShowJoinTeam(true);
                      setShowCreateTeam(false);
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
                      navigation.navigate('Library');
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
                  style={{
                    marginBottom: 20,
                    marginTop: 49,
                    marginLeft: -30,
                    width: 200,
                    height: 40,
                  }}
                  source={SimplabText}
                />
                <TouchableOpacity
                  style={{
                    borderRadius: 35,
                    height: 70,
                    width: 70,
                    //marginRight: 10,
                    //marginLeft: 70,
                    alignSelf: 'center',
                    marginTop: 25,
                  }}
                  onPress={() => navigation.navigate('Profile')}>
                  <View>
                    <Image source={profphoto} style={{height: 70, width: 70}} />
                  </View>
                </TouchableOpacity>
              </View>
              {ShowJoinTeam ? (
                <View
                  style={{
                    backgroundColor: '#3C3C3C',
                    alignSelf: 'stretch',
                    borderRadius: 8,
                    height: 144,
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}>
                  <TextInput
                    style={styles.Textinput}
                    label="Enter Code"
                    onChangeText={text => onChangeCode(text)}
                    value={Code}
                    placeholder="# Enter Code"
                    placeholderTextColor="#AAAAAA"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 20,
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#F37A27',
                        borderRadius: 6,
                        height: 35,
                        width: 91,
                        marginRight: 15,
                        marginTop: 15,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        //textAlignVertical: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => console.log('hi')}>
                      <Text
                        style={{
                          //textAlignVertical: 'center',
                          fontWeight: '700',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Join Team
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#333333',
                        borderRadius: 6,
                        borderColor: 'white',
                        borderWidth: 2,
                        height: 35,
                        width: 91,
                        marginRight: 15,
                        marginTop: 15,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        //textAlignVertical: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => setShowJoinTeam(false)}>
                      <Text
                        style={{
                          //textAlignVertical: 'center',
                          fontWeight: '700',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
              {ShowCreateTeam ? (
                <View
                  style={{
                    backgroundColor: '#3C3C3C',
                    alignSelf: 'stretch',
                    borderRadius: 8,
                    height: 144,
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}>
                  <TextInput
                    style={styles.Textinput}
                    label="Enter Title"
                    onChangeText={text => onChangeTitle(text)}
                    value={Title}
                    placeholder="Enter Title"
                    placeholderTextColor="#AAAAAA"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 20,
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#F37A27',
                        borderRadius: 6,
                        height: 35,
                        width: 106,
                        marginRight: 15,
                        marginTop: 15,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        //textAlignVertical: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => console.log('hi')}>
                      <Text
                        style={{
                          //textAlignVertical: 'center',
                          fontWeight: '700',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Create Team
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#333333',
                        borderRadius: 6,
                        borderColor: 'white',
                        borderWidth: 2,
                        height: 35,
                        width: 91,
                        marginRight: 15,
                        marginTop: 15,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        //textAlignVertical: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => setShowCreateTeam(false)}>
                      <Text
                        style={{
                          //textAlignVertical: 'center',
                          fontWeight: '700',
                          fontSize: 16,
                          color: '#FFFFFF',
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
              <TouchableOpacity
                style={{
                  backgroundColor: '#1E2326',
                  borderRadius: 12,
                  height: 91,
                  alignSelf: 'auto',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate('router')}>
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
                <Image
                  source={pattern}
                  style={{height: 90, width: 100, alignSelf: 'stretch'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1E2326',
                  borderRadius: 12,
                  height: 91,
                  alignSelf: 'auto',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate('router')}>
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
                <Image
                  source={pattern}
                  style={{height: 90, width: 100, alignSelf: 'stretch'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1E2326',
                  borderRadius: 12,
                  height: 91,
                  alignSelf: 'auto',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate('router')}>
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
                <Image
                  source={pattern}
                  style={{height: 90, width: 100, alignSelf: 'stretch'}}
                />
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
    marginHorizontal: 20,
    marginTop: 15,
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
