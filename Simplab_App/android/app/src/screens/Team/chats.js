import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  FlatList,
  Image,
} from 'react-native';
import bckImage from './TeamAssets/bckImg.png';
import avatar from './TeamAssets/avatar.png';

const DATA = [
  {
    msg:
      'koi jo mila to mujhe aesa lagta tha jaise meri sari duniya mein geeto ki rut aur rango ki barkha hai, khushbu ki aandhi hai..mehki hui si ab saari fizaaaye hai, behki hui si ab saari hawayein hai...',
    name: 'Anshika',
    date: '25 Apr',
    time: '10:00',
  },
  {
    msg:
      'koi jo mila to mujhe aesa lagta tha jaise meri sari duniya mein geeto ki rut aur rango ki barkha hai, khushbu ki aandhi hai..mehki hui si ab saari fizaaaye hai, behki hui si ab saari hawayein hai...',
    name: 'Anshika',
    date: '25 Apr',
    time: '10:00',
  },
];

const MsgTile = ({item}) => (
  <View style={styles.item}>
    <View style={{paddingLeft: 10}}>
      <Image
        style={{top: 10, left: 0, alignSelf: 'flex-start'}}
        source={avatar}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>
        {item.date}, {item.time}
      </Text>
    </View>
    <Text style={styles.msg}>{item.msg}</Text>
  </View>
);

export default function Chats({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bckImage} style={styles.imageBackground}>
        <View style={{width: '100%'}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <MsgTile item={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
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
  item: {
    padding: 10,
    margin: 6,
    backgroundColor: '#1E2326',
    borderRadius: 9,
    marginVertical: 4,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    left: 74,
  },
  time: {
    color: '#9d9d9d',
    fontSize: 12,
    fontFamily: 'Montserrat',
    position: 'absolute',
    top: 35,
    left: 74,
  },
  msg: {
    padding: 10,
    paddingTop: 15,
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
});
