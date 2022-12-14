import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003153',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    
  },
  ect: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },
  max: {
    fontSize: 58,
    color: '#FFF',
    fontWeight: 'bold'
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#708090',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#FFF'
  },
  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#4169E1',
    marginTop: 30,
    borderRadius: 50,
    alignItems: 'center'
  },
  textButtonLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  registration: {
    fontSize: 17,
    marginTop: 25,
    paddingRight: 8,
    color: '#B0C4DE',
  },
  linkSubscribe: {
    fontSize: 17,
    marginTop: 25,
    color: '#FFF',
    fontWeight: 'bold'
  },
  warningAlert: {
    paddingLeft: 10,
    color: '#bdbdbd',
    fontSize: 16
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
