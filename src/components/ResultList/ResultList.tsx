import React, { useEffect, useState } from "react";
import ResultItem from "../ResultItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./index.css";

interface Result {
  operation: string;
  value: number;
}

interface Props {
  results: Result[];
}
const ResultList: React.FC<Props> = ({ results }) => {
  const [draggableResults, setDraggableResults] = useState(results);

  useEffect(() => {
    setDraggableResults(results);
  }, [results]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(results);
    const [removed] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, removed);
    setDraggableResults(items);
  };

  return (
    <div className="results">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="results">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {draggableResults.map((result, index) => (
                <ResultItem
                  key={index}
                  index={index}
                  title={result.operation}
                  value={result.value}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ResultList;
