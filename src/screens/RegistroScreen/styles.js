import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003153',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  labelPrincipal: {
    fontSize: 24,
    color: '#FFF',
    paddingBottom: 80,
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
  buttonCadastro: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#4169E1',
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center'
  },
  textButtonCadastro: {
    color: '#fff',
    fontSize: 20
  },
  termos: {
    fontSize: 15,
    marginTop: 25,
    paddingHorizontal: 40,
    color: '#B0C4DE',
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