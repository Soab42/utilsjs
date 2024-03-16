import { Outlet } from "react-router-dom";
import LeftBar from "../common/LeftBar";
export default function PageLayout() {
  return (
    <div className="flex gap-2  p-5  min-h-[90vh] -z-10">
      <div className="min-w-[15%] h-[90vh] fixed  min-h-full">
        <LeftBar />
      </div>
      <div className="ml-[20%] w-full">
        <Outlet />
      </div>
      {/* <div className="min-w-[15%] right-[10%] h-[90vh] fixed border-l-2 min-h-full -z-10">
        <RightBar />
      </div> */}
    </div>
  );
}
