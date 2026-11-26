export type DiagnosisItem = {
  id: string;
  title: string;
  description: string;
};

export type DiagnosisScreenProps = {
  onBack?: () => void;
};
