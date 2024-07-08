import usePortal from "../../../hooks/usePortal";

export default function Loading() {
  const Portal = usePortal("portal");

  return (
    <Portal>
      <div className="w-screen h-screen fixed flex-center ">
        <div className="flex justify-center item-center rounded-full">
          <div className="animate-pulse size-56 ring-4 flex justify-center items-center rounded-full">
            <div className="animate-ping size-56  ring-4 flex justify-center items-center rounded-full">
              <div className="animate-ping size-28 rounded-full bg-blue-400/20 ring-4"></div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
