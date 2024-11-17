import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Importe useRouter para navegação
import { supabase } from '../../Supabase';

const TelaLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const router = useRouter(); // use useRouter para navegação

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Erro de autenticação', error.message);
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      router.push('/home'); // Use push para navegar para outra rota
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/uvv_logo.png')}
        style={[styles.logo, { width: screenWidth * 0.6 }]}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Ver consulta não implementado')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Ver consulta não implementado')}>
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
    backgroundColor: '#2d2563',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonEntrar: {
    backgroundColor: '#f1b214',
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
