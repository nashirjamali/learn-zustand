import { create } from 'zustand';

interface IBook {
  amount: number;
  title: string;
  updateAmount: (newAmount: number) => void;
}

export const useBookStore = create<IBook>((set, get) => ({
  amount: 40,
  title: 'Spiderman',
  updateAmount: (newAmount: number) => {
    const amountState = get().amount;

    set({ amount: amountState + newAmount });

    //is the same as:
    // set(state => ({ amount: newAmount + state.amount  }))
  }
}));
