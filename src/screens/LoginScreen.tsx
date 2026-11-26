import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = {
  navigation: (screen: string) => void;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Login сәтті болғанда Hello бетіне өту
    navigation('hello');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity onPress={() => navigation('welcome')}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Welcome</Text>

        <Text style={styles.description}>
          Login into your account
        </Text>

        <View style={styles.form}>
          <CustomInput
            title="Email or Mobile Number"
            placeholder="example@example.com"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            title="Password"
            placeholder="Enter password"
            secure
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => navigation('password')}
          >
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Log In"
            onPress={login}
          />

          <Text style={styles.bottom}>
            Don't have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation('signup')}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingTop: 55,
  },
  back: {
    fontSize: 35,
    color: '#3561F6',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3561F6',
    marginTop: 35,
  },
  description: {
    color: '#888888',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 35,
  },
  form: {
    width: '100%',
  },
  forgot: {
    color: '#3561F6',
    textAlign: 'right',
    fontSize: 11,
    marginBottom: 15,
  },
  bottom: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 12,
    color: '#777777',
  },
  link: {
    color: '#3561F6',
    fontWeight: 'bold',
  },
});