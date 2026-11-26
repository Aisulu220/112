export type ChatItem = {
  id: string;
  title: string;
  description: string;
};

export type ChatScreenProps = {
  onBack?: () => void;
};
