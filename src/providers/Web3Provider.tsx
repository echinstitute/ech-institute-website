'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { mainnet, optimism, polygon, base, arbitrum } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo, useState, useEffect } from 'react';

// Singleton pattern: create config only on client and only once to avoid
// "WalletConnect Core is already initialized. Init() was called 2 times."
let wagmiConfig: ReturnType<typeof getDefaultConfig> | null = null;
let queryClientInstance: QueryClient | null = null;

function getWagmiConfig() {
  if (!wagmiConfig) {
    // Note: If you see "[Reown Config] Failed to fetch remote project configuration" with
    // ENOTFOUND api.web3modal.org, the SDK is offline or DNS can't reach Reown's API.
    // It falls back to local/default values and the app still works; WalletConnect cloud features may be limited.
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
  // Defer wallet config until after client mount so we never run getDefaultConfig
  // during SSR. That prevents WalletConnect Core from being initialized twice
  // (once on server, once on client) and eliminates the "Init() was called 2 times" warning.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const config = useMemo(() => (mounted ? getWagmiConfig() : null), [mounted]);
  const queryClient = useMemo(() => getQueryClient(), []);

  // Set max listeners on mount to prevent WalletConnect memory leak warnings
  useEffect(() => {
    if (mounted && config && typeof window !== 'undefined') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const configAny = config as any;
        if (configAny?._internal?.core?.relayer?.core?.events) {
          const events = configAny._internal.core.relayer.core.events;
          if (events && typeof events.setMaxListeners === 'function') {
            events.setMaxListeners(20);
          }
        }
        if (configAny?._internal?.core?.events) {
          const events = configAny._internal.core.events;
          if (events && typeof events.setMaxListeners === 'function') {
            events.setMaxListeners(20);
          }
        }
      } catch {
        // Non-critical; ignore
      }
    }
  }, [mounted, config]);

  if (!mounted || !config) {
    return <>{children}</>;
  }

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