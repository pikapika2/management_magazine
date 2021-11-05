import { Box, chakra } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default function index(props) {
  return (
    <div>
      <h1>表示</h1>
      <ul>
        {props.posts.items.map((item) => {
          //return <li key={post.id}>{post.title}</li>;
          return <li key={item.id}>{item.selfLink}</li>
        })}
      </ul>
    </div>
  )
}
 
//const url = "https://api.github.com/repos/zeit/next.js";
export async function getServerSideProps() {
  //const url = 'https://jsonplaceholder.typicode.com/posts';
  const url = encodeURI('https://www.googleapis.com/books/v1/volumes?q=紅葉')
  const res = await fetch(url)
  const posts = await res.json()
  console.log(posts)
  //const stars = json.stargazers_count;
  return {
    props: {
      //stars,
      posts: posts,
    },
  }
}

{
  /*
export default function HomePage() {
  return (
    <Box>
      <chakra.h1 color="tomato">Hello world</chakra.h1>
    </Box>
  )
}
*/
}

{
  /*
  render() {
    return (
      <div>
        <h1>Hello Next.js</h1>
        <p>JPY/USD = {this.props.data}</p>
        <Link href="/about"><a>About</a></Link>
      </div>
    );
  }
}
*/
}
