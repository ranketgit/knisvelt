import { Metadata } from 'next';
import ReservationClient from '../components/ReservationClient'; // Adjust path if needed

export const metadata: Metadata = {
  title: 'Finaliser votre réservation | KINESVELT by Imane D',
  description: 'Finalisez la réservation de vos soins et équipements Kinesvelt.',
  alternates: {
    canonical: '/reservation',
  },
};

export default function ReservationPage() {
  return <ReservationClient />;
}