import {createStore} from 'redux'
import {itemReduser} from '../redusers/itemReduser'


export const store:any = createStore(itemReduser)