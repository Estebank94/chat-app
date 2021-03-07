import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '70%',
    height: '50%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 22,
    color: '#8a8a8a',
    marginHorizontal: 30,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0241FF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 12
  }
});
