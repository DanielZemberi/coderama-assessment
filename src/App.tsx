import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import router from './router';
import GlobalStyle from '@lib/theme/globalStyle';
import AppContextProvider from '@lib/context/app-context/app-context-provider';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppContextProvider>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
