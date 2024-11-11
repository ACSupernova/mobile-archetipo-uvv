import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface TelaRegistroProps {
  navigation: NavigationProp<any>;
}

const TelaRegistro: React.FC<TelaRegistroProps> = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/Poke_logo.png')} 
        style={{ width: screenWidth * 0.6, height: 100 }} 
        resizeMode="contain" 
      />

      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.buttonRegistrar} onPress={() => alert('Registrar não implementado')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.buttonText}>Voltar</Text>
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
    backgroundColor: '#FFFFFF', // Cor de fundo branca
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
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
  buttonRegistrar: {
    backgroundColor: '#FB6071', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,  
    width: '80%',
    alignItems: 'center',
  },
  buttonVoltar: {
    backgroundColor: '#AF434F', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,  
    width: '80%',  
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaRegistro;
