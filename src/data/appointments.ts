
import { Appointment } from '../types/appointment';

export const initialAppointments: Appointment[] = [
  {
    id: 1,
    doctor: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    date: 'Sunday, 24 June',
    time: '10:00 AM - 10:30 AM',
    status: 'Complete',
    initials: 'OT',
  },
  {
    id: 2,
    doctor: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermatologist',
    date: 'Friday, 28 June',
    time: '02:00 PM - 02:30 PM',
    status: 'Complete',
    initials: 'AB',
  },
  {
    id: 3,
    doctor: 'Dr. Sophie Martinez, Ph.D.',
    specialty: 'Cosmetic Dermatologist',
    date: 'Monday, 01 July',
    time: '11:00 AM - 11:30 AM',
    status: 'Upcoming',
    initials: 'SM',
  },
  {
    id: 4,
    doctor: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    date: 'Wednesday, 03 July',
    time: '09:00 AM - 09:30 AM',
    status: 'Upcoming',
    initials: 'OT',
  },
];
