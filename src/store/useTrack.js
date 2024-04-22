import { create } from "zustand";

const useTrack = create((set) => ({
    selectedTrack: null,
    trackLists: [],
    isPlaying: false,
    setSelectedTrack: (selectedTrack) => set({selectedTrack}),
    setTrackLists: (trackLists) => set({trackLists}),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useTrack;