"use client";

import { WalletProvider } from "./components/wallet/WalletProvider";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <WalletProvider>
        {children}
    </WalletProvider>
  );
}
