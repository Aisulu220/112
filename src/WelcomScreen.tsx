import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onGoToLogin: () => void;
  onGoToSignUp: () => void;
}

export default function WelcomeScreen({ onGoToLogin, onGoToSignUp }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.logo}>
          <View style={styles.iconCircle}>
            <Ionicons name="leaf-outline" size={65} color="#269B78" />
          </View>

          <Text style={styles.title}>Skin First</Text>
          <Text style={styles.subtitle}>
            Your Skin, Our Priority
          </Text>
          <Text style={styles.description}>
            Дерматология орталығы
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={onGoToLogin}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={onGoToSignUp}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCF9',
  },
  content: {
    flex: 1,
    padding: 25,
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E4F5EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#269B78',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#527568',
    marginTop: 8,
  },
  description: {
    fontSize: 13,
    color: '#888',
    marginTop: 8,
  },
  buttons: {
    width: '100%',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#269B78',
    padding: 17,
    borderRadius: 15,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    borderWidth: 1.5,
    borderColor: '#269B78',
    padding: 17,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 14,
  },
  signupText: {
    color: '#269B78',
    fontSize: 16,
    fontWeight: 'bold',
  },
});