import React,{ useState } from 'react'
import { StyleSheet,ScrollView, FlatList, View,ImageBackground ,Text,TextInput,Image,TouchableOpacity,Dimensions} from 'react-native';
import bckImage from '../Settings/SettingsAssets/BackImageSettings.png';
import Lib from '../Home/images/Library.png';
import pattern from '../alerts/AlertsAssets/intersect2.png'


export default function Library({navigation}) {
    let {width, height} = Dimensions.get('window')
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={bckImage} style={styles.imageBackground}>
          <View style={{width: '100%', marginBottom: 20}}>
            <Image
              style={{marginBottom: 20, marginTop: 49, alignSelf: 'center', width: 85, height: 25}}
              source={Lib}
            />
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
                onPress={() => console.log('hi')}>
                <Text
                style={{
                    marginLeft: 15,
                    marginTop: 10,
                    zIndex: 1,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                    textAlignVertical: 'center',
                }}>
                    Magnetic Lines in a Coil
                </Text>
                <Image source={pattern} style={{ height:90,width:100, marginLeft:-width/6,alignSelf: 'stretch' }} />
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
                onPress={() => console.log('hi')}>
                <Text
                style={{
                    marginLeft: 15,
                    marginTop: 10,
                    fontWeight: '700',
                    fontSize: 20,
                    zIndex: 1,
                    color: '#FFFFFF',
                    textAlignVertical: 'center',
                }}>
                    Electromagnetic Induction
                </Text>
                <Image source={pattern} style={{ height:90,width:100, marginLeft:-width/6,alignSelf: 'stretch' }} />
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
                onPress={() => console.log('hi')}>
                <Text
                style={{
                    marginLeft: 15,
                    marginTop: 10,
                    zIndex: 1,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                    textAlignVertical: 'center',
                }}>
                    Travelling Microscope
                </Text>
                <Image source={pattern} style={{ height:90,width:100, marginLeft:-width/6,alignSelf: 'stretch' }} />
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
                onPress={() => console.log('hi')}>
                <Text
                style={{
                    marginLeft: 15,
                    marginTop: 10,
                    zIndex: 1,
                    fontWeight: '700',
                    fontSize: 20,
                    color: '#FFFFFF',
                    textAlignVertical: 'center',
                }}>
                    Stoke’s Law
                </Text>
                <Image source={pattern} style={{ height:90,width:100, marginLeft:-width/6,alignSelf: 'stretch' }} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
});
