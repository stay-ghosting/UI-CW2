import React from "react";
import { Event } from "../types/EventListData";

interface EditableTableRowProps {
  row: Event;
  onInputChange: (field: string, value: string | boolean) => void;
  onDelete: () => void;
  isEditable: boolean;
}

const EditableTableRow: React.FC<EditableTableRowProps> = ({
  row,
  onInputChange,
  onDelete,
  isEditable,
}) => {
  return (
    <tr className="bg-[#CACACA]">
      <td className="px-4 py-2">
        <input
          type="text"
          value={row.title}
          onChange={(e) => onInputChange("title", e.target.value)}
          className="py-1 pl-2 w-full rounded-md"
          disabled={!isEditable}
        />
      </td>
      <td className="px-4 py-2">
        <input
          type="text"
          value={row.date}
          onChange={(e) => onInputChange("date", e.target.value)}
          className="py-1 pl-2 w-full rounded-md"
          disabled={!isEditable}
        />
      </td>
      <td className="px-4 py-2">
        <input
          type="text"
          value={row.time}
          onChange={(e) => onInputChange("time", e.target.value)}
          className="py-1 pl-2 w-full rounded-md"
          disabled={!isEditable}
        />
      </td>
      <td className="px-4 py-2">
        <input
          type="text"
          value={row.category}
          onChange={(e) => onInputChange("category", e.target.value)}
          className="py-1 pl-2 w-full rounded-md"
          disabled={!isEditable}
        />
      </td>
      <td className="px-4 py-2 text-center">
        <input
          type="checkbox"
          checked={row.favourite}
          onChange={(e) => onInputChange("favourite", e.target.checked)}
        />
      </td>
      {!isEditable || (
        <td className="px-4 py-2 text-center">
          <button
            className="border p-2 rounded-md border-gray-500 hover:border-black hover:bg-gray-200 transition"
            onClick={onDelete}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default EditableTableRow;
