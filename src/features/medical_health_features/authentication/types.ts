export type AuthenticationItem = {
  id: string;
  title: string;
  description: string;
};

export type AuthenticationScreenProps = {
  onBack?: () => void;
};
