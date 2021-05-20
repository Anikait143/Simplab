import React, {useEffect, useState, useContext} from 'react';
import {Touchable} from 'react-native';
import {
  StyleSheet,
  SectionList,
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import add from './TeamAssets/add.png';
import arrowDown from './TeamAssets/arrowDown.png';
import arrowUp from './TeamAssets/arrowUp.png';
import cross from './TeamAssets/close.png';
import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Dropdownelement from './dropdownelement';
import Moment from 'moment';
import SwitchSelector from 'react-native-switch-selector';
import ExperimentDetail from '../ExperimentDetail/ExperimentDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {Context as AuthContext} from '../../context/AuthContext';
import {TextInput} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

const exp = [
  {
    value: 'Electric Field of Point Charge',
  },
  {
    value: 'Ohm\'s Law',
  },
  {
    value: 'Hooke\'s Law',
  },
  {
    value: 'Faraday\'s Law',
  },
  {
    value: 'Waves Interference',
  },
  {
    value: 'Capacitor LAB',
  },
  {
    value: 'Projectile Motion',
  },
  {
    value: 'Rutherford Scattering',
  },
];

const Item = ({item, admin, token}) => (
  <View style={styles.item}>
    <Text style={styles.expNo}>Experiment {item.exp}</Text>
    <Text style={styles.expHeading}>{item.title}</Text>
    {token == admin ? (
      <Text style={styles.submissions}>View Submissions</Text>
    ) : null}
    <Text style={styles.dueDateOrange}>
      Due: {' '} {item.due_date}{'  '}{item.due_time}
    </Text>
  </View>
);

export default function Experiments({navigation, admin, team_id}) {
  const [isAssignedOpen, onChangeAssignedOpen] = React.useState(true);
  const [isCompletedOpen, onChangeCompletedOpen] = React.useState(true);
  const [showeditAssign, setshoweditAssign] = useState(false);
  const [Assign, setAssign] = useState(false);
  const [ready, setReady] = useState([]);
  const [istrue,setTrue] = useState([]);
  const [DATA, setDATA] = useState([]);
  const {state} = useContext(AuthContext);
  const [Date, onChangeDate] = React.useState('2016-05-15');
  const [text, onChangeText] = React.useState(0);
  const [item, setItem] = React.useState('Electric Field of Point Charge');
  const [val, setVal] = React.useState('Electric Field of Point Charge');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = React.useState('11:59');
  const [vartime, setvarTime] = React.useState('');
  const [temp, setTemp] = React.useState(false);
  const [temp2, setTemp2] = React.useState(false);
  const [temp1, setTemp1] = React.useState(0);
  const [temp3, setTemp3] = React.useState(0);
  const [time1, setTime1] = React.useState(false);
  const [Date1, setDate1] = React.useState('');
  const options = [
    {label: 'AM', value: '0'},
    {label: 'PM', value: '1'},
  ];
  const [Submission, onChangesubmission] = React.useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = Time => {
    //console.warn("A date has been picked: ", time);
    setTime(Moment(Time).format('HH:mm'));
    //console.log(time);
    istrue.due_time = Moment(Time).format('HH:mm');
    setTime1(true);
    hideDatePicker();
  };

  useEffect(() => {
    assign_list();
  }, [temp,temp2]);

  async function assign_list() {
    await axios
      .get(`https://simplab-api.herokuapp.com/api/assignments/${team_id}`)
      .then(res => {
        setDATA(res.data);
        //setReady(true);
      })
      .catch(err => console.log(err));
  }

  function edit_assign(id, item, key){
    axios
      .get(`https://simplab-api.herokuapp.com/api/get-assignment-detail/${id}`)
      .then(res => {
        axios
          .get(`https://simplab-api.herokuapp.com/api/submissions-list/${id}`)
          .then(res1 => {
            setReady(res.data);
            var array = [...DATA]
            setTrue(array[key]);
            array.splice(key, 1);
            //console.log(istrue);
            //istrue.exp = 1;
            //console.log(istrue);
            //setDATA(array);
            setTemp1(id);
            setTemp3(key);
            onChangesubmission(res1.data);
            setshoweditAssign(true);
          })
          .catch(e => console.log(e));
      })
      .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={Assign}>
        <View style={styles.PopupContainer}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 12,
            }}>
            Assign Experiment
          </Text>
          <Text
            style={{
              color: '#AAAAAA',
              fontSize: 15,
              fontWeight: '700',
              marginTop: 12,
              alignSelf: 'stretch',
              marginLeft: 20,
              marginTop: 30,
            }}>
            Title
          </Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={text}
            placeholder="Enter title"
            placeholderTextColor="#939393"
            style={{
              backgroundColor: '#1E2326',
              color: '#9C9C9C',
              fontWeight: '700',
              alignSelf: 'stretch',
              marginHorizontal: 20,
              marginTop: 5,
              borderRadius: 5,
              paddingLeft: 15,
            }}></TextInput>
          <TouchableOpacity
            style={styles.crossimage}
            onPress={() => setAssign(false)}>
            <Image source={cross} />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              marginTop: 30,
            }}>
            <Text
              style={{
                color: '#C0C0C0',
                fontWeight: '700',
                fontSize: 14,
                marginLeft: 15,
              }}>
              Due date
            </Text>
            <Text
              style={{
                color: '#C0C0C0',
                fontWeight: '700',
                fontSize: 14,
                marginRight: 85,
              }}>
              Due time
            </Text>
          </View>
          <View style={[styles.pickercontainer]}>
            <DatePicker
              style={{
                width: 140,
                color: '#fff !important',
                backgroundColor: '#000',
              }}
              date={Date}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2022-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  color: '#fff',
                  color: '#fff',
                  backgroundColor: '#000',
                  borderColor: '#000',
                },
                dateText: {color: '#fff'},
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                onChangeDate(date);
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: 140,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={showDatePicker}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  textAlign: 'left',
                  marginTop: 10,
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                {time}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={{marginTop: 20, alignSelf: 'stretch'}}>
            <Text
              style={{
                color: '#AAAAAA',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 0,
                alignSelf: 'stretch',
                marginLeft: 20,
                marginTop: 30,
              }}>
              Experiment
            </Text>
            <RNPickerSelect
              style={{width: 100}}
              onValueChange={(value, index) => {
                setItem((index)),
                setVal(value);
              }}
              items={[
                {
                  label: 'Electric Field of Point Charge',
                  value: 'Electric Field of Point Charge',
                  color: '#CACACA',
                },
                {
                  label: 'Ohm\'s Law',
                  value: 'Ohm\'s Law',
                  color: '#CACACA',
                },
                {
                  label: 'Hooke\'s Law',
                  value: 'Hooke\'s Law',
                  color: '#CACACA',
                },
                {label: 'Torque', value: 'Torque', color: '#CACACA'},
                {
                  label: 'Faraday\'s Law',
                  value: 'Faraday\'s Law',
                  color: '#CACACA',
                },
                {label: 'Waves Interference', value: 'Waves Interference', color: '#CACACA'},
                {label: 'Capacitor LAB', value: 'Capacitor LAB', color: '#CACACA'},
                {label: 'Projectile Motion', value: 'Projectile Motion', color: '#CACACA'},
                {label: 'Rutherford Scattering', value: 'Rutherford Scattering', color: '#CACACA'},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'black',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#AAAAAA',
                    fontSize: 15,
                    fontWeight: '700',
                    marginBottom: 25,
                    alignSelf: 'stretch',
                    marginLeft: 20,
                    marginTop: 30,
                  }}>
                  {val}
                </Text>
                <Image
                  source={arrowDown}
                  style={{
                    alignSelf: 'flex-end',
                    marginBottom: 30,
                    marginRight: 20,
                  }}></Image>
              </View>
            </RNPickerSelect>
          </View>

          <View style={[styles.ButtonContainer, {marginTop: 70}]}>
            <TouchableOpacity
              style={styles.AddButton}
              onPress={() => {
                //console.log('hi')
                setvarTime(time+':00');
                console.log(vartime, team_id, Date, item, text);
                axios
                  .post(
                    'https://simplab-api.herokuapp.com/api/create_assignment/',
                    {
                      team: team_id,
                      title: text,
                      due_date: Date,
                      exp: item,
                      due_time: vartime,
                    },
                  )
                  .then(function (response) {
                    //alert("User registered successfully.");
                    setAssign(false);
                    setTemp2(!temp2);
                  })
                  .catch(function (error) {
                    console.log(error);
                    //alert(error);
                  });
              }}>
              <Text style={styles.buttonText}>Assign</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setAssign(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={showeditAssign}>
        <View style={styles.PopupContainer}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 12,
            }}>
            Experiment- {ready.exp}
          </Text>
          <Text
            style={{
              color: '#AAAAAA',
              fontSize: 15,
              fontWeight: '700',
              marginTop: 12,
            }}>
            {ready.title}
          </Text>
          <TouchableOpacity
            style={styles.crossimage}
            onPress={() => {
              setshoweditAssign(false)
            }}>
            <Image source={cross} />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              marginTop: 30,
            }}>
            <Text
              style={{
                color: '#C0C0C0',
                fontWeight: '700',
                fontSize: 14,
                marginLeft: 15,
              }}>
              Due date
            </Text>
            <Text
              style={{
                color: '#C0C0C0',
                fontWeight: '700',
                fontSize: 14,
                marginRight: 85,
              }}>
              Due time
            </Text>
          </View>
          <View style={[styles.pickercontainer]}>
            <DatePicker
              style={{
                width: 140,
                color: '#fff !important',
                backgroundColor: '#000',
              }}
              date={istrue.due_date}
              mode="date"
              placeholder="Select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2022-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  color: '#fff',
                  color: '#fff',
                  backgroundColor: '#000',
                  borderColor: '#000',
                },
                dateText: {color: '#fff'},
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                  istrue.due_date = date;
                  setDate1(date);
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: 140,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={showDatePicker}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  textAlign: 'left',
                  marginTop: 10,
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                {istrue.due_time}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.AddButton}
              onPress={() => {
                axios
                  .put(
                    `https://simplab-api.herokuapp.com/api/edit/assignment-detail/${temp1}`,
                    {
                      due_date: istrue.due_date,
                      due_time: time,                   
                    }
                  )
                  .then(res => {
                    console.log(res.data);
                    DATA[temp3].due_time = istrue.due_time;
                    DATA[temp3].due_date = istrue.due_date;
                    console.log(DATA);
                    setTemp(!temp);
                    setshoweditAssign(false)
                  })
                  .catch(e => {
                    console.log(e);
                  });
              }}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setshoweditAssign(false)
              }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              marginTop: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 15}}>Submissions</Text>
          </View>

          <ScrollView style={styles.Scrollstyle}>
            {Submission.map((item, key) => {
              return (
                <Dropdownelement
                  key={key}
                  name={item.student_name}
                  emailid={item.student_email}
                  date={item.submission_date}
                  time = {item.submission_time}
                />
              );
            })}
          </ScrollView>
        </View>
      </Modal>
      
      <ScrollView style={{marginTop:20}}>
        
        {DATA.map((item, index) => {
          return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                  //console.log(index);
                  admin != state.token
                    ? navigation.navigate('ExperimentDetail')
                    : (
                      //setshoweditAssign(true)
                      //console.log(item.id)
                      setTemp(index),
                      edit_assign(item.id,item, index)
                      );
                }}>
                <Item item={item} admin={admin} token={state.token} />
              </TouchableOpacity>
          );
        })}
      </ScrollView>
      
      {admin == state.token ? (
        <TouchableOpacity style={styles.addBtn} onPress={() => setAssign(true)}>
          <Image source={add} />
        </TouchableOpacity>
      ) : null}
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
  PopupContainer: {
    width: '90%',
    marginLeft: '5%',
    height: 540,
    zIndex: 11,
    position: 'absolute',
    top: 148,
    backgroundColor: '#3C3C3C',
    alignItems: 'center',
  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
    marginRight: 18,
  },

  Scrollstyle: {
    height: 100,
    width: '100%',
    marginTop: 10,

    marginBottom: 10,
  },
  ScrollElement: {fontSize: 14, color: '#fff', fontWeight: '700'},

  Textinput: {
    marginTop: 20,
    marginBottom: 20,
    color: '#9C9C9C',
    backgroundColor: '#272B2E',
    textAlign: 'center',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {color: '#fff', fontSize: 15, fontWeight: 'bold'},
  AddButton: {
    backgroundColor: '#F37A27',
    height: 31,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButton: {
    backgroundColor: '#3C3C3C',
    borderColor: '#F37A27',
    borderWidth: 2,
    height: 31,
    width: 80,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  crossimage: {position: 'absolute', right: 10, top: 10},

  pickercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },
});
