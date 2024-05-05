import { create } from "zustand";

const usePost = create((set) => ({
    posts: [],
    setPosts: (posts) => set({posts}),
    selectedPost: null,
    setSelectedPost: (selectedPost) => set({selectedPost}),
    comments: [],
    setComments: (comments) => set({comments}),
    selectedPostId: null,
    setSelectedPostId: (selectedPostId) => set({selectedPostId}),

}))

export default usePost;
