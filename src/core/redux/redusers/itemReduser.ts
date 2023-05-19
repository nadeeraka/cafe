export const itemReduser = (state: any = [], action: any) => {
  let lastCount: number = 0;

  switch (action.type) {
    case "addItem":
      return {
        ...state,
        discription: action.payloard.discription,
        price: action.payloard.price,
        quantity:action.payloard.quantity,
        count: ++lastCount,
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
