
import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ProfileMenuItem from '../components/ProfileMenuItem';
import BottomNavigation from '../components/BottomNavigation';

import { profileMenu, profileData } from '../data/profileData';
import { profileStyles as styles } from '../styles/profileStyles';

export default function MyProfileScreen({ navigation }: any) {
  const [logoutVisible, setLogoutVisible] = useState(false);

  const openScreen = (screen: string) => {
    if (screen === 'FavoriteDoctors') {
      navigation.navigate('FavoriteDoctors');
    } else {
      navigation.navigate(screen);
    }
  };

  const handleLogout = () => {
    setLogoutVisible(false);

    // Бұл жерде өзіңнің Login экраныңа ауысасың.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={{
          paddingHorizontal: 17,
          paddingTop: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={25} color="#365FF5" />
            </TouchableOpacity>

            <Text style={{
              color: '#365FF5',
              fontSize: 17,
              fontWeight: '700',
            }}>
              My Profile
            </Text>

            <View style={{ width: 25 }} />
          </View>
        </View>

        <View style={{ marginTop: 25 }}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profileData.avatar}
            </Text>
          </View>

          <Text style={styles.name}>
            {profileData.fullName}
          </Text>
        </View>

        <View style={{ marginTop: 25 }}>
          {profileMenu.map((item) => (
            <ProfileMenuItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              onPress={() => openScreen(item.screen)}
            />
          ))}

          <TouchableOpacity
            style={{
              height: 48,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 17,
              gap: 12,
            }}
            onPress={() => setLogoutVisible(true)}
          >
            <View style={{
              width: 29,
              height: 29,
              borderRadius: 16,
              backgroundColor: '#E1E8FF',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Ionicons name="log-out-outline" size={20} color="#6488FF" />
            </View>

            <Text style={{ fontSize: 13, color: '#333D59' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavigation
        activeTab="Profile"
        onChange={(tab) => navigation.navigate(tab)}
      />

      {/* LOGOUT MODAL */}

      {logoutVisible && (
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(25,40,90,0.35)',
          justifyContent: 'flex-end',
        }}>
          <View style={{
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 25,
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#365FF5',
            }}>
              Logout
            </Text>

            <Text style={{
              fontSize: 13,
              color: '#68728C',
              marginTop: 12,
            }}>
              Are you sure you want to log out?
            </Text>

            <View style={{
              flexDirection: 'row',
              gap: 10,
              width: '100%',
              marginTop: 25,
            }}>
              <TouchableOpacity
                onPress={() => setLogoutVisible(false)}
                style={{
                  flex: 1,
                  padding: 13,
                  borderRadius: 20,
                  backgroundColor: '#DCE4FF',
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#365FF5' }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  flex: 1,
                  padding: 13,
                  borderRadius: 20,
                  backgroundColor: '#365FF5',
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>
                  Yes, Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
