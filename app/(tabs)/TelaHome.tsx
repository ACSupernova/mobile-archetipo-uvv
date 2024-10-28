import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

interface TelaHomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const TelaHome: React.FC<TelaHomeProps> = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/Poke_logo.png')}
        style={{ width: screenWidth * 0.6, height: 100 }} 
        resizeMode="contain" 
      />

      <Text style={styles.title}>Bem-vindo ao Centro Pokémon!</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Agendar consulta não implementado')}>
        <Text style={styles.buttonText}>Agendar sua Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Ver consulta não implementado')}>
        <Text style={styles.buttonText}>Ver suas Consultas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Cancelar consulta não implementado')}>
        <Text style={styles.buttonText}>Cancelar sua Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.buttonText}>Sair</Text>
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
  button: {
    backgroundColor: '#FB6071', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,  
    width: '80%',         
    alignItems: 'center',
  },
  buttonSair: {
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

export default TelaHome;
