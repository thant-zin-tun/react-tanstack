import { count } from "console";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface AuthState {
  isAuthenticate: boolean;
}

interface AuthAction {
  authenticated_success: () => void;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticate: false,
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    immer<AuthState & AuthAction>((set) => ({
      isAuthenticate: false,
      authenticated_success: () => {
        set((state) => {
          state.isAuthenticate = true;
        });
      },
      logout: () => {
        set(initialState);
      },
    })),
    {
      name: "authState",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticate: state.isAuthenticate,
      }),
    }
  )
);

//Usage in Components
// const { counter, increaseCounterFunc, decreaseCounterFunc, resetFunc } =
//     useFeatureStore((state) => state);
