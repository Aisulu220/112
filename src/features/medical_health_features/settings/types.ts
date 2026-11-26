export type SettingsItem = {
  id: string;
  title: string;
  description: string;
};

export type SettingsScreenProps = {
  onBack?: () => void;
};
