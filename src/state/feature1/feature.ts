import { count } from "console";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface State {
  counter: 0;
}

interface Action {
  increaseCounterFunc: () => void;
  decreaseCounterFunc: (num: number) => void;
  resetFunc: () => void;
}

const initialState: State = {
  counter: 0,
};

export const useFeatureStore = create<State & Action>()(
  persist(
    immer<State & Action>((set) => ({
      counter: 0,
      increaseCounterFunc: () => {
        set((state) => {
          state.counter++;
        });
      },
      decreaseCounterFunc: (num) => {
        set((state) => {
          state.counter -= num;
        });
      },
      resetFunc: () => {
        set(initialState);
      },
    })),
    {
      name: "conunterState",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        counter: state.counter,
      }),
    }
  )
);

//Usage in Components
// const { counter, increaseCounterFunc, decreaseCounterFunc, resetFunc } =
//     useFeatureStore((state) => state);
