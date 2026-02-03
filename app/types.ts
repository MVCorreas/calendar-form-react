export interface FieldErrors {
  title: string;
  date: string;
  description: string;
}

export type FormFields = FieldErrors; //reuse interface since they are similar

export interface Event extends FormFields {
  id: number;
}
