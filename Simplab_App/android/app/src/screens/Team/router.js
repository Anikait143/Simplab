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

/* export default function Router() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{headerShown: true}}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        activeTintColor: '#F37A27',
        inactiveTintColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Experiments"
        component={Experiments}
        options={{
          tabBarLabel: 'Experiments',
        }}
      />
      <Tab.Screen
        name="Files"
        component={Files}
        options={{
          tabBarLabel: 'Files',
        }}
      />
    </Tab.Navigator>
  );
}
 */

function viewShow(i) {
  if (i === 'Experiments') {
    return <Experiments />;
  } else if (i === 'Files') {
    return <Files />;
  }
  return <Chats />;
}

export default function Router({navigation}) {
  const [tabOpen, setTabOpen] = useState('Chats');

  return (
    <NavBar
      label="Class 12 phy"
      values={['Chats', 'Experiments', 'Files']}
      selectedValue={tabOpen}
      setSelectedValue={setTabOpen}>
      <Chats />
      <Experiments />
      <Files />
    </NavBar>
  );
}

const NavBar = ({label, children, values, selectedValue, setSelectedValue}) => (
  <View style={styles.container}>
    <ImageBackground source={bckImage} style={styles.imageBackground}>
      <View style={[styles.row, {paddingTop: 40, paddingBottom: 5}]}>
        <TouchableOpacity style={{left: -110}} onPress={() => {}}>
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
      {viewShow(selectedValue)}
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
