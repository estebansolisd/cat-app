export interface Gender {
  id: number;
  name: string;
}

export interface Breed {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  child_friendly: number;
  dog_friendly: number;
  hairless: boolean;
  health_issues: number;
  hypoallergenic: boolean;
  intelligence: number;
  short_legs: boolean;
  stranger_friendly: number;
  temperament: string;
  imperial: string;
  metric: string;
  origin: string;
  wikipedia_url?: string;
}

export interface Cat {
  id: number;
  breed: Breed;
  name: string;
  age: number;
  gender: Gender;
}

export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm extends LoginForm {
  password_confirmation: string;
  name: string;
}

export interface FormProps {
  variant: "login" | "register";
}
export interface FormResult {
  errors: Array<any>;
  status: string;
}

export interface UserStateType {
  cats: Cat[];
  loadCatStatus: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginDataType {
  user: User;
  token: string;
}
