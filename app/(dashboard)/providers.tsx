"use client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { WalletProvider } from "./components/wallet/WalletProvider";

const queryClient = new QueryClient()

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <WalletProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WalletProvider>
  );
}
