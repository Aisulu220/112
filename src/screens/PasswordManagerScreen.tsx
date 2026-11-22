
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ProfileHeader from '../components/ProfileHeader';
import { profileStyles as styles } from '../styles/profileStyles';

export default function PasswordManagerScreen({ navigation }: any) {
  const [current, setCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const changePassword = () => {
    if (!current || !password || !confirm) {
      Alert.alert('Error', 'Please complete all fields.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'New password must be at least 8 characters.');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert(
      'Success',
      'Password change request completed in demo mode.'
    );

    setCurrent('');
    setPassword('');
    setConfirm('');
  };

  const passwordField = (
    label: string,
    value: string,
    setter: (text: string) => void,
    visible: boolean,
    toggle: () => void
  ) => (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={{
        height: 43,
        backgroundColor: '#EDF1FF',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
      }}>
        <TextInput
          value={value}
          onChangeText={setter}
          secureTextEntry={!visible}
          style={{ flex: 1, color: '#34446D', fontSize: 13 }}
          placeholder="Enter password"
        />

        <TouchableOpacity onPress={toggle}>
          <Ionicons
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={19}
            color="#8292BE"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Password Manager"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {passwordField(
          'Current Password',
          current,
          setCurrent,
          showCurrent,
          () => setShowCurrent(!showCurrent)
        )}

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{ alignSelf: 'flex-end', marginTop: 7 }}
        >
          <Text style={{ color: '#365FF5', fontSize: 11 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {passwordField(
          'New Password',
          password,
          setPassword,
          showPassword,
          () => setShowPassword(!showPassword)
        )}

        {passwordField(
          'Confirm New Password',
          confirm,
          setConfirm,
          showConfirm,
          () => setShowConfirm(!showConfirm)
        )}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={changePassword}
        >
          <Text style={styles.primaryButtonText}>
            Change Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
