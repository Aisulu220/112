export type ProfileItem = {
  id: string;
  title: string;
  description: string;
};

export type ProfileScreenProps = {
  onBack?: () => void;
};
