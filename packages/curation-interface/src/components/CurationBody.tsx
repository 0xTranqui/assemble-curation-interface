export type BodyProps = {
  /**
   * connectionStatus:
   */
  connectionStatus: boolean
  addView: boolean
  addViewFn: Function
}

export function CurationBody({
  connectionStatus,
  addView,
}: // addViewFn
BodyProps) {
  return (
    <div className="flex h-fit w-full flex-row flex-wrap content-start border-2 border-yellow-300 px-4">
      {connectionStatus ? (
        <>
          {!addView ? (
            <div className=" flex w-full flex-row flex-wrap justify-start border-2">
              <div className="w-full space-y-2 text-3xl">
                <div className="w-full">Curation</div>
                <div className="w-full">Manager</div>
              </div>
              <div className="mt-2 w-full text-xs">
                You have access to update the tracks on the Neosound playlist
              </div>
            </div>
          ) : (
            <div className=" flex w-full flex-row flex-wrap justify-start border-2">
              <div className="w-full space-y-2 text-3xl">
                <div className="w-full">Add</div>
                <div className="w-full">Tracks</div>
              </div>
              <div className="mt-2 text-xs">You can add up to 10 tracks at once</div>
            </div>
          )}
        </>
      ) : (
        <div className="flex w-full flex-row flex-wrap justify-start border-2 text-3xl">
          <div className="w-full space-y-2 text-3xl">
            <div className="w-full">Connect</div>
            <div className="w-full">wallet</div>
          </div>
          <div className="mt-2 w-full text-xs sm:text-sm">
            To access curation functionality
          </div>
        </div>
      )}
    </div>
  )
}
