import { useValidation } from '@public-assembly/assemble-curation-validation'
import { useOwnerCurationFunctions } from '@public-assembly/assemble-curation-functions'

export type AllMyProps = {
  /**
   * userAddress:
   * curationContractAddress:
   * updatedTitle:
   * updatedTokenPass:
   * listing:
   */

  userAddress: string
  curationContractAddress: string
  updatedTitle: string
  updatedTokenPass: string
  listing: string
}

export function CurationInterface({
  userAddress,
  curationContractAddress,
  updatedTitle,
  updatedTokenPass,
  listing,
}: AllMyProps) {
  const {
    curationPassAddress,
    userCurationPassBalance,
    isCurationPassHolder,
    isCurationOwner,
  } = useValidation({
    userAddress,
    curationContractAddress,
  })

  const {
    // updateTitle
    // updateTitleWrite,
    updateTitleWriteData,
    // txnUpdateTitleData,
    // txnUpdateTitleStatus,

    // // updateTokenPass
    // updateTokenPassWrite,
    // updateTokenPassWriteData,
    // txnUpdateTokenPassData,
    // txnUpdateTokenPassStatus,

    // // ownerAddListing
    // ownerAddListingWrite,
    // ownerAddListingWriteData,
    // txnOwnerAddListingData,
    // txnOwnerAddListingStatus,

    // // ownerRemoveListing
    // ownerRemoveListingWrite,
    // ownerRemoveListingWriteData,
    // txnOwnerRemoveListingData,
    // txnOwnerRemoveListingStatus,

    // // pauseCuration
    // pauseCurationWrite,
    // pauseCurationWriteData,
    // txnPauseCurationData,
    // txnPauseCurationStatus,

    // // resumeCuration
    // resumeCurationWrite,
    // resumeCurationWriteData,
    // txnResumeCurationData,
    // txnResumeCurationStatus,
  } = useOwnerCurationFunctions({
    curationContractAddress,
    updatedTitle,
    updatedTokenPass,
    listing,
  })

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-solid border-gray-200 p-4 text-black">
      <div>{'Current User Address: ' + userAddress}</div>
      <div>{'Current Contract Address ' + curationContractAddress}</div>
      <div>{'Curation Pass Address: ' + curationPassAddress}</div>
      <div>{'User Balance of Curation Pass: ' + userCurationPassBalance}</div>
      <div>{'User owns curation pass : ' + isCurationPassHolder}</div>
      <div>{'User is owner of curation contract : ' + isCurationOwner}</div>
      <div>{'bruh: ' + updateTitleWriteData}</div>
    </div>
  )
}
