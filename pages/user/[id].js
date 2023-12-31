

function user({ data }) {
    return (
      <ul>
        {data.user.name}<br/>
        {data.user.email}
        <ul>
        {data.user.posts.map(post => (
          <li key={post.id}>
            {post.title} , {post.content}    
          </li>
        ))}
      </ul>
      </ul>
    )
  }
   
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // revalidation is enabled and a new request comes in
  export async function getStaticProps(context) {
    const id = context.params?.id
    const res = await fetch('http://localhost:5000/User/'+id)
    const data = await res.json()
    
    return {
      props: {
        data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }
   
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/User')
    const data = await res.json()
   
    // Get the paths we want to pre-render based on posts
    const paths = data.user.map((user) => ({
      params: { id: user.id.toString() },
    }))
   
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }
   
  export default user