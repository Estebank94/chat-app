import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  message: {
    padding: 16,
    backgroundColor: '#EEE',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    marginBottom: 8,
    maxWidth: '75%',
    alignItems: 'baseline',
    alignSelf: 'flex-start'
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0241FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16
  },
  time: {
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  sentText: {
    color: 'white'
  },
  emoji: {
    fontSize: 48
  }
});
