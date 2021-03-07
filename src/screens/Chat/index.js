import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'
import {Button, SafeAreaView, FlatList} from 'react-native';
import Message from './components/Message';
import InputBar from './components/InputBar';
import * as firebase from 'firebase';

import styles from './styles';

export default function Chat({navigation}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const user = firebase.auth().currentUser

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <Button
              title="Sign Out"
              onPress={() => firebase.auth().signOut()}
          />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    firebase.database().ref('messages').on('value', snapshot => {
      let messages = [];
      snapshot.forEach((snap) => {
        messages.push(snap.val());
      });
      setMessages(messages);
    })
  }, [])

  const renderItem = ({ item }) => (
      <Message
          text={item.text}
          displayName={item.displayName}
          sentMessage={item.uid === user.uid}
          timeStamp={item.timeStamp}
      />
  );

  const flatListRef = useRef();

  return(
      <SafeAreaView style={styles.container}>
        <FlatList
            containerStyle={styles.messagesContainerStyle}
            style={styles.messagesContainer}
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => (item.uid + item.timeStamp).toString()}
            ref={flatListRef}
            onContentSizeChange={() => flatListRef?.current?.scrollToEnd({animated: true})}
            onLayout={() => flatListRef?.current?.scrollToEnd({animated: true})}
        />
        <InputBar changeText={setInput} value={input} user={user}/>
      </SafeAreaView>
  )
}
