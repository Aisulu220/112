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

export default function PasswordScreen({ navigation }: Props) {

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const createPassword = () => {
    if (!password || !confirm) {
      Alert.alert('Error', 'Fill in all fields');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    Alert.alert('Success', 'Password created successfully');
    navigation('login');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation('signup')}>
        <Text style={styles.back}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Set Password</Text>

      <Text style={styles.description}>
        Please enter and confirm your new password.
      </Text>

      <CustomInput
        title="Password"
        placeholder="Enter password"
        secure
        value={password}
        onChangeText={setPassword}
      />

      <CustomInput
        title="Confirm Password"
        placeholder="Confirm password"
        secure
        value={confirm}
        onChangeText={setConfirm}
      />

      <CustomButton
        title="Create New Password"
        onPress={createPassword}
      />

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
    fontSize: 35,
    color: '#3561F6',
  },
  title: {
    color: '#3561F6',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15,
  },
  description: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 30,
  },
});