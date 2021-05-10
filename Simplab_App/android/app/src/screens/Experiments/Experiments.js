import React, {useState} from 'react';
import {
  StyleSheet,
  SectionList,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import bckImage from './ExperimentsAssets/bckImage.png';
import Intersect from './ExperimentsAssets/Intersect.png';
import experimentsText from './ExperimentsAssets/expText.png';
import arrowDown from './ExperimentsAssets/arrowDown.png';
import arrowUp from './ExperimentsAssets/arrowUp.png';

const DATA = [
  {
    title: 'Assigned',
    data: [
      {
        expNo: 5,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: false,
      },
    ],
  },
  {
    title: 'Completed',
    data: [
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: true,
      },
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: true,
      },
    ],
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.expNo}>Experiment {item.expNo}</Text>
    <Text style={styles.expHeading}>{item.expHeading}</Text>
    <Image
      style={{top: 10, left: 0, alignSelf: 'flex-start'}}
      source={Intersect}
    />
    <Text style={item.isComplete ? styles.dueDate : styles.dueDateOrange}>
      {item.dueDate}
    </Text>
  </View>
);

export default function Settings({navigation}) {
  const [isAssignedOpen, onChangeAssignedOpen] = React.useState(true);
  const [isCompletedOpen, onChangeCompletedOpen] = React.useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={bckImage} style={styles.imageBackground}>
        <View style={{width: '100%'}}>
          <Image
            style={{marginBottom: 37, marginTop: 49, alignSelf: 'center'}}
            source={experimentsText}
          />
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
              return item.isComplete ? (
                isCompletedOpen ? (
                  <Item item={item} />
                ) : null
              ) : isAssignedOpen ? (
                <Item item={item} />
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
  headericon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 25,
    bottom: 5,
    height: 60,
    width: 30,
  },
  headertext: {
    color: '#8e8e8e',
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 26,
    textAlignVertical: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  item: {
    backgroundColor: '#1E2326',
    borderRadius: 9,
    marginVertical: 4,
  },
  expNo: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    position: 'absolute',
    top: 12,
    left: 50,
  },
  expHeading: {
    color: '#CFCFCF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    position: 'absolute',
    top: 34,
    left: 50,
  },
  dueDateOrange: {
    color: '#F27A27',
    paddingRight: 12,
    paddingBottom: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  dueDate: {
    color: '#A1A1A1',
    paddingRight: 12,
    paddingBottom: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});
