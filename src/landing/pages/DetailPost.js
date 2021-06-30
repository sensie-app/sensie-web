import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215',
    height: '100%',
    width: '100%'
  },
  contentPost: {
    paddingTop: 125,
    width: '53%',
    margin: '0 auto',
    paddingBottom: 25,
    '& p': {
      color: 'white',
      textAlign: 'justify',
      fontSize: '22px',
      marginBottom: '25px',
      marginTop: '25px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Biotif", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important'
    },
    '& h1': {
      color: 'white',
      fontSize: '30px'
    },
    '& h2': {
      color: 'white',
      textAlign: 'justify',
      fontSize: '27px',
      marginBottom: '25px',
      marginTop: '25px'
    },
    '& blockquote': {
      color: 'white',
      textAlign: 'justify',
      fontSize: '22px',
      marginBottom: '25px',
      marginTop: '25px'
    },
    '& ul': {
      color: 'white',
      fontSize: '22px',
      marginLeft: 25
    },
    '& ol': {
      color: 'white',
      fontSize: '22px',
      marginLeft: 25
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto'
    },
    '& figure': {
      color: 'white',
      fontSize: '22px',
      marginBottom: 15
    }
  }
})

const DetailPost = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [post, savePost] = useState([])

  useEffect(async () => {
    const response = await getPost(id)
    if (response?.data?.posts) {
      savePost(response.data.posts[0])
    }
    // eslint-disable-next-line
  }, [])

  const getPost = async (id) => {
    const url = `http://34.218.243.39/ghost/api/v4/content/posts/slug/${id}/?key=4fdd7eafdb6084b6597e2c53d4`
    const response = await axios.get(url)
    return response
  }

  return (
    <div className={classes.background}>
      <button>Back</button>
      <div className={classes.contentPost}>
        <h1>{post.title}</h1>
        {post.feature_image !== null
          ? <img className={classes.articleImage} src={post.feature_image} alt="" />
          : null
        }
        <div className={classes.divPost2} dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </div>
  )
}

export default DetailPost
