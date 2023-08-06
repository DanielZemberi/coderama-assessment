import { IEnv } from 'src/types/env';

const env: IEnv = {
  omdbApiKey: '',
  omdbApiUrl: '',
};

if (import.meta.env.VITE_OMDB_API_KEY !== undefined) {
  env.omdbApiKey = String(import.meta.env.VITE_OMDB_API_KEY);
}

if (import.meta.env.VITE_OMDB_API_URL !== undefined) {
  env.omdbApiUrl = String(import.meta.env.VITE_OMDB_API_URL);
}

export default env;
