"use client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { WalletProvider } from "./components/wallet/WalletProvider";
import { SearchParamProvider } from '@/components/dashboard/search/context';
import { Suspense } from 'react';


const queryClient = new QueryClient()

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WalletProvider>
        <QueryClientProvider client={queryClient}>
          <SearchParamProvider>
            {children}
          </SearchParamProvider>
        </QueryClientProvider>
      </WalletProvider>
    </Suspense>
  );
}
