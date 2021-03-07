import React, {useEffect} from 'react';
import {SafeAreaView, Image, Text, TouchableOpacity, Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as firebase from "firebase";

import styles from './styles';
import friends from '../../assets/images/friends.png';

export default function Welcome() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
      {
        clientId: '37200615909-69v5p6tu3q7ajdjn47q2vechhe0mphb9.apps.googleusercontent.com',
      },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential).catch(() => Alert.alert('There was an error signing in'));
    }
  }, [response]);


  return(
      <SafeAreaView style={styles.container}>
        <Image source={friends} style={styles.image} />
        <Text style={styles.title}>ChatApp</Text>
        <Text style={styles.paragraph}>A new way to connect with your favorite people</Text>
        <TouchableOpacity
            disabled={!request}
            style={styles.button}
            onPress={() => {
              promptAsync();
            }}
        >
          <Ionicons name="logo-google" size={28} color="#FFF" />
          <Text style={styles.buttonText}>Sign In With Google</Text>
        </TouchableOpacity>
      </SafeAreaView>
  )
}
