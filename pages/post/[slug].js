import React from "react";
import { 
    Header,
    PostDetail, Categories, 
    PostWidget, Author,
    Comments, CommentsForm, 
    Loader } 
from '../../components';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {

  // install route
    const router = useRouter();

    if (router.isFallback) {
      return <Loader />;
    }

    console.log(post);

    return (
      <>
        <Header />
        <div className="container mx-auto px-10 mb-8 mt-10"> 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} />
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {

    const data = await getPostDetails(params.slug);
    
    return {
      props: {
        post: data,
      },
    };
}
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();

    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
}