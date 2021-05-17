import React, {useEffect, useState} from 'react';
import {Touchable} from 'react-native';
import {
  StyleSheet,
  SectionList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import add from './TeamAssets/add.png';
import arrowDown from './TeamAssets/arrowDown.png';
import arrowUp from './TeamAssets/arrowUp.png';
import ExperimentDetail from '../ExperimentDetail/ExperimentDetail';
import {createStackNavigator} from '@react-navigation/stack';

const DATA = [
  {
    key: '1',
    title: 'Assigned',
    data: [
      {
        expNo: 5,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        submissions: '24/30',
        isComplete: false,
      },
    ],
  },
  {
    key: '2',
    title: 'Previous',
    data: [
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        submissions: '24/30',
        isComplete: true,
      },
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        submissions: '24/30',
        isComplete: true,
      },
    ],
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.expNo}>Experiment {item.expNo}</Text>
    <Text style={styles.expHeading}>{item.expHeading}</Text>
    <Text style={styles.submissions}>Submissions: {item.submissions}</Text>
    <Text style={item.isComplete ? styles.dueDate : styles.dueDateOrange}>
      Due {item.dueDate}
    </Text>
  </View>
);

export default function Experiments({navigation, team_id, team_name}) {
  const [isAssignedOpen, onChangeAssignedOpen] = React.useState(true);
  const [isCompletedOpen, onChangeCompletedOpen] = React.useState(true);

  useEffect(() => {
    getExp();
  }, []);

  function getExp() {
    /* axios
      .get(`https://simplab-api.herokuapp.com/api/assignments/${team_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      }); */
  }
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          return item.isComplete ? (
            isCompletedOpen ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('ExperimentDetail')}>
                <Item item={item} />
              </TouchableOpacity>
            ) : null
          ) : isAssignedOpen ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ExperimentDetail')}>
              <Item item={item} />
            </TouchableOpacity>
          ) : null;
        }}
        renderSectionHeader={({section: {title}}) => {
          const imgsrc =
            title === 'Assigned'
              ? isAssignedOpen
                ? arrowUp
                : arrowDown
              : isCompletedOpen
              ? arrowUp
              : arrowDown;
          return (
            <View>
              <TouchableOpacity
                style={styles.headericon}
                onPress={() => {
                  title === 'Assigned'
                    ? onChangeAssignedOpen(!isAssignedOpen)
                    : onChangeCompletedOpen(!isCompletedOpen);
                }}>
                <Image style={{top: 8}} source={imgsrc} />
              </TouchableOpacity>
              <Text style={styles.headertext}>{title}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.addBtn}>
        <Image source={add} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: '#fff',
    backgroundColor: '#272B2E',
  },
  headericon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 25,
    bottom: 5,
    height: 60,
    width: 30,
  },
  headertext: {
    color: '#f37a27',
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 26,
    textAlignVertical: 'center',
  },
  item: {
    padding: 10,
    height: 90,
    margin: 6,
    backgroundColor: '#1E2326',
    borderRadius: 9,
    marginVertical: 4,
  },
  expNo: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  expHeading: {
    color: '#cdcdcd',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  dueDateOrange: {
    position: 'absolute',
    bottom: 8,
    color: '#F27A27',
    paddingRight: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  dueDate: {
    position: 'absolute',
    bottom: 8,
    color: '#A1A1A1',
    paddingRight: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  submissions: {
    paddingTop: 15,
    color: '#c1c1c1',
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  addBtn: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#f37a27',
    borderRadius: 40,
    padding: 16,
    right: 20,
  },
});
