import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>
        {post.id} {post.detail}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();

  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postId: `${post.id}`,
  //       },
  //     };
  //   });
  //   return {
  //     paths,
  //     fallback: false,
  //   };
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  // return 404 page when the url is not found
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generate page for /posts/${params.postId}`);

  return { props: { post: data } };
}
