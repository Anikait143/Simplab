import createDataContext from './createDataContext';
import axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
        username: action.payload.username,
        profile_image: action.payload.profile_image,
        organization: action.payload.organization,
        contact: action.payload.contact,
        teams: action.payload.teams,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({Username,email, password,navigation}) => {
    //console.log('Signup');
    //console.log(email, password);
    axios.post('https://simplab-api.herokuapp.com/api/users/', {
      username: Username,
      password: password,
      email: email
    })
    .then(function (response) {
      console.log(response.data);
      alert("User registered successfully.");
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
  };
};

const signin = dispatch => {
  return ({username, password}) => {
    // Do some API Request here
    console.log('Signin');

    axios
      .get(`https://simplab-api.herokuapp.com/api/auth/${username}/${password}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: 'signin',
          payload: {
            token: res.data.user,
            username: res.data.username,
            email: res.data.email,
            profile_image: res.data.profile_image,
            organization: res.data.organization,
            contact: res.data.contact,
            teams: res.data.teams,
          },
        });
        return 1;
      })
      .catch(e => {
        console.log(e);
        alert('Invalid username or password occurred');
        return 0;
      });
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {token: null, email: ''},
);
