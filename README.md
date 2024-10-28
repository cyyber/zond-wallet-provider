![Zond Wallet Provider Preview Cover](misc/zond_wallet_provider_preview_cover.png)

# Zond Wallet Provider

The Ethereum provider object announced by the [Zond Wallet](https://github.com/theQRL/zond-wallet), based on EIP-6963. This facilitates the connection and communication between Zond Wallet and dApps.

> **Important!** Zond Wallet Provider is based on few **MetaMask** repositories([`json-rpc-engine`](https://github.com/MetaMask/json-rpc-engine), [`json-rpc-middleware-stream`](https://github.com/MetaMask/json-rpc-middleware-stream), [`object-multiplex`](https://github.com/MetaMask/object-multiplex),[`post-message-stream`](https://github.com/MetaMask/post-message-stream),[`providers`](https://github.com/MetaMask/providers),[`rpc-errors`](https://github.com/MetaMask/rpc-errors),[`safe-event-emitter`](https://github.com/MetaMask/safe-event-emitter),[`superstruct`](https://github.com/MetaMask/superstruct),[`utils`](https://github.com/MetaMask/utils)). For each of the codebase used, their respective license is kept alongside the code. Please go through the subdirectories of this repository to view those licenses.

## :keyboard: Usage

- Run `npm i -D @theqrl/zond-wallet-provider` in your project to install the zond-wallet-provider package.
- Import the required functions to the files, and invoke it.

```Javascript
import { initializeProvider, WindowPostMessageStream } from "@theqrl/zond-wallet-provider";

const initializeInPageScript = () => {
  try {
    const zondStream = new WindowPostMessageStream({
      name: ZOND_POST_MESSAGE_STREAM.INPAGE,
      target: ZOND_POST_MESSAGE_STREAM.CONTENT_SCRIPT,
    });

    initializeProvider({
      connectionStream: zondStream,
      logger: log,
      providerInfo: {
        uuid: uuid(),
        name: ZOND_WALLET_PROVIDER_INFO.NAME,
        icon: ZOND_WALLET_PROVIDER_INFO.ICON,
        rdns: ZOND_WALLET_PROVIDER_INFO.RDNS,
      },
    });
  } catch (error) {
    console.warn("Zond Wallet: Failed to initialize the zond wallet provider", error);
  }
};

// This function accounces the zond wallet provider(based on EIP-6963), to be detected by the dApps.
initializeInPageScript();
```
