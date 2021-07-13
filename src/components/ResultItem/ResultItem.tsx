import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./index.css";

interface Props {
  title: string;
  value: number;
  index: number;
}
const ResultItem: React.FC<Props> = ({ title, value, index }) => {
  return (
    <Draggable draggableId={String(index)} index={index}>
      {(provided) => (
        <li
          className="result"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-item">
            <p>
              {title}: <span>{String(value)}</span>
            </p>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default ResultItem;
