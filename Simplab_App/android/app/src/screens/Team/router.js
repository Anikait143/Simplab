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
import Chats from './chats';
import Experiments from './experiments';
import Files from './files';
import bckImage from './TeamAssets/bckImg.png';
import back from './TeamAssets/back.png';

function viewShow(i, navigation, {team_id, team_name}) {
  if (i === 'Experiments') {
    return (
      <Experiments
        navigation={navigation}
        team_id={team_id}
        team_name={team_name}
      />
    );
  } else if (i === 'Files') {
    return (
      <Files navigation={navigation} team_id={team_id} team_name={team_name} />
    );
  }
  return (
    <Chats navigation={navigation} team_id={team_id} team_name={team_name} />
  );
}

export default function Router({route, navigation}) {
  const [tabOpen, setTabOpen] = useState('Chats');
  const {team_id, team_name} = route.params;
  return (
    <NavBar
      team_id={team_id}
      label={team_name}
      values={['Chats', 'Experiments', 'Files']}
      selectedValue={tabOpen}
      setSelectedValue={setTabOpen}
      navigator={navigation}></NavBar>
  );
}

const NavBar = ({
  team_id,
  label,
  values,
  selectedValue,
  setSelectedValue,
  navigator,
}) => (
  <View style={styles.container}>
    <ImageBackground source={bckImage} style={styles.imageBackground}>
      <View style={[styles.row, {paddingTop: 40, paddingBottom: 5}]}>
        <TouchableOpacity
          style={{left: -110}}
          onPress={() => navigator.navigate('Home')}>
          <Image source={back} />
        </TouchableOpacity>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {viewShow(selectedValue, navigator, {team_id, label})}
    </ImageBackground>
  </View>
);

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
  row: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 14,
    alignSelf: 'flex-start',
    marginHorizontal: '6%',
    width: 86,
    padding: 8,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#f37a27',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
});
