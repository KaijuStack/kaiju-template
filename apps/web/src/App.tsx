import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { theme } from './theme';
import AppRoutes from './routes';
import queryClient from './query-client';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Notifications />
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
