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
  closeButton?: JSX.Element
}

export function CurationHeader({
  connectionStatus,
  userAddress,
  ownerStatus,
  closeButton,
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
        {closeButton && <div className="justify-end">{closeButton}</div>}
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
