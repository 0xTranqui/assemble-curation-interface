import { CurationInterface } from "../../../../packages/curation-interface/src/components/CurationInterface"
import { useAccount } from "wagmi"
import { useState } from "react"

function Page() {
  const [isConnected, setIsConnected] = useState<boolean>(false)


  const hardcodedCurationContractAddress = "0x9c1eD19E7015c40716141039f8Ae43cEACCF30fd"

  const hardcodedNetwork = 4

  const { address } = useAccount()

  const currentUserAddress = address ? address : ""

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <CurationInterface
        connectionStatus={isConnected}
        userAddress={currentUserAddress}
        curationContractAddress={hardcodedCurationContractAddress}
        network={hardcodedNetwork}
      />
      <div className="mt-20 flex h-fit w-full flex-row flex-wrap justify-center">
        <button
          onClick={() => setIsConnected(!isConnected)}
          className="bg-black p-2 text-white border-2">
          {isConnected ? 'DISCONNECT' : 'CONNECT'}
        </button>
      </div>
    </div>
  )
}

export default Page
