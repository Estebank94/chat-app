import React from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import Constants from 'expo-constants';
import {TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';

import styles from './style';


export default function InputBar({changeText, value, user}) {

  const headerHeight = useHeaderHeight();
  const OFFSET = headerHeight + Constants.statusBarHeight - 36;

  return(
      <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={OFFSET}
          style={styles.container}
      >
        <TextInput
            style={styles.input}
            onChangeText={text => changeText(text)}
            value={value}
            multiline
        />
        <TouchableOpacity
            disabled={!value}
            onPress={() => firebase.database().ref('messages').push({
              text: value,
              timeStamp: Date.now(),
              uid: user.uid,
              displayName: user.displayName,
            }).then(changeText(''))}
        >
          <Ionicons name="ios-send" size={28} color="#0241FF" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
  )
}
