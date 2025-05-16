import { QueryClient, keepPreviousData } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      placeholderData: keepPreviousData,
      retryOnMount: false,
    },
  },
});

export enum QueryKeys {
  Files = 'files',
}

export default queryClient;
