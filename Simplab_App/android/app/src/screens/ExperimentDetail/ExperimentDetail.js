import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import {WebView} from 'react-native-webview';

export default function ExperimentDetail({navigation}) {
  const [result, onChangeResult] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: 600,
            width: '90%',
            resizeMode: 'cover',
            zIndex: 10,
            marginLeft: '5%',
            marginTop: 10,
          }}>
          <WebView
            source={{
              uri:
                'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
            }}
          />
        </View>
        <Text style={styles.textHeading}>Aim</Text>
        <Text style={styles.text}>jo hoga dekha jaayega</Text>

        <Text style={styles.textHeading}>Procedure</Text>
        <Text style={styles.text}>jo hoga dekha jaayega</Text>

        <Text style={styles.textHeading}>Theory</Text>
        <Text style={styles.text}>jo hoga dekha jaayega</Text>

        <Text style={styles.textHeading}>Calculations</Text>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.image}
        />

        <Text style={styles.textHeading}>Precautions</Text>
        <Text style={styles.text}>
          jo hoga dekha jaayega jo hoga dekha jaayega
          ijsidfjsifjsidfjasdifjasifjadsfkj nf idnf lorem23
          iasidfjisfjasdfdfsafsadfuashfusdjfsadjf sdfiajsdifjsaidjfiasdjfij
        </Text>

        <Text style={styles.textHeading}>Observation</Text>
        <TouchableOpacity style={styles.upload}>
          <Text style={styles.Text}>Upload Files</Text>
        </TouchableOpacity>

        <Text style={styles.textHeading}>Results</Text>
        <TextInput
          style={styles.Textinput}
          label="Password"
          multiline={true}
          numberOfLines={8}
          onChangeText={text => onChangeResult(text)}
          value={result}
          placeholder="TYPE RESULTS HERE"
          placeholderTextColor="#9C9C9C"
        />

        <TouchableOpacity style={styles.button} onPress="">
          <Text style={{fontSize: 18, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',

    backgroundColor: '#1E2326',
  },
  textHeading: {
    fontWeight: '700',
    color: '#C0C0C0',
    fontSize: 20,
    marginLeft: '5%',
    marginTop: 10,
  },
  text: {
    fontWeight: '400',
    color: '#9A9A9A',
    fontSize: 15,
    marginLeft: '5%',
    marginTop: 10,
  },
  image: {
    marginLeft: '5%',
    marginTop: 10,
    width: 339,
    height: 200,
  },
  Textinput: {
    marginBottom: 20,
    color: '#9C9C9C',
    backgroundColor: '#272B2E',
    textAlign: 'center',
    width: '90%',
    height: 150,
    marginLeft: '5%',
    borderRadius: 10,
  },
  Text: {fontWeight: '400', color: '#9A9A9A', fontSize: 15},
  upload: {
    marginBottom: 20,
    color: '#9C9C9C',
    backgroundColor: '#272B2E',
    textAlign: 'center',
    width: '90%',
    height: 70,
    marginLeft: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: '70%',
    marginBottom: 20,
    height: 37,
    width: 110,
    marginLeft: '35%',
    color: '#fff',
    backgroundColor: '#F37A27',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});
