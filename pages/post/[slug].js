import React from "react";
import { 
    PostDetail, Categories, 
    PostWidget, Author,
    Comments, CommentsForm, 
    Loader } 
from '../../components';
import { getPosts, getPostDetails } from "../../services";

const PostDetails = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail />
                    <Author />
                    <CommentsForm />
                    <Comments />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <PostWidget />
                    <Categories />
                </div>
            </div>

        </div>
    )
}

export default PostDetails