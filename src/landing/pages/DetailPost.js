import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

import Loading from '../components/Loading'
import userSvg from '../assets/img/user.svg'

const moment = require('moment')

const useStyles = makeStyles({
  background: {
    paddingTop: '150px',
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
  contentPost: {
    margin: '0 auto',
    paddingBottom: '25px',
    color: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Biotif", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important',
    '& article': {
      padding: '0',
      '& header': {
        '& .article-title': {
          color: '#FFF'
        },
        '& .article-tag': {
          color: '#15E7BC'
        }
      },
      '& .article-image img': {
        margin: 'auto'
      },
      '& .kg-bookmark-container': {
        background: 'hsl(0deg 0% 100%)',
        boxShadow: '0 2px 6px -2px rgb(255 255 255 / 10%), 0 0 1px rgb(255 255 255 / 63%)'
      },
      '& hr': {
        border: '1px solid #0C1D22'
      },
      '& iframe': {
        width: '800px',
        height: '500px'
      },
      '& a': {
        color: 'white'
      }
    }
  }
})

const DetailPost = () => {
  const classes = useStyles()
  const { id } = useParams()
  const [post, savePost] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id)
      if (response?.data?.posts) {
        savePost(response.data.posts[0])
        window.twttr.widgets.load()
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const getPost = async (id) => {
    const url = `${process.env.REACT_APP_BLOG_URL}posts/slug/${id}/?key=${process.env.REACT_APP_BLOG_URL_CONTENT_KEY}&include=authors,tags`
    const response = await axios.get(url)
    return response
  }

  const handleParseDate = date => {
    return moment((date || {})).format('LL')
  }

  return (loading
    ? <div className={classes.backgroundLoading}><Loading /></div>
    : <Grid container className={`${classes.background} blog-container`}>
        <div className={classes.contentPost}>
          <article className="article post">
            <header className="article-header gh-canvas">
              <section className="article-tag">{post?.primary_tag?.name}</section>
              <h1 className="article-title">{post.title}</h1>
              {post.custom_excerpt &&
                <p className="article-excerpt">{post.custom_excerpt}</p>
              }
              <div className="article-byline">
                <section className="article-byline-content">
                  <ul className="author-list">
                    <li className="author-list-item">
                      <span className="author-avatar author-profile-image">
                        <img className="author-profile-image" src={post?.primary_author?.profile_image ? post?.primary_author?.profile_image : userSvg} alt={post?.primary_author?.name} />
                      </span>
                    </li>
                  </ul>
                  <div className="article-byline-meta">
                    <h4 className="author-name">{post?.primary_author?.name}</h4>
                    <div className="byline-meta-content">
                      <time dateTime="2020-08-12">{handleParseDate(post.published_at)}</time>
                    </div>
                  </div>
                </section>
              </div>
            </header>

            {post?.feature_image &&
              <figure className="article-image">
                <img srcSet={`${post.feature_image} 300w,${post.feature_image} 600w,${post.feature_image} 1000w,${post.feature_image} 2000w`}
                  sizes="(min-width: 1400px) 1400px, 92vw"
                  src={post.feature_image}
                  alt={post.title} />
              </figure>
            }

            <section className="gh-content gh-canvas" dangerouslySetInnerHTML={{ __html: post.html }}></section>
          </article>
        </div>
      </Grid>
  )
}

export default DetailPost
