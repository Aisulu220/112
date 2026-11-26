export type NotificationsItem = {
  id: string;
  title: string;
  description: string;
};

export type NotificationsScreenProps = {
  onBack?: () => void;
};
