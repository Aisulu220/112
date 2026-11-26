export type MedicalHistoryItem = {
  id: string;
  title: string;
  description: string;
};

export type MedicalHistoryScreenProps = {
  onBack?: () => void;
};
