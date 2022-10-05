/* @ts-ignore */
import * as React from 'react'
import { shortenAddress } from '../utils'

export type HeaderProps = {
  /**
   * connectionStatus:
   * userAddress:
   * ownerStatus:
   */
  connectionStatus: boolean
  userAddress: string
  ownerStatus: boolean
}

export function CurationHeader({
  connectionStatus,
  userAddress,
  ownerStatus,
}: HeaderProps) {
  return (
    <div className="h-[50px] w-full flex-row flex-wrap justify-center">
      <div className="flex w-full flex-row">
        <div className="justify-start">
          {/* <img
                        className="flex flex-row justify-center"
                        src="../curationModalIcons/back/backDefault.svg"
                    /> */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15.5" stroke="#050A09" />
            <path
              d="M17.9987 8.00098L18.9398 8.9421L10.9411 16.941L10 15.9999L17.9987 8.00098Z"
              fill="#050A09"
            />
            <path
              d="M18.9401 23.058L17.999 23.9991L10 15.9999L10.9409 15.0588L18.9401 23.058Z"
              fill="#050A09"
            />
          </svg>
        </div>
        <div className="ustify-end">
          {/* <img
                        src="packages/curation-interface/src/curationModalIcons/exit/exitDefault.svg"
                    /> */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15.5" stroke="#050A09" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.0582 23.9991L23.9993 23.058L16.9413 15.9999L23.9991 8.94208L23.058 8.00096L16.0001 15.0588L8.94138 8L8.00026 8.94112L15.059 15.9999L8 23.0589L8.94112 24L16.0001 16.941L23.0582 23.9991Z"
              fill="#050A09"
            />
          </svg>
        </div>
      </div>
      {connectionStatus ? (
        <div className="flex h-full w-full flex-row flex-wrap ">
          <div className="h-6/12 flex w-full flex-row flex-wrap justify-start">
            {'User Address: ' + shortenAddress(userAddress)}
          </div>
          <div className="h-6/12 flex w-full flex-row flex-wrap justify-start">
            {'Owner Check: ' + ownerStatus}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-row flex-wrap ">
          <div className="h-6/12 flex w-full flex-row flex-wrap justify-start">
            {'no user connected'}
          </div>
          <div className="h-6/12 flex w-full flex-row flex-wrap justify-start">
            {'no owner'}
          </div>
        </div>
      )}
    </div>
  )
}
