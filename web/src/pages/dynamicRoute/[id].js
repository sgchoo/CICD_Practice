import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://nestjs:4000/dynamicRoute/${id}`);
  const data = await res.text();

  const postData = {
    id,
    title: `Post ${id}`,
    content: `${data}`,
  };

  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
};

export default Post;
