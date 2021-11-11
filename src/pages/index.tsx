import { Box, chakra } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
//import {Schema$Volumes, Schema$Volume, Schema$Volumeseriesinfo} from '@types'
//import 'isomorphic-fetch'

export default function index(props: Schema$Volumes) {
  /*return (
    <div>
      <h1>表示</h1>
      <ul>
        {props.posts.map((item) => {
          return <li key={post.id}>{post.title}</li>;
          return (
            <li key={item.id}>
              {item.volumeInfo.title} {item.volumeInfo.publishedDate}
            </li>
          )
        })}
      </ul>
    </div>
  )*/
}

export async function getServerSideProps() {
  //const url = 'https://jsonplaceholder.typicode.com/posts';
  const url = encodeURI(
    'https://www.googleapis.com/books/v1/volumes?q=intitle:恋染紅葉&orderBy=newest'
  )
  const res = await fetch(url)
  const posts: Schema$Volumes = await res.json()
  //render使っての処理を考える
  const props: Schema$Volume = posts.items
  console.log(props)
  //const stars = json.stargazers_count;
  return {
    props: {
      //stars,
      //posts: posts,
      posts
    }
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
