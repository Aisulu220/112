import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles';

export default function NotificationScreen({ setPage }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={[styles.title, { marginBottom: 30 }]}>Уведомления 🔔</Text>
        
        <View style={styles.rowItem}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowLabel}>Успешная регистрация</Text>
            <Text style={[styles.rowValue, { fontSize: 13, marginTop: 4 }]}>Добро пожаловать в приложение!</Text>
          </View>
          <View style={styles.badge}><Text style={styles.badgeText}>Новое</Text></View>
        </View>

        <TouchableOpacity style={[styles.loginButton, { marginTop: 40 }]} onPress={() => setPage('home')}>
          <Text style={styles.loginButtonText}>Назад на главную</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}