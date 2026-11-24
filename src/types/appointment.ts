
export type AppointmentStatus =
  | 'Complete'
  | 'Upcoming'
  | 'Cancelled';

export type Appointment = {
  id: number;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  initials: string;
};

export type AppointmentScreenType =
  | 'list'
  | 'details'
  | 'cancel'
  | 'review';
