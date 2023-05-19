import {itemReduserType} from '../../types/types'

const state:itemReduserType = {
    items:[
        {
            id:0,
            unitPrice:0,
            quantity:0,
            discription:'',
        }
    ]
    
}


export const itemReduser = (state:itemReduserType , action: any) => {
    
  let lastCount: number = 0;
  let lastQuantity: number = 0;

  switch (action.type) {
    case "addItem":
      return {
        ...state,
        discription: action.payloard.discription,
        unitPrice: action.payloard.unitPrice,
        quantity:  action.payloard.quantity,
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
