"use client";

import * as React from "react";
import { HashConnectConnectionState, HashConnectTypes } from "hashconnect/dist/types";
import { HashConnect } from "hashconnect/dist/hashconnect";
import { MessageTypes } from "hashconnect/dist/message";
import { IHashConnect } from "hashconnect/dist/types";
import { HashConnectProvider } from "hashconnect/dist/provider/provider";
import { HashConnectSigner } from "hashconnect/dist/provider/signer";
import { TransferTransaction, PrivateKey } from "@hashgraph/sdk";

export type HederaNetworkType = 'testnet' | 'mainnet' | 'previewnet';

export type HashConnectContent = {
    hcData: IHashConnect["hcData"],
    topic: string,
    setTopic: React.Dispatch<React.SetStateAction<string>>,
    clearPairings: Function,
    pairingString: string,
    pairingData: HashConnectTypes.SavedPairingData | null,
    availableExtension: HashConnectTypes.WalletMetadata | null,
    state: HashConnectConnectionState,
    hashConnect: HashConnect | null
    connectToExtension: Function,
    disconnect: Function,
    signTransaction: (transactionBase64: string) => Promise<string>,
    sendTransaction: (trans: Uint8Array, acctToSign: string, return_trans: boolean, hideNfts: boolean) => Promise<MessageTypes.TransactionResponse>,
    network: HederaNetworkType,
    setNetwork: React.Dispatch<React.SetStateAction<string>>,
    getProvider: (accountId?: string) => HashConnectProvider,
    getSigner: (provider?: HashConnectProvider, accountId?: string) => HashConnectSigner
}

const HashConnectContext = React.createContext<HashConnectContent>({} as HashConnectContent);

export interface IHashconnectProviderProps {
    children: React.ReactNode
}

const g_hashConnect = new HashConnect();
const g_appMetadata = {
    name: "Lympha - Invest in the future",
    description: "Invest in the future with Lympha and help remove CO2e",
    icon: ""
}
const g_network = 'testnet';

console.log("useHashconnect ------ 1")

export const HashConnectContextProvider = ({
    children,
}: IHashconnectProviderProps) => {
    const [hashConnect] = React.useState(g_hashConnect);
    const [hcData, setHcData] = React.useState<object>(hashConnect.hcData);
    const [topic, setTopic] = React.useState('');
    const [pairingString, setPairingString] = React.useState("");
    const [pairingData, setPairingData] = React.useState<HashConnectTypes.SavedPairingData | null>(null);
    const [availableExtension, setAvailableExtension] = React.useState<HashConnectTypes.WalletMetadata>({
        name: "",
        description: "",
        icon: ""
    });
    const appMetadata: HashConnectTypes.AppMetadata = g_appMetadata!;

    const [state, setState] = React.useState(HashConnectConnectionState.Disconnected);
    const [network, setNetwork] = React.useState<HederaNetworkType>(null!);
    const [initialLoad, setInitialLoad] = React.useState(true);
    
    console.log("useHashconnect ------ 2")

    React.useEffect(() => {

        console.log("useHashconnect ------ 3")

        let selectedNetwork = g_network
        if (isLocalAvailable()) {
            const storedNetwork = localStorage.getItem('hederaNetwork') as HederaNetworkType;
            if (!storedNetwork || !isValidNetwork(storedNetwork)) {
                setNetwork(g_network);
            } else {
                setNetwork(storedNetwork);
                selectedNetwork = storedNetwork;
            }
        } else {
            if (isValidNetwork(g_network)) {
                setNetwork(g_network);
            }
        }
        init(selectedNetwork as HederaNetworkType);
    }, []);

    React.useEffect(() => {
        if (!initialLoad && isValidNetwork(network) && isLocalAvailable()) {
            localStorage.setItem('hederaNetwork', network!);
        }
        setInitialLoad(false);
    }, [network])

    hashConnect.connectionStatusChangeEvent.on((data: any) => {
        setState(data);
        setHcData(hashConnect.hcData);
    });

    const init = async (net: HederaNetworkType) => {
        
        console.log("useHashconnect ------ 4")

        setUpHashConnectEvents();

        let initData = await hashConnect.init(appMetadata, net, false);

        setTopic(initData.topic);
        setPairingString(initData.pairingString);

        setPairingData(initData.savedPairings[0]);
    }

    const setUpHashConnectEvents = () => {
        hashConnect.foundExtensionEvent.on((data) => {
            console.log("useHashconnect ------ 5")
            setAvailableExtension(data);
        })

        hashConnect.pairingEvent.on((data) => {
            console.log("useHashconnect ------ 6")
            setPairingData(data.pairingData!);
        });

        hashConnect.connectionStatusChangeEvent.on((state) => {
            console.log("useHashconnect ------ 6")
            setState(state);
        })
    }

    const connectToExtension = async () => {
        hashConnect.connectToLocalWallet();
    }

    const signTransaction = async (transactionBase64: string) => {

        const transactionBytes = Buffer.from(transactionBase64, 'base64');

        const transaction = TransferTransaction.fromBytes(transactionBytes);

        const signer = getSigner();
        const signedTransaction = await transaction.signWithSigner(signer);

        const signedTransactionBytes = signedTransaction.toBytes();

        return Buffer.from(signedTransactionBytes).toString('base64');
    }

    const sendTransaction = async (trans: Uint8Array, acctToSign: string, return_trans: boolean = false, hideNfts: boolean = false) => {
        const transaction: MessageTypes.Transaction = {
            topic: topic,
            byteArray: trans,

            metadata: {
                accountToSign: acctToSign,
                returnTransaction: return_trans,
                hideNft: hideNfts
            }
        }

        return await hashConnect.sendTransaction(topic, transaction)
    }

    const requestAccountInfo = async () => {
        let request: MessageTypes.AdditionalAccountRequest = {
            topic: topic,
            network: network,
            multiAccount: true
        }

        await hashConnect.requestAdditionalAccounts(topic, request);
    }

    const getProvider = (accountId?: string) => {
        return hashConnect.getProvider(network, topic, accountId ? accountId : pairingData?.accountIds[0]!);
    }

    const getSigner = (provider?: HashConnectProvider, accountId?: string) => {
        if (!provider) {
            provider = getProvider(accountId);
        }

        return hashConnect.getSigner(provider);
    }

    const disconnect = () => {
        hashConnect.disconnect(pairingData!.topic)
        setPairingData(null);
    }

    const clearPairings = () => {
        hashConnect.clearConnectionsAndData();
        setPairingData(null);
    }

    return (
        <HashConnectContext.Provider value={{
            hcData,
            hashConnect,
            topic,
            setTopic,
            pairingString,
            pairingData,
            availableExtension,
            state,
            connectToExtension,
            clearPairings,
            disconnect,
            signTransaction,
            sendTransaction,
            network,
            setNetwork,
            getProvider,
            getSigner
        } as HashConnectContent
    }>
        { children }
    </HashConnectContext.Provider>
    );
}

export const useHashConnectContext = () => {
    return React.useContext(HashConnectContext);
}

const isValidNetwork = (network: HederaNetworkType): boolean => {
    return network === 'testnet' || network === 'mainnet' || network === 'previewnet';
}

const isLocalAvailable = () => {
    return typeof window !== 'undefined' && 'localStorage' in window;
}