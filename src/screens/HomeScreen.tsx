import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import DoctorCard from '../components/DoctorCard';
import DateSelector from '../components/DateSelector';
import BottomNavigation from '../components/BottomNavigation';
import AppointmentCard from '../components/AppointmentCard';

import { doctors } from '../data/doctors';
import { homeStyles as styles } from '../styles/homeStyles';

export default function HomeScreen({ navigation }: any) {

  const [selectedDate, setSelectedDate] = useState('11');
  const [favorites, setFavorites] = useState<number[]>([1]);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Home');

  // FAVORITE FUNCTION
  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // SEARCH FUNCTION
  const filteredDoctors = doctors.filter((doctor) =>
    (
      doctor.name + ' ' + doctor.specialty
    ).toLowerCase().includes(search.toLowerCase())
  );

  // NAVIGATION FUNCTION
  const handleNavigation = (tab: string) => {
    setActiveTab(tab);

    if (tab === 'Home') {
      return;
    }

    if (tab === 'Doctors') {
      navigation?.navigate?.('Doctors');
    } else if (tab === 'Favorite') {
      navigation?.navigate?.('FavoriteDoctors');
    } else if (tab === 'Profile') {
      navigation?.navigate?.('Profile');
    } else if (tab === 'Calendar') {
      navigation?.navigate?.('Calendar');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>

        {/* HEADER */}

        <View style={styles.header}>

          <View style={styles.profile}>

            <View style={styles.userAvatar}>
              <Ionicons
                name="person"
                size={25}
                color="#FFFFFF"
              />
            </View>

            <View>
              <Text style={styles.welcome}>
                Hi, WelcomeBack
              </Text>

              <Text style={styles.userName}>
                John Doe
              </Text>
            </View>

          </View>

          <View style={styles.headerIcons}>

            <TouchableOpacity style={styles.roundButton}>
              <Ionicons
                name="notifications-outline"
                size={21}
                color="#365FF5"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roundButton}
              onPress={() => navigation?.navigate?.('Settings')}
            >
              <Ionicons
                name="settings-outline"
                size={21}
                color="#34446D"
              />
            </TouchableOpacity>

          </View>

        </View>

        {/* SEARCH SECTION */}

        <View style={styles.searchSection}>

          <TouchableOpacity
            style={styles.shortcut}
            onPress={() => navigation?.navigate?.('Doctors')}
          >
            <Ionicons
              name="medkit-outline"
              size={21}
              color="#7593FF"
            />

            <Text style={styles.shortcutText}>
              Doctors
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shortcut}
            onPress={() =>
              navigation?.navigate?.('FavoriteDoctors')
            }
          >
            <Ionicons
              name="heart-outline"
              size={21}
              color="#7593FF"
            />

            <Text style={styles.shortcutText}>
              Favorite
            </Text>
          </TouchableOpacity>

          <View style={styles.searchBox}>

            <Ionicons
              name="options-outline"
              size={19}
              color="#53658C"
            />

            <TextInput
              placeholder="Search doctors..."
              placeholderTextColor="#8996BA"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />

            {search.length > 0 ? (
              <TouchableOpacity
                onPress={() => setSearch('')}
              >
                <Ionicons
                  name="close-circle"
                  size={20}
                  color="#7593FF"
                />
              </TouchableOpacity>
            ) : (
              <Ionicons
                name="search-outline"
                size={21}
                color="#7593FF"
              />
            )}

          </View>

        </View>

        {/* MAIN CONTENT */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* SCHEDULE */}

          <View style={styles.dateSection}>

            <Text style={styles.sectionTitle}>
              Your Schedule
            </Text>

            <DateSelector
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
            />

          </View>

          {/* APPOINTMENT */}

          <View style={styles.appointmentSection}>

            <View style={styles.appointmentHeader}>

              <Text style={styles.timeLabel}>
                9 AM
              </Text>

              <Text style={styles.todayLabel}>
                {selectedDate} - Today
              </Text>

            </View>

            <View style={styles.timeLine}>

              <Text style={styles.time}>
                10 AM
              </Text>

              <AppointmentCard />

            </View>

            <View style={styles.timeRow}>

              <Text style={styles.time}>
                11 AM
              </Text>

              <View style={styles.dottedLine} />

            </View>

            <View style={styles.timeRow}>

              <Text style={styles.time}>
                12 AM
              </Text>

              <View style={styles.dottedLine} />

            </View>

          </View>

          {/* DOCTORS SECTION */}

          <View style={styles.doctorsSection}>

            <View style={styles.doctorSectionHeader}>

              <Text style={styles.sectionTitle}>
                Available Doctors
              </Text>

              <TouchableOpacity
                onPress={() => navigation?.navigate?.('Doctors')}
              >
                <Text style={styles.seeAll}>
                  See all
                </Text>
              </TouchableOpacity>

            </View>

            {/* DOCTOR LIST */}

            {filteredDoctors.map((doctor) => (

              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                isFavorite={favorites.includes(doctor.id)}
                onFavorite={() =>
                  toggleFavorite(doctor.id)
                }
              />

            ))}

            {/* EMPTY SEARCH */}

            {filteredDoctors.length === 0 && (

              <View style={localStyles.emptyContainer}>

                <Ionicons
                  name="search-outline"
                  size={40}
                  color="#AAB8E8"
                />

                <Text style={localStyles.emptyTitle}>
                  No doctors found
                </Text>

                <Text style={localStyles.emptyDescription}>
                  Try searching with another name
                </Text>

              </View>

            )}

          </View>

        </ScrollView>

        {/* BOTTOM NAVIGATION */}

        <BottomNavigation
          activeTab={activeTab}
          onChange={handleNavigation}
        />

      </View>

    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#365FF5',
    marginTop: 10,
  },

  emptyDescription: {
    fontSize: 12,
    color: '#8996BA',
    marginTop: 5,
  },

});