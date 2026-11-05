import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles';

export default function ProfileScreen({ name, phone, city, setPage }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={[styles.title, { marginBottom: 30 }]}>Мой профиль 👤</Text>
        
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Имя:</Text><Text style={styles.rowValue}>{name || 'Пользователь'}</Text></View>
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Телефон:</Text><Text style={styles.rowValue}>{phone || 'Не указан'}</Text></View>
        <View style={styles.rowItem}><Text style={styles.rowLabel}>Город:</Text><Text style={styles.rowValue}>{city}</Text></View>

        <TouchableOpacity style={[styles.loginButton, { marginTop: 40 }]} onPress={() => setPage('home')}>
          <Text style={styles.loginButtonText}>Назад на главную</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}