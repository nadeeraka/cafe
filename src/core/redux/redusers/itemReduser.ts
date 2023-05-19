import { itemReduserType } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

// v4()

const initialState: itemReduserType = {
  items: [
    {
      id: "",
      unitPrice: 0,
      quantity: 0,
      discription: "",
    },
  ],
};

export const itemReduser = (
  state: itemReduserType = initialState,
  action: any
) => {
  let lastCount: number = 0;

  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: [
          {
            id: uuidv4(),
            discription: action.payloard.discription,
            unitPrice: action.payloard.unitPrice,
            quantity: action.payloard.quantity,
          },
        ],
      };
    case "removeItem":
      return {
        ...state,
        items: state.items.filter(
          (items: { id: any }) => items.id != action.payloard.id
        ),
        id: ++lastCount,
      };

    default:
      return state;
  }
};
