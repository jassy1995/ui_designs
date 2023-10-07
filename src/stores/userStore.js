import { create } from "zustand";

const useGlobalStore = create((set) => ({
    data: {
        isSideNavOpen: false,
    },

    toggleSideNav: () =>
        set((state) => ({
            ...state,
            data: { ...state.data, isSideNavOpen: !state.data.isSideNavOpen },
        })),
    openCloseSideNav: (payload) =>
        set((state) => ({
            ...state,
            data: { ...state.data, isSideNavOpen: payload },
        })),
}));

export default useGlobalStore;
