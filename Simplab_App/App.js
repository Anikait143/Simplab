import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as AuthProvider} from './android/app/src/context/AuthContext';
import {Context as AuthContext} from './android/app/src/context/AuthContext';
import TourMain from './android/app/src/screens/Tour/TourMain';
import Home from './android/app/src/screens/Home/Home'

const Stack = createStackNavigator();

function App() {
  const {state} = React.useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token !== null ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={TourMain}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};