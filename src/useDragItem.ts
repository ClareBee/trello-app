import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./dragItem";

// item - data about dragged item
// begin - called when dragging starts
// end - called on release
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  });
  return { drag };
};
