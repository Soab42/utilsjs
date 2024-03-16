import { useDeleteDataMutation } from "@features/guide/guideApi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";

export default function Img({ data, id }) {
  const [deleteData] = useDeleteDataMutation();
  const dashboard = usePathname().startsWith("/dashboard");
  return (
    <div className={`${dashboard && "hover:ring-1"} flex relative p-2 pr-4`}>
      <div className="image flex justify-center">
        <Image
          src={data}
          width={1000}
          height={100}
          className={`bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500`}
          alt={data}
        />
      </div>
      {dashboard && (
        <div
          className="absolute -right-0 top-0 bg-slate-400/20 opacity-25 cursor-pointer hover:opacity-100"
          onClick={() => deleteData(id)}
        >
          <MdClose />
        </div>
      )}
    </div>
  );
}
