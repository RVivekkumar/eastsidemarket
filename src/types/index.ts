export interface Service {
  id: string;
  title: string;
  description: string[];
  icon?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  number: number;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address: string;
  hours?: string;
}