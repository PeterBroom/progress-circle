import * as React from 'react';
import { TravelBuddy } from './components/TravelBuddy';

const schema = [
  {
    statusName: 'payment',
    title: 'Taking payment',
    text: 'Contacting your bank and requesting money.',
    asset: 'asset_url',
  },
  {
    statusName: 'confirmSupplier',
    title: 'Confirming with {supplier}',
    text: 'This usually takes just a few minutes but can take up to 24 hours. You’ll get a confirmation email when the booking is confirmed',
    asset: 'asset_url',
  },
  {
    statusName: 'emailSent',
    title: 'Your confirmation email is sent',
    text: 'You should find it in your inbox. If it’s not there, check your spam.',
    asset: 'asset_url',
  },
  {
    statusName: 'bookingConfirmed',
    title: 'Your booking is confirmed',
    text: 'Time to get excited!',
    asset: 'asset_url',
  },
  {
    statusName: 'getReady',
    title: 'Get ready! Final touches.',
    text: 'Make sure you’ve got everything you need.',
    asset: 'asset_url',
  },
  {
    statusName: 'enjoy',
    title: 'Enjoy your trip!',
    text: 'If you’ve got any questions during your rental please get in touch with {supplier} directly.',
    asset: 'asset_url',
  },
  {
    statusName: 'bookingComplete',
    title: 'You’ve completed this booking',
    text: 'Remember to leave a review and we hope you had a great time.',
    asset: 'asset_url',
  },
];
export default function App() {
  return (
    <div>
      <h1>Circular progress bar</h1>
      <TravelBuddy schema={schema} />
    </div>
  );
}
