import axios from 'axios';
import EnvService from 'src/services/internal/env';

const movieApi = axios.create({
  baseURL: `${EnvService.omdbApiUrl}`,
  params: { apiKey: EnvService.omdbApiKey },
});

export default movieApi;
