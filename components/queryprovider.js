"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const createPersister = () => {
  if (typeof window !== "undefined") {
    return createSyncStoragePersister({
      storage: window.localStorage,
    });
  }
  return null;
};

const persister = createPersister();

export default function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {persister ? (
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
      ) : (
        <>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      )}
    </QueryClientProvider>
  );
}
