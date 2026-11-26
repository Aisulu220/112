export type PrescriptionsItem = {
  id: string;
  title: string;
  description: string;
};

export type PrescriptionsScreenProps = {
  onBack?: () => void;
};
