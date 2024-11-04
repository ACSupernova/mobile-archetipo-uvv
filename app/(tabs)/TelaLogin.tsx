import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface TelaLoginProps {
  navigation: NavigationProp<any>;
}

const TelaLogin: React.FC<TelaLoginProps> = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/Poke_logo_texto.png')} 
        style={[styles.logo, { width: screenWidth * 0.6 }]} 
        resizeMode="contain" 
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('TelaHome')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaRegistro')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaSenha')}>
        <Text style={styles.buttonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', 
  },
  logo: {
    height: 150,        
    marginBottom: 20,   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#AF434F',  
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 15,  
    width: '80%',         
    alignItems: 'center',
  },
  buttonEntrar: {
    backgroundColor: '#FB6071',  
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 15,  
    width: '80%',         
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaLogin;
