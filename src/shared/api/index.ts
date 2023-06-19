import axios from 'axios';
import { TOKEN } from '@enum/Token';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKEN.VIEWER))[TOKEN.ACCESS]}`,
  },
});
