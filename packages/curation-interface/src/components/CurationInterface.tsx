import { useValidation } from '@public-assembly/assemble-curation-validation'
// import { useCurationFunctions } from '@public-assembly/assemble-curation-functions'
// import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useState, useEffect } from 'react'
import { CurationHeader } from './CurationHeader'
import { CurationFooter } from './CurationFooter'
import { CurationBody } from './CurationBody'

export type AllMyProps = {
  /**
   * connectionStatus:
   * userAddress:
   * curationContractAddress:
   * network:
   * listings:
   */
  connectionStatus: boolean
  userAddress: string
  curationContractAddress: string
  network: number
}

export type ListingProps = {
  listings?: string | string[] | any[] | [string, number, boolean][] // Listing[] memory listings
}

export function CurationInterface({
  // shared inputs
  connectionStatus,
  userAddress,
  curationContractAddress,

  // useValidation inputs
  network,
}: AllMyProps) {
  // useValidation
  const {
    // isCurationPassHolder,
    isCurationOwner,
    // userActiveListings,
    // curationLimit,
    // frozenAt,
    // isPaused,
  } = useValidation({
    userAddress,
    curationContractAddress,
    network,
  })

  // component wide state
  const [addTracksView, setAddTracksView] = useState<boolean>(false)

  const [currentTimeStamp, setCurrentTimeStamp] = useState<number>(0)
  // const [listingsToAdd, setListingsToAdd] = useState<ListingProps>()
  // const [isOwner, setIsOwner] = useState<boolean>(false);
  // const [isPassHolder, setIsPassHolder] = useState<boolean>(false);
  // const [listingsInput, setListingsInput] = useState<string>("");

  // const isCurationFrozen = frozenAt == 0 || currentTimeStamp < frozenAt ? false : true
  // const isCurationPaused = isPaused ? isPaused : false

  // // useCurationFunctions
  // const { addListingWrite } = useCurationFunctions({
  //   curationContractAddress,
  //   listingsToAdd,
  // })

  const getUnix = () => {
    setCurrentTimeStamp(Math.floor(Date.now() / 1000))
  }

  useEffect(() => {
    getUnix()
    const interval = setInterval(() => {
      getUnix()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const resetAddViewState = () => {
    setAddTracksView(false)
  }

  useEffect(() => {
    if (!connectionStatus) {
      resetAddViewState()
    }
  }, [connectionStatus])

  return (
    <div className="flex h-[540px] w-[320px] flex-row flex-wrap content-between justify-center bg-[#FF89DE] text-black sm:h-[420px] sm:w-[588px]">
      {/* <div className="flex h-fit w-full flex-row flex-wrap justify-start text-sm">
        <div className="h-fit w-full">{ connectionStatus ? shortenAddress(userAddress) : 'no user connected'}</div>
        {isCurationOwner && connectionStatus ? <div className="h-fit w-full">{'[OWNER]'}</div> : <div></div>}
      </div> */}
      <CurationHeader
        connectionStatus={connectionStatus}
        userAddress={userAddress}
        ownerStatus={isCurationOwner}
        addViewFn={setAddTracksView}
      />

      <CurationBody
        connectionStatus={connectionStatus}
        addView={addTracksView}
        addViewFn={setAddTracksView}
      />

      <CurationFooter
        addView={addTracksView}
        addViewFn={setAddTracksView}
        connectionStatus={connectionStatus}
      />

      {/* <div className="text-xs text-black">
        <div>{'is pass holder: ' + isCurationPassHolder}</div>
        <div>{'user listings: ' + userActiveListings}</div>
        <div>{'cur limit: ' + curationLimit}</div>
        <div>{'frozen At: ' + frozenAt}</div>
        <div>{'is paused: ' + isPaused.toString()}</div>
        <div>{'current Unix: ' + currentTimeStamp}</div>
      </div> */}
      <div>{'current Unix: ' + currentTimeStamp}</div>
    </div>
  )
}
