
import {create} from "zustand"

type NewCategotyState = {
    isOpen :boolean;
    onOpen : ()=>void;
    onClose: ()=> void;
}


export const useNewCategory = create<NewCategotyState>((set) =>({
    isOpen: false,
    onOpen: ()=>set({isOpen: true}),
    onClose: ()=>set({isOpen: false}),
}))