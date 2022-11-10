import { useEffect, useState } from "react";
import {
  guestIdentity,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { CANDY_MACHINE_ID } from "../utils";
import NFT from "../components/NFT";
import Head from "next/head";
import { Header, NFTDisplay, Hero, Login } from '../components'

export default function Main() {
  const [metaplex, setMetaplex] = useState();
  const [candyState, setCandyState] = useState();
  const [candyStateError, setCandyStateError] = useState();
  const [candyStateLoading, setCandyStateLoading] = useState(true);
  const [txError, setTxError] = useState();
  const [txLoading, setTxLoading] = useState(false);

  //Lance's code
  const [nfts, setNfts] = useState([])

  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    setMetaplex(
      Metaplex.make(connection).use(
        wallet ? walletAdapterIdentity(wallet) : guestIdentity()
      )
    );
  }, [connection, wallet]);

  useEffect(() => {
    if (!metaplex) return;

    const updateState = async () => {
      try {
        console.log(metaplex.nfts().f, "WOOOOOOOW")
        const state = await metaplex
          .candyMachines()
          .findByAddress({ address: CANDY_MACHINE_ID });
        console.log(state);
        setCandyState(state);
        setNfts(state.items)
        setCandyStateError(null);
      } catch (e) {
        console.log(e);
        setCandyStateError(e.message);
      } finally {
        setCandyStateLoading(false);
      }
    };


    updateState();


    // Refresh the state every 30s
    const intervalId = setInterval(() => updateState(), 30_000);

    return () => clearInterval(intervalId);
  }, [metaplex]);

  const mint = async () => {
    if (!metaplex) return;

    setTxLoading(true);
    setTxError(null);

    try {
      const mintResult = await metaplex.candyMachines().mint({
        candyMachine: {
          address: candyState.address,
          collectionMintAddress: candyState.collectionMintAddress,
          candyGuard: candyState.candyGuard,
        },
        collectionUpdateAuthority: candyState.authorityAddress,
        group: null,
      });

      console.log({ mintResult });
    } catch (e) {
      console.log(e);
      setTxError(e.message);
    } finally {
      setTxLoading(false);
    }
  };

  const soldOut = candyState?.itemsRemaining.eqn(0);
  const solAmount = candyState?.candyGuard?.guards?.solPayment
    ? candyState.candyGuard.guards.solPayment.lamports.toNumber() /
    LAMPORTS_PER_SOL
    : null;

  // STYLE MOVE LATER
  const styles = {
    wrapper: 'flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200',
    container:
      'flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0',
    infoSection: 'lg:w-2/3 px-10',
    mobileDisplaySection: 'h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4',
    desktopDisplaySection: 'hidden lg:flex flex-1 lg:w-1/3',
  }

  //NEW UI
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home | Solana Monkey Business NFT</title>
      </Head>

      <div className={styles.container}>
        <section className={styles.infoSection}>
          <Header />
          <div className={styles.mobileDisplaySection}>
            <NFTDisplay />
          </div>

          <Hero />
        </section>

        <section className={styles.desktopDisplaySection}>
          <NFTDisplay />
        </section>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {candyStateLoading ? (
  //       <div>Loading...</div>
  //     ) : candyStateError ? (
  //       <div>{candyStateError}</div>
  //     ) : (
  //       candyState && (
  //         <div>
  //           <div>Total items: {candyState.itemsAvailable.toString()}</div>
  //           <div>Minted items: {candyState.itemsMinted.toString()}</div>
  //           <div>Remaining items: {candyState.itemsRemaining.toString()}</div>
  //           {solAmount && <div>Cost: ◎ {solAmount}</div>}
  //           {txError && <div>{txError}</div>}
  //           <button onClick={mint} disabled={!wallet || txLoading || soldOut}>
  //             {soldOut ? "SOLD OUT" : txLoading ? "LOADING..." : "MINT"}
  //           </button>
  //         </div>
  //       )
  //     )}
  //     {nfts.map((nft) => {
  //       // console.log(nft)
  //       // return <NFT uri={nft.uri} />
  //     })}
  //   </div>
  // );
}


