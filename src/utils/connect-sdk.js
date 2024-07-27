import { Sdk } from '@unique-nft/sdk';
import { KeyringProvider } from '@unique-nft/accounts/keyring';

const connectSdk = async () => {
  const provider = new KeyringProvider({ seed: 'your-wallet-seed-phrase' });
  const account = await provider.account();
  const sdk = new Sdk({ chainWsUrl: 'wss://rpc-opal.unique.network', account });

  return { account, sdk };
};

export { connectSdk };
