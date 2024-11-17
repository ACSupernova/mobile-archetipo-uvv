import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'; // Importe o useRouter

const TelaHome: React.FC = () => {
  const router = useRouter(); // Instancia o useRouter
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/uvv_logo.png')}
        style={{ width: screenWidth * 0.6, height: 100 }}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo!</Text>

      <TouchableOpacity style={styles.button} onPress={() => {
        router.push('/grupo' as any);
      }}>
        <Text style={styles.buttonText}>Ver Grupos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSair}
        onPress={() => {
          router.push('/');
        }}
      >
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
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f1b214',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonSair: {
    backgroundColor: '#2d2563',
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
