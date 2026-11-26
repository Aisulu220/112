import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// AUTH
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import HelloScreen from './src/screens/HelloScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PasswordScreen from './src/screens/PasswordScreen';

// MAIN
import HomeScreen from './src/screens/HomeScreen';
import DoctorsScreen from './src/screens/DoctorsScreen';
import DoctorInfoScreen from './src/screens/DoctorInfoScreen';
import FavoriteDoctorsScreen from './src/screens/FavoriteDoctorsScreen';
import FavoriteServicesScreen from './src/screens/FavoriteServicesScreen';
import MaleDoctorsScreen from './src/screens/MaleDoctorsScreen';
import FemaleDoctorsScreen from './src/screens/FemaleDoctorsScreen';

// APPOINTMENTS
import ScheduleScreen from './src/screens/ScheduleScreen';
import AllAppointmentScreen from './src/screens/AllAppointmentScreen';
import UpcomingAppointmentScreen from './src/screens/UpcomingAppointmentScreen';
import CancelledAppointmentScreen from './src/screens/CancelledAppointmentScreen';
import CancelAppointmentScreen from './src/screens/CancelAppointmentScreen';

// OTHER
import ChatScreen from './src/screens/ChatScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import NotificationSettingsScreen from './src/screens/NotificationSettingsScreen';
import PasswordManagerScreen from './src/screens/PasswordManagerScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import HelpCenterScreen from './src/screens/HelpCenterScreen';
import MedicationTrackerScreen from './src/screens/MedicationTrackerScreen';
import SkinDiaryScreen from './src/screens/SkinDiaryScreen';
import RatingScreen from './src/screens/RatingScreen';
import ReviewScreen from './src/screens/ReviewScreen';

const Stack = createNativeStackNavigator();

const routeMap: Record<string, string> = {
  splash: 'Splash',
  welcome: 'Welcome',
  login: 'Login',
  hello: 'Hello',
  signup: 'SignUp',
  password: 'Password',
  home: 'Home',
  doctors: 'Doctors',
  doctorinfo: 'DoctorInfo',
  favoritedoctors: 'FavoriteDoctors',
  favoriteservices: 'FavoriteServices',
  maledoctors: 'MaleDoctors',
  femaledoctors: 'FemaleDoctors',
  calendar: 'Calendar',
  chat: 'Chat',
  profile: 'Profile',
  settings: 'Settings',
  editprofile: 'EditProfile',
  allappointments: 'AllAppointments',
  upcomingappointment: 'UpcomingAppointment',
  cancelledappointments: 'CancelledAppointments',
  cancelappointment: 'CancelAppointment',
  notificationsettings: 'NotificationSettings',
  passwordmanager: 'PasswordManager',
  privacypolicy: 'PrivacyPolicy',
  helpcenter: 'HelpCenter',
  medicationtracker: 'MedicationTracker',
  skindiary: 'SkinDiary',
  rating: 'Rating',
  review: 'Review',
};

function getNavigation(navigation: any) {
  const goTo = (screen: string) => {
    const route = routeMap[screen.toLowerCase()] || screen;
    navigation.navigate(route);
  };

  return Object.assign(goTo, {
    navigate: goTo,
    goBack: () => navigation.goBack(),
  });
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Splash">
          {({ navigation }) => (
            <SplashScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Welcome">
          {({ navigation }) => (
            <WelcomeScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {({ navigation }) => (
            <LoginScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Hello">
          {({ navigation }) => (
            <HelloScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="SignUp">
          {({ navigation }) => (
            <SignUpScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Password">
          {({ navigation }) => (
            <PasswordScreen navigation={getNavigation(navigation)} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Doctors" component={DoctorsScreen} />
        <Stack.Screen name="DoctorInfo" component={DoctorInfoScreen} />
        <Stack.Screen name="FavoriteDoctors" component={FavoriteDoctorsScreen} />
        <Stack.Screen name="FavoriteServices" component={FavoriteServicesScreen} />
        <Stack.Screen name="MaleDoctors" component={MaleDoctorsScreen} />
        <Stack.Screen name="FemaleDoctors" component={FemaleDoctorsScreen} />

        <Stack.Screen name="Calendar" component={ScheduleScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />

        <Stack.Screen name="Profile" component={MyProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />

        <Stack.Screen name="AllAppointments" component={AllAppointmentScreen} />
        <Stack.Screen name="UpcomingAppointment" component={UpcomingAppointmentScreen} />
        <Stack.Screen name="CancelledAppointments" component={CancelledAppointmentScreen} />
        <Stack.Screen name="CancelAppointment" component={CancelAppointmentScreen} />

        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
        <Stack.Screen name="PasswordManager" component={PasswordManagerScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />

        <Stack.Screen name="MedicationTracker" component={MedicationTrackerScreen} />
        <Stack.Screen name="SkinDiary" component={SkinDiaryScreen} />

        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}