// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type { ApiPromise } from '@polkadot/api';

import { useCallback, useMemo } from 'react';

import { Ledger } from '@polkadot/ledger';
// import networks from '@polkadot/networks';
import uiSettings from '@polkadot/ui-settings';
import { assert } from '@polkadot/util';

// import { useApi } from './useApi';

interface StateBase {
  isLedgerCapable: boolean;
  isLedgerEnabled: boolean;
}

interface State extends StateBase {
  getLedger: () => Ledger;
}

const EMPTY_STATE: StateBase = {
  isLedgerCapable: false,
  isLedgerEnabled: false
};

const isLedgerCapable = !!(window as unknown as { USB?: unknown }).USB;

// const ledgerChains = networks.filter((network) => network.hasLedgerSupport === true

// const hasWebUsb = !!(window as unknown as { USB?: unknown }).USB;
// let ledger: Ledger | null = null;
// const ledgerChains = networks.filter((network) => network.hasLedgerSupport === true);

// function retrieveLedger (api: ApiPromise): Ledger {
//   if (!ledger) {
//     const def = ledgerChains.find(({ genesisHash }) => genesisHash[0] === api.genesisHash.toHex());

//     assert(def, `Unable to find supported chain for ${api.genesisHash.toHex()}`);

//     ledger = new Ledger(uiSettings.ledgerConn as 'u2f', def.network);
//   }

//   return ledger;
// }

// function getState (api: ApiPromise): StateBase {
//   const isLedgerCapable = hasWebUsb && ledgerChains.map(({ genesisHash }) => genesisHash[0]).includes(api.genesisHash.toHex());

//   return {
//     isLedgerCapable,
//     isLedgerEnabled: isLedgerCapable && uiSettings.ledgerConn !== 'none'
//   };
// }

export function useLedger (): State {
  // const { api, isApiReady } = useApi();

  // const getLedger = useCallback(
  //   () => retrieveLedger(api),
  //   [api]
  // );

  // return useMemo(
  //   () => ({ ...(isApiReady ? getState(api) : EMPTY_STATE), getLedger }),
  //   [api, getLedger, isApiReady]
  // );

  return { getLedger: () => { return {} as Ledger; }, isLedgerCapable, isLedgerEnabled: false };
}
