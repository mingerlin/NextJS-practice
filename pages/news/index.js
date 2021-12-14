// function NewsArticleList({ articles }) {
//   return (
//     <>
//       <h1>List of NewsArticleList</h1>
//       {articles.map((article) => {
//         return (
//           <div key={article.id}>
//             <h2>
//               {article.id} {article.title}|{article.category}
//             </h2>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default NewsArticleList;

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:4000/news");
//   const data = await res.json();

//   return {
//     props: {
//       articles: data,
//     },
//   };
// }

export default function News({ data }) {
  return (
    <>
      <h1 className="content">{data}</h1>
      <div>Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}</div>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("running getStaticProps", context.previewData);
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    "Connecting to database with user: ",
    user,
    " and password: ",
    password
  );
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
