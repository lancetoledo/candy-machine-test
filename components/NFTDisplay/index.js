import Image from 'next/image'

const styles = {
  wrapper:
    'bg-animate flex-1 rounded-3xl flex lg:flex-col items-center relative absolute inset-0 flex snap-x items-center gap-4 overflow-x-scroll px-[1rem] py-[1rem]',
  imageContainer:
    'relative h-[200px] w-[200px] flex-shrink-0 snap-center lg:h-[400px] lg:w-[400px]',
  nftImage: `rounded-[1rem] object-cover`,
}

const NFTDisplay = () => {


  const nfts = [
    'https://arweave.net/u041LLnK_3nIY4cSCoVv-yisS0NmjcOL5jvZSiNUhlI',
    'https://arweave.net/1GP5OmLFXo0z_QgJNCztbNLU2T3y38z9epgtwTBW67k',
    'https://arweave.net/o0xad2ydRa_1dcl-0K4zV3HSUxPaHmw9zLQm578_ZRo',
    'https://arweave.net/FNnRhGeLWj0TXUkZt2E7G8ZWBZDxRE1o3adJ8GrZ75s'

  ]

  return (
    <div className={styles.wrapper}>
      {nfts.map((nft, index) => (
        // console.log(nft)
        < div key={index} className={styles.imageContainer} >
          <Image className={styles.nftImage} src={nft} layout='fill' alt='nft' />
        </div>
      ))
      }
    </div >
  )
}

export default NFTDisplay
