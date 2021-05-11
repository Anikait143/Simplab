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
import avatar from './TeamAssets/file.png';
import dots from './TeamAssets/menu-vertical.png';

const DATA = [
  {
    name: 'guidlines.pdf',
    size: '25gb',
    by: 'sandy',
    date: '25 Apr',
  },
  {
    name: 'guidlines.pdf',
    size: '25gb',
    by: 'sandy',
    date: '25 Apr',
  },
];

const Tile = ({item}) => (
  <View style={styles.item}>
    <Image
      style={{top: 10, left: 0, alignSelf: 'flex-start'}}
      source={avatar}
    />
    <Image
      style={{bottom: 15, right: 0, alignSelf: 'flex-end'}}
      source={dots}
    />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.details}>
      {item.size}, Uploaded by{`${item.by}\n${item.date}`}
    </Text>
  </View>
);

export default function Chats({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bckImage} style={styles.imageBackground}>
        <View style={{width: '100%'}}>
          <FlatList data={DATA} renderItem={({item}) => <Tile item={item} />} />
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
    padding: 15,
    margin: 6,
    backgroundColor: '#1E2326',
    borderRadius: 9,
    marginVertical: 4,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    position: 'absolute',
    top: 10,
    left: 50,
  },
  details: {
    paddingTop: 15,
    color: '#f37a27',
    fontSize: 11,
    fontWeight: '300',
    fontFamily: 'Montserrat',
    position: 'absolute',
    top: 20,
    left: 50,
  },
});
