import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles';

export default function SettingsScreen({ setPage }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={[styles.title, { marginBottom: 30 }]}>Настройки ⚙️</Text>
        
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Язык приложения</Text><Text style={styles.rowValue}>Русский</Text></View>
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Тёмная тема</Text><Text style={styles.rowValue}>Выкл</Text></View>
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Уведомления</Text><Text style={styles.rowValue}>Включены</Text></View>

        <TouchableOpacity style={[styles.loginButton, { marginTop: 40 }]} onPress={() => setPage('home')}>
          <Text style={styles.loginButtonText}>Назад на главную</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}