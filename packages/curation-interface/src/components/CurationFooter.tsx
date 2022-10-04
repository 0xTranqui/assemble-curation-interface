export type FooterProps = {
  /**
   * connectionStatus:
   */
  connectionStatus: boolean
  addView: boolean
  addViewFn: Function
}

export function CurationFooter({ connectionStatus, addView, addViewFn }: FooterProps) {
  return (
    <div className="h-fit h-[100px] w-full border-2 border-blue-500">
      {connectionStatus ? (
        <>
          {!addView ? (
            <div className="flex h-fit w-full flex-row flex-wrap justify-center ">
              {/* <button onClick={() => addListingWrite}className="bg-black p-2 text-white">
                    ADD LISTING
                    </button> */}
              <button className="bg-black p-2 text-white" onClick={() => addViewFn(true)}>
                {'ADD ->'}
              </button>
            </div>
          ) : (
            <div className="flex h-fit w-full flex-row flex-wrap justify-center">
              {/* <button onClick={() => addListingWrite}className="bg-black p-2 text-white">
                    ADD LISTING
                    </button> */}
              <button className="border-2 border-black p-2 text-white">
                {'ADD A CONTRACT'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <div className="b h-fit w-full flex-row flex-wrap justify-center text-sm ">
            <div className="item-end flex h-fit w-full flex-row flex-wrap justify-center">
              <button className=" bg-black p-2 text-white">PLACEHOLDER CONNECT</button>
            </div>
          </div>

          <div className="h-fit w-full flex-row flex-wrap justify-center border-2 border-black text-sm ">
            <div className=" flex flex-row justify-center">
              {'Dont have a wallet? Click '}
              <a className="font-bold"> {' ' + 'here' + ' '} </a>
              {' to get one '}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
