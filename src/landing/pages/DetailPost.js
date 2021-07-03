import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import Loading from '../components/Loading'

const moment = require('moment')

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215',
    minHeight: '100vh',
    width: '100%'
  },
  backgroundLoading: {
    backgroundColor: '#071215',
    minHeight: '100vh',
    paddingTop: '20%',
    width: '100%'
  },
  postHeader: {
    marginBottom: '1em'
  },
  postDate: {
    fontSize: '16px !important',
    fontStyle: 'italic',
    fontWeight: 'lighter',
    padding: '0',
    color: '#989898'
  },
  byTag: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: '16px !important',
    marginLeft: '5px',
    marginRight: '5px',
    padding: '0',
    color: '#989898'
  },
  postAuthor: {
    fontWeight: '500',
    fontSize: '16px !important',
    margin: '0',
    padding: '0',
    color: '#989898'
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
      fontSize: '36px'
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
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await getPost(id)
    if (response?.data?.posts) {
      savePost(response.data.posts[0])
    }

    setLoading(false)
  }, [])

  const getPost = async (id) => {
    const url = `${process.env.REACT_APP_BLOG_URL}posts/slug/${id}/?key=${process.env.REACT_APP_BLOG_URL_CONTENT_KEY}&include=authors`
    const response = await axios.get(url)
    return response
  }

  const handleParseDate = date => {
    return moment((date || {})).format('LL')
  }

  return (loading
    ? <div className={classes.backgroundLoading}><Loading /></div>
    : <div className={classes.background}>
        <div className={classes.contentPost}>
          <header className={classes.postHeader}>
            <h1>{post.title}</h1>
            <time className={classes.postDate} dateTime="2020-08-12">{handleParseDate(post.published_at)}</time>
            <span className={classes.byTag}>by</span>
            <strong className={classes.postAuthor}>{post?.primary_author?.name}</strong>
          </header>
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
