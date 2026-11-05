import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // Экрандарды алмаштырып туруучу штат (state)
  // 'splash' -> 'welcome' -> 'login' -> 'signup' -> 'forgot' -> 'home'
  const [currentScreen, setCurrentScreen] = useState('splash');

  // 1. Splash Screen
  if (currentScreen === 'splash') {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <View style={styles.centerContent}>
          <Ionicons name="medical" size={70} color="#fff" />
          <Text style={styles.splashTitle}>Skin Firsts</Text>
          <Text style={styles.splashSubtitle}>Dermatology Center</Text>
          
          <TouchableOpacity 
            style={styles.splashNextBtn}
            onPress={() => setCurrentScreen('welcome')}
          >
            <Text style={styles.splashNextBtnText}>Баштоо</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // 2. Welcome Screen
  if (currentScreen === 'welcome') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContent}>
          <View style={styles.centerContent}>
            <Ionicons name="medical" size={70} color="#1E6FFF" />
            <Text style={styles.welcomeTitle}>Skin Firsts</Text>
            <Text style={styles.welcomeSubtitle}>Dermatology Center</Text>
          </View>

          <View style={styles.bottomButtons}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => setCurrentScreen('login')}
            >
              <Text style={styles.primaryButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => setCurrentScreen('signup')}
            >
              <Text style={styles.secondaryButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // 3. Login Screen (Логин жана пароль менен кирүү)
  if (currentScreen === 'login') {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollPad}>
          <TouchableOpacity onPress={() => setCurrentScreen('welcome')} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>Log In</Text>
          <Text style={styles.screenDesc}>Welcome back! Please enter your details.</Text>

          <Text style={styles.label}>Email or Mobile Number</Text>
          <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#999" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="••••••••••••" secureTextEntry placeholderTextColor="#999" />

          <TouchableOpacity onPress={() => setCurrentScreen('forgot')} style={{alignSelf: 'flex-end', marginBottom: 20}}>
            <Text style={{color: '#1E6FFF', fontWeight: '600'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => alert('Сиз ийгиликтүү кирдиңиз!')}
          >
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // 4. Sign Up Screen (Катталуу)
  if (currentScreen === 'signup') {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollPad}>
          <TouchableOpacity onPress={() => setCurrentScreen('welcome')} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>New Account</Text>

          <Text style={styles.label}>Full name</Text>
          <TextInput style={styles.input} placeholder="Аты-жөнүңүз" placeholderTextColor="#999" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="••••••••••••" secureTextEntry placeholderTextColor="#999" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#999" />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder="+7..." placeholderTextColor="#999" />

          <TouchableOpacity 
            style={[styles.primaryButton, {marginTop: 20}]}
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // 5. Forgot Password / Set Password Screen
  if (currentScreen === 'forgot') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollPad}>
          <TouchableOpacity onPress={() => setCurrentScreen('login')} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.screenTitle}>Set Password</Text>
          <Text style={styles.screenDesc}>Create a strong password to protect your account.</Text>

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="••••••••••••" secureTextEntry placeholderTextColor="#999" />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="••••••••••••" secureTextEntry placeholderTextColor="#999" />

          <TouchableOpacity 
            style={[styles.primaryButton, {marginTop: 20}]}
            onPress={() => setCurrentScreen('login')}
          >
            <Text style={styles.primaryButtonText}>Create New Password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  splashContainer: { flex: 1, backgroundColor: '#1E6FFF' },
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  splashTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  splashSubtitle: { fontSize: 12, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase' },
  splashNextBtn: { marginTop: 40, backgroundColor: '#fff', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 20 },
  splashNextBtnText: { color: '#1E6FFF', fontWeight: 'bold', fontSize: 16 },
  
  welcomeContent: { flex: 1, padding: 24, justifyContent: 'space-between' },
  welcomeTitle: { fontSize: 28, fontWeight: 'bold', color: '#1E6FFF', marginTop: 10 },
  welcomeSubtitle: { fontSize: 12, color: '#888', letterSpacing: 1.5 },
  bottomButtons: { width: '100%', marginBottom: 30 },

  primaryButton: { backgroundColor: '#1E6FFF', padding: 16, borderRadius: 25, alignItems: 'center', width: '100%' },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  
  secondaryButton: { borderWidth: 1, borderColor: '#1E6FFF', padding: 16, borderRadius: 25, alignItems: 'center', width: '100%', marginTop: 12 },
  secondaryButtonText: { color: '#1E6FFF', fontSize: 16, fontWeight: 'bold' },

  scrollPad: { padding: 24 },
  backBtn: { marginBottom: 16 },
  screenTitle: { fontSize: 26, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  screenDesc: { fontSize: 14, color: '#666', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 14, fontSize: 14, marginBottom: 16, backgroundColor: '#fafafa' },
});