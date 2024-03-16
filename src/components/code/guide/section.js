import {
  useDeleteDataMutation,
  useEditDataMutation,
} from "@features/guide/guideApi";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiFillLeftCircle, AiOutlineMenuFold } from "react-icons/ai";
import {
  MdArrowLeft,
  MdArrowRight,
  MdArrowRightAlt,
  MdClose,
  MdEdit,
  MdMenuOpen,
} from "react-icons/md";
import { useSelector } from "react-redux";

export default function Section({ data, id }) {
  const [deleteData] = useDeleteDataMutation();
  const [editData] = useEditDataMutation();
  const editedDataContent = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dashboard = usePathname().startsWith("/dashboard");
  // console.log(dashboard);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    const editedData = { section: editedDataContent?.current?.innerHTML };
    editData({ id, data: editedData });
    setIsEditing(false);
  };
  return (
    <div
      className={`${
        dashboard && "hover:ring-1"
      } flex relative p-2 pr-4 flex-col `}
    >
      <EditableSection
        initialData={data}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleSave={handleSave}
        editedDataContent={editedDataContent}
      />
      {isEditing && (
        <button
          className="bg-blue-200 p-x-2 mt-4 hover:bg-black/20 w-20"
          onClick={handleSave}
        >
          Save
        </button>
      )}
      {dashboard && (
        <div
          className={`absolute -right-0 top-0 text-xl bg-slate-400/20 p-1 duration-1000 cursor-pointer animated-div`}
          style={{
            transition: "width 0.5s ease-in-out",
            width: isOpen ? (isEditing ? "70px" : "105px") : "30px",
          }}
        >
          {!isOpen ? (
            <div onClick={() => setIsOpen(!isOpen)}>
              <abbr title="Menu">
                <MdArrowLeft />
              </abbr>
            </div>
          ) : (
            <div
              className={`flex gap-2 justify-between ${
                isOpen ? "right" : "left"
              }`}
            >
              <div
                onClick={() => {
                  setIsOpen(!isOpen), setIsEditing(false);
                }}
                className="px-1 border-r-[2px]"
              >
                <abbr title="Hide Menu">
                  <MdArrowRight />
                </abbr>
              </div>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className=" text-gray-600 hover:text-green-900 duration-300 cursor-pointer flex border-r-[2px] px-0.5"
                >
                  <abbr title="Edit">
                    <MdEdit />
                  </abbr>
                </button>
              )}
              <button
                className="hover:text-red-900 text-gray-900 duration-300 cursor-pointer hover:opacity-100 flex px-1"
                onClick={() => deleteData(id)}
              >
                <abbr title="Delete">
                  <MdClose />
                </abbr>
                <hr />
              </button>
              <div />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function EditableSection({ initialData, isEditing, editedDataContent }) {
  return (
    <section>
      {isEditing ? (
        <div
          className="capitalize pr-4 p-2"
          contentEditable={isEditing}
          dangerouslySetInnerHTML={{ __html: initialData }}
          ref={editedDataContent}
        />
      ) : (
        <div
          className="capitalize pr-4"
          dangerouslySetInnerHTML={{ __html: initialData }}
        />
      )}
    </section>
  );
}
