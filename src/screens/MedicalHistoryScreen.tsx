import React from 'react';
import InfoScreen from '../components/InfoScreen';

export default function MedicalHistoryScreen() {
  return (
    <InfoScreen
      title="Medical History"
      subtitle="Your personal health records"
      icon="document-text-outline"
      items={[
        'Previous medical visits',
        'Past diagnoses',
        'Medical examination records',
        'Treatment history',
        'Important health information',
      ]}
    />
  );
}