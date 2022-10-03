import { useValidation } from '@public-assembly/assemble-curation-validation'
import { useCurationFunctions } from '@public-assembly/assemble-curation-functions'
// import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useState } from 'react'

export type AllMyProps = {
  /**
   * userAddress:
   * curationContractAddress:
   * network:
   * listings:
   */

  userAddress: string
  curationContractAddress: string
  network: number
  listings?: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
}

export function CurationInterface({
  // shared inputs
  userAddress,
  curationContractAddress,

  // useValidation inputs
  network,

  // useCurationFunctionInputs
  listings,
}: AllMyProps) {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  // const [isOwner, setIsOwner] = useState<boolean>(false);
  // const [isPassHolder, setIsPassHolder] = useState<boolean>(false);
  // const [listingsInput, setListingsInput] = useState<string>("");

  // useValidation
  const {
    isCurationPassHolder,
    isCurationOwner,
    userActiveListings,
    curationLimit,
    frozenAt,
    isPaused,
  } = useValidation({
    userAddress,
    curationContractAddress,
    network,
  })

  // useCurationFunctions
  const { addListingWrite } = useCurationFunctions({
    curationContractAddress,
    listings,
  })

  const shortenAddress = (address?: string) => {
    try {
      return address.slice(0, 4) + '...' + address.slice(address.length - 4)
    } catch (err) {
      return undefined
    }
  }

  return (
    <div className="flex h-[600px] w-[343px] flex-row flex-wrap justify-center bg-[#FF89DE] text-black">
      <div className="flex h-fit w-full flex-row flex-wrap justify-start text-sm">
        <div className="h-fit w-full">{shortenAddress(userAddress)}</div>
        {isCurationOwner ? <div className="h-fit w-full">{'[OWNER]'}</div> : <div></div>}
      </div>

      <div className="flex h-fit w-full flex-row flex-wrap justify-center">
        <button
          onClick={() => setIsConnected(!isConnected)}
          className="bg-black p-2 text-white">
          {isConnected ? 'DISCONNECT' : 'CONNECT'}
        </button>
      </div>

      <div className="flex h-fit w-full flex-row flex-wrap justify-center">
        <button onClick={() => addListingWrite} className="bg-black p-2 text-white">
          ADD LISTING
        </button>
      </div>

      <div className="text-xs text-black">
        <div>{'is pass holder: ' + isCurationPassHolder}</div>
        <div>{'user listings: ' + userActiveListings}</div>
        <div>{'cur limit: ' + curationLimit}</div>
        <div>{'frozen At: ' + frozenAt}</div>
        <div>{'is paused: ' + isPaused.toString()}</div>
      </div>
    </div>
  )
}
