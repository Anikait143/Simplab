import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import bckImage from './SignInassets/BackImageLogin.png';
import next from './SignInassets/next.png';
import signuptext from './SignInassets/signup.png';

import emailicon from './SignInassets/mail.png';
import Passwordicon from './SignInassets/password.png';
import confirmPasswordicon from './SignInassets/confirmPassword.png';
import usernameicon from './SignInassets/Username.png';

export default function Signup({navigation}) {
  const [Username, onChangeUsername] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [confPassword, onChangeconfPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={bckImage} style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.signupbutton}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signuptext}>Back</Text>
        </TouchableOpacity>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Image style={{marginBottom: 40}} source={signuptext} />
          <View style={styles.Textinputcontainer}>
            <Image source={usernameicon} style={styles.texticon} />
            <TextInput
              style={styles.Textinput}
              label="Username"
              onChangeText={text => onChangeUsername(text)}
              value={Username}
              placeholder="Username"
              placeholderTextColor="#9C9C9C"
            />
          </View>

          <View style={styles.Textinputcontainer}>
            <Image source={emailicon} style={styles.texticon} />
            <TextInput
              style={styles.Textinput}
              label="Email"
              onChangeText={text => onChangeEmail(text)}
              value={Email}
              placeholder="Enter Your Email"
              placeholderTextColor="#9C9C9C"
            />
          </View>

          <View style={styles.Textinputcontainer}>
            <Image source={Passwordicon} style={styles.texticon} />
            <TextInput
              style={styles.Textinput}
              label="Password"
              onChangeText={text => onChangePassword(text)}
              value={Password}
              placeholder="Enter Your Password"
              placeholderTextColor="#9C9C9C"
            />
          </View>

          <View style={styles.Textinputcontainer}>
            <Image source={confirmPasswordicon} style={styles.texticon} />
            <TextInput
              style={styles.Textinput}
              label="confPassword"
              onChangeText={text => onChangeconfPassword(text)}
              value={confPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#9C9C9C"
            />
          </View>

          <TouchableOpacity
            style={{marginTop: 15}}
            onPress={() => console.log('hi')}>
            <Image source={next} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#9C9C9C',
  },
  Textinput: {
    color: '#9C9C9C',
    backgroundColor: '#272B2E',
    width: 300,
    height: 40,
    borderRadius: 30,
    paddingLeft: 42,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Textinputcontainer: {
    position: 'relative',
    marginBottom: 20,
  },
  texticon: {
    position: 'absolute',
    left: 15,
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
});
