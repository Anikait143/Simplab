import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Context as AuthContext} from './src/context/AuthContext';
import TourMain from './src/screens/Tour/TourMain';
import Home from './src/screens/Home/Home';


const Stack = createStackNavigator();

function App() {
  const {state, restoreToken} = React.useContext(AuthContext);

  React.useEffect(() => {
    console.log('use Effect');
    restoreToken();
  },[]);

  return (
    <NavigationContainer>
      {console.log('Render')}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.token === null ? (
          <>
            <Stack.Screen name="Auth" component={TourMain} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} />
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
