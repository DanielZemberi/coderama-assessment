import AppContextProvider from '@lib/context/app-context/app-context-provider';
import GlobalStyle from '@lib/theme/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import router from './router';
import { Suspense } from 'react';
import { Loader } from '@components/ui';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppContextProvider>
        <Suspense fallback={<Loader loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
