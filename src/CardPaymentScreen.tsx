import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CardPaymentScreen({ setPage }: { setPage: (page: string) => void }) {
  // Карта деректерінің күйі (State)
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage('home')}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Способы оплаты</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* ЖАНДАНҒАН ВИЗУАЛДЫ КАРТА */}
      <View style={styles.creditCard}>
        <View style={styles.cardTopRow}>
          <Ionicons name="card" size={40} color="#FFE600" />
          <Text style={styles.cardType}>BANK CARD</Text>
        </View>
        
        {/* Карта нөмірі (бос болса, шаблон тұрады) */}
        <Text style={styles.cardNumber}>
          {cardNumber ? cardNumber.replace(/(\d{4})/g, '$1 ').trim() : '•••• •••• •••• ••••'}
        </Text>
        
        <View style={styles.cardRow}>
          <View>
            <Text style={styles.cardLabel}>EXPIRY DATE</Text>
            <Text style={styles.cardValue}>{cardExpiry ? cardExpiry : 'ММ/ГГ'}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.cardLabel}>CVV</Text>
            <Text style={styles.cardValue}>{cardCvv ? '•••' : '— — —'}</Text>
          </View>
        </View>
      </View>

      {/* ЕНГІЗУ ӨРІСТЕРІ (INPUTS) */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Номер карты" 
          placeholderTextColor="#555" 
          keyboardType="numeric"
          maxLength={16}
          onChangeText={(text) => setCardNumber(text)}
          value={cardNumber}
        />
        <View style={styles.row}>
          <TextInput 
            style={[styles.input, { flex: 1, marginRight: 10 }]} 
            placeholder="ММ/ГГ" 
            placeholderTextColor="#555" 
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(text) => setCardExpiry(text)}
            value={cardExpiry}
          />
          <TextInput 
            style={[styles.input, { flex: 1 }]} 
            placeholder="CVV" 
            placeholderTextColor="#555" 
            keyboardType="numeric" 
            maxLength={3}
            secureTextEntry 
            onChangeText={(text) => setCardCvv(text)}
            value={cardCvv}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => {
        alert('Карта успешно привязана!');
        setPage('home');
      }}>
        <Text style={styles.saveButtonText}>Привязать карту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181818', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, marginBottom: 30 },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  creditCard: { backgroundColor: '#2D2D2D', padding: 24, borderRadius: 20, marginBottom: 30, borderWidth: 1, borderColor: '#333' },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardType: { color: '#FFE600', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
  cardNumber: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginVertical: 25, letterSpacing: 2 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between' },
  cardLabel: { color: '#777', fontSize: 10, marginBottom: 4 },
  cardValue: { color: '#FFF', fontSize: 15, fontWeight: '600' },
  inputContainer: { marginBottom: 30 },
  input: { backgroundColor: '#222', color: '#FFF', padding: 16, borderRadius: 14, marginBottom: 14, fontSize: 16, borderWidth: 1, borderColor: '#2D2D2D' },
  row: { flexDirection: 'row' },
  saveButton: { backgroundColor: '#FFE600', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  saveButtonText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});