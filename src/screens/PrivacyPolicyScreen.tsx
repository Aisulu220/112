
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import { profileStyles as styles } from '../styles/profileStyles';

export default function PrivacyPolicyScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        title="Privacy Policy"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        <Text style={styles.sectionTitle}>
          Privacy Policy
        </Text>

        <Text style={styles.description}>
          Welcome to our Medical Health Mobile Application.

          {'\n\n'}1. Information Collection

          {'\n'}Our application may collect basic account information,
          including your name, email address and phone number.
          This information is used to provide application services.

          {'\n\n'}2. Personal Information

          {'\n'}Your personal information should be handled securely.
          Users should only provide information required for the
          application features.

          {'\n\n'}3. Medical Information

          {'\n'}Medical information should be treated as confidential.
          Do not use this demo application as a replacement for
          professional medical advice.

          {'\n\n'}4. Data Security

          {'\n'}We aim to protect account information from unauthorized
          access. Actual security requires a properly configured
          backend and secure storage.

          {'\n\n'}5. Third Party Services

          {'\n'}Some application functions may use third-party services.
          Their privacy practices may differ.

          {'\n\n'}6. User Rights

          {'\n'}Users should have access to their account information
          and appropriate ways to request changes or account deletion.

          {'\n\n'}7. Contact

          {'\n'}For questions about this policy, contact our support team.
        </Text>

        <Text style={styles.sectionTitle}>
          Terms & Conditions
        </Text>

        <Text style={styles.description}>
          1. By using the application, you agree to these demo terms.

          {'\n\n'}2. You are responsible for maintaining the security
          of your account.

          {'\n\n'}3. Appointment information displayed in this
          demonstration is not a confirmed medical booking.

          {'\n\n'}4. Information in this application is provided
          for demonstration purposes.

          {'\n\n'}5. The application should not replace consultation
          with a qualified healthcare professional.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
