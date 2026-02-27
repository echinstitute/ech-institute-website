'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { mainnet, optimism, polygon, base, arbitrum } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo, useState, useEffect } from 'react';

// Singleton pattern to prevent multiple initializations
let wagmiConfig: ReturnType<typeof getDefaultConfig> | null = null;
let queryClientInstance: QueryClient | null = null;

function getWagmiConfig() {
  if (!wagmiConfig) {
    wagmiConfig = getDefaultConfig({
      appName: 'ECH Institute',
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
      chains: [mainnet, polygon, optimism, arbitrum, base],
      transports: {
        [mainnet.id]: http("https://ethereum-rpc.publicnode.com"),
        [polygon.id]: http("https://polygon-bor-rpc.publicnode.com"),
        [optimism.id]: http("https://optimism-rpc.publicnode.com"),
        [arbitrum.id]: http("https://arbitrum-one-rpc.publicnode.com"),
        [base.id]: http("https://base-rpc.publicnode.com"),
      },
      ssr: true,
    });
  }
  return wagmiConfig;
}

function getQueryClient() {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }
  return queryClientInstance;
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  // Use useMemo to ensure config is only created once and stable across re-renders
  const config = useMemo(() => getWagmiConfig(), []);
  const queryClient = useMemo(() => getQueryClient(), []);

  // Set max listeners on mount to prevent WalletConnect memory leak warnings
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Access WalletConnect Core through the config's internal structure
        const configAny = config as any;
        if (configAny?._internal?.core?.relayer?.core?.events) {
          const events = configAny._internal.core.relayer.core.events;
          if (events && typeof events.setMaxListeners === 'function') {
            events.setMaxListeners(20);
          }
        }
        // Also try direct core access
        if (configAny?._internal?.core?.events) {
          const events = configAny._internal.core.events;
          if (events && typeof events.setMaxListeners === 'function') {
            events.setMaxListeners(20);
          }
        }
      } catch (error) {
        // Silently fail if we can't access the core
        // This is a non-critical optimization
      }
    }
  }, [config]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({
          accentColor: 'black',
          accentColorForeground: 'white',
          fontStack: 'system',
        })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 