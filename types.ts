export interface Service {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
}

export interface TimeSlot {
  id: string;
  time: string; // ISO string or formatted time
  available: boolean;
}

export interface BookingDetails {
  serviceId: string;
  date: Date;
  slot: TimeSlot;
  timeZone: string;
}

export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PAYMENT = '/payment',
  COMPLIANCE = '/compliance',
}
