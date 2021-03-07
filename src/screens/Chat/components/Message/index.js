import React, {useRef, useEffect} from 'react'
import {Text, Animated} from 'react-native';

import {isEmoji} from '../../../../utils/chat';

import styles from './styles'

export default function Message({displayName, text, sentMessage, timeStamp}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const formatTime = (s) => {
    const date = new Date(s);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return(
      <Animated.View style={[styles.message, sentMessage && styles.sentMessage, {opacity: fadeAnim}]}>
        <Text style={[styles.displayName, sentMessage && styles.sentText]}>{displayName}</Text>
        <Text style={[styles.text, sentMessage && styles.sentText, isEmoji(text) && styles.emoji]}>{text}</Text>
        <Text style={[styles.time, sentMessage && styles.sentText]}>{formatTime(timeStamp)}</Text>
      </Animated.View>
  )
}
