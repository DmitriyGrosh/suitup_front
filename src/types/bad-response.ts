import { AxiosError } from 'axios';

interface DefaultError {
  message: string;
  status: number;
  error: string;
}

export type BadResponse = AxiosError<DefaultError>;
