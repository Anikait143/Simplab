import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import avatar from './TeamAssets/avatar.png';
import smiley from './TeamAssets/smiley.png';
import send_button from './TeamAssets/send_button.png';
import attach from './TeamAssets/attach.png';
import download from './TeamAssets/download.png';
import file from './TeamAssets/file.png';
import Fire from '../../../Fire'

const DATA = [
  {
    key: '1',
    type: 'txt',
    msg:
      'koi jo mila to mujhe aesa lagta tha jaise meri sari duniya mein geeto ki rut aur rango ki barkha hai, khushbu ki aandhi hai..mehki hui si ab saari fizaaaye hai, behki hui si ab saari hawayein hai...',
    name: 'Anshika',
    date: '25 Apr',
    time: '10:00',
  },
  {
    key: '2',
    type: 'txt',
    msg:
      'koi jo mila to mujhe aesa lagta tha jaise meri sari duniya mein geeto ki rut aur rango ki barkha hai, khushbu ki aandhi hai..mehki hui si ab saari fizaaaye hai, behki hui si ab saari hawayein hai...',
    name: 'Anshika',
    date: '25 Apr',
    time: '10:00',
  },
  {
    key: '3',
    type: 'pdf',
    name: 'Anshika',
    file_name: 'ques.pdf',
    date: '25 Apr',
    time: '10:00',
  },
];

const MsgTile = ({item}) => (
  <View style={styles.item}>
    <View style={{paddingLeft: 10, paddingBottom: 10}}>
      <Image
        style={{top: 10, left: 0, alignSelf: 'flex-start'}}
        source={avatar}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.time}>
        {item.date}, {item.time}
      </Text>
    </View>
    {item.type === 'txt' ? (
      <Text style={styles.msg}>{item.msg}</Text>
    ) : (
      <FileTile item={item} />
    )}
  </View>
);

const FileTile = ({item}) => (
  <View
    style={[
      styles.item,
      {
        padding: 15,
        backgroundColor: '#585858',
        borderRadius: 9,
        paddingVertical: 0,
        marginVertical: 10,
      },
    ]}>
    <Image style={{top: 10, left: 0, alignSelf: 'flex-start'}} source={file} />
    <Image
      style={{bottom: 15, right: 0, alignSelf: 'flex-end'}}
      source={download}
    />
    <Text style={styles.file_name}>{item.file_name}</Text>
  </View>
);

export default function Chats({navigation}) {
  const [msg, onChangeMsg] = useState('');

  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <MsgTile item={item} />}
        />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.send_button} source={send_button} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMsg}
        value={msg}
        placeholder="Type a message"
      />
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.smiley} source={smiley} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.attach} source={attach} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    width: '100%',
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
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  input: {
    paddingLeft: 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 22,
    position: 'absolute',
    bottom: 10,
    left: 5,
    right: 55,
    backgroundColor: '#dcdcdc',
  },
  send_button: {
    position: 'absolute',
    bottom: 20,
    right: 12,
  },
  smiley: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 30,
    left: 25,
  },
  attach: {
    position: 'absolute',
    bottom: 33,
    right: 80,
  },
  file_name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    position: 'absolute',
    top: 12,
    left: 60,
  },
});
