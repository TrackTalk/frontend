import { create } from "zustand";

const useTrack = create((set) => ({
    selectedTrack: null,
    selectedPostTrack: null,
    trackList: [],
    isPlaying: false,
    setSelectedTrack: (selectedTrack) => set({selectedTrack}),
    setSelectedPostTrack: (selectedPostTrack) => set({selectedPostTrack}),
    setTrackList: (trackList) => set({trackList}),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useTrack;