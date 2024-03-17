import Nodata from "../../assets/icons/nodatafound.png";
export default function NoDataFound() {
  return (
    <div className="w-full h-full flex-center">
      <img src={Nodata} alt="NoData" />
    </div>
  );
}
