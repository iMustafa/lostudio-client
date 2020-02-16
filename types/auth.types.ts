export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  country: string;
  city: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}