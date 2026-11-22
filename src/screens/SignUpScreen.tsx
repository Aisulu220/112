import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = {
  navigation: (screen: string) => void;
};

export default function SignUpScreen({ navigation }: Props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    navigation('password');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation('welcome')}>
        <Text style={styles.back}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>New Account</Text>

      <View style={styles.form}>

        <CustomInput
          title="Full name"
          placeholder="Your full name"
          value={name}
          onChangeText={setName}
        />

        <CustomInput
          title="Email"
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          title="Mobile Number"
          placeholder="+7 700 000 00 00"
          value={phone}
          onChangeText={setPhone}
        />

        <CustomInput
          title="Password"
          placeholder="Enter password"
          secure
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton
          title="Sign Up"
          onPress={signup}
        />

        <Text style={styles.bottom}>
          Already have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation('login')}
          >
            Log In
          </Text>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingTop: 55,
  },
  back: {
    color: '#3561F6',
    fontSize: 35,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    color: '#3561F6',
  },
  form: {
    width: '100%',
  },
  bottom: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 12,
    color: '#777777',
  },
  link: {
    color: '#3561F6',
    fontWeight: 'bold',
  },
});