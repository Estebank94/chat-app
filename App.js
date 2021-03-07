import React, {useState, useEffect} from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';

import Chat from './src/screens/Chat';
import Welcome from './src/screens/Welcome';

import {firebaseConfig} from './src/config/firebase';

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
      {
        clientId: '37200615909-69v5p6tu3q7ajdjn47q2vechhe0mphb9.apps.googleusercontent.com',
      },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    })
  })

  if(loading) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
    )
  }

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            user ? <Stack.Screen name="Chat" component={Chat} /> : <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}
