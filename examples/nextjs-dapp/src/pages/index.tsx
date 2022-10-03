import { CurationInterface } from "../../../../packages/curation-interface/src/components/CurationInterface"
import { useAccount } from "wagmi"

function Page() {

  const hardcodedCurationContractAddress = "0x9c1eD19E7015c40716141039f8Ae43cEACCF30fd"

  const hardcodedNetwork = 4



  const { address } = useAccount()

  const currentUserAddress = address ? address : ""

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <CurationInterface
        userAddress={currentUserAddress}
        curationContractAddress={hardcodedCurationContractAddress}
        network={hardcodedNetwork}
      />
    </div>
  )
}

export default Page
