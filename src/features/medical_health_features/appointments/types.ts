export type AppointmentsItem = {
  id: string;
  title: string;
  description: string;
};

export type AppointmentsScreenProps = {
  onBack?: () => void;
};
