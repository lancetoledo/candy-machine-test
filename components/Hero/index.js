import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { modalStyles } from '../../lib/ModalStyles'
import { MintModal } from '../index'

Modal.setAppElement('#__next')

const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-6xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {
  const router = useRouter()

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Solana Monkey Business</h1>
        <p className={styles.heroParagraph}>
          SMB Gen2 is a collection of 5000 unique 24x24 pixels randomly generated Monkeys stored on the Solana blockchain. With their accessibility-oriented design, the monkeys' goal is to invade the blockchain and spread their community. The monkeys feature owner-exclusive advantages such as NFT ownership, as well as a community wallet useable by holders with a future on-chain voting system. The Solana Monkeys' metadata is stored on Arweave, a permanent decentralized data storage. Each monkey is generated from over 99 possible traits spread over 6 layers, with some monkeys being rarer than others. Reject humanity, return to monke.
        </p>
        <div className={styles.heroCta}>
          {/* <Link href='/?mint=1'>
            <button className={styles.mintButton}>Mint Your NFT 0.1 SOL</button>
          </Link> */}
          {/* {!!nftData.length && <p>{nftData.length} minted already</p>} */}
        </div>
      </div>
      <Modal
        isOpen={!!router.query.mint}
        onRequestClose={() => router.push('/')}
        style={modalStyles}
      >
        <MintModal />
      </Modal>
    </main>
  )
}

export default Hero
