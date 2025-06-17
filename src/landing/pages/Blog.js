import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Pagination } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import Loading from '../components/Loading'
import userSvg from '../assets/img/user.svg'

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
  postCard: {
    padding: '25px',
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Biotif", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important',
    '& header': {
      color: '#FFF',
      '& .post-card-primary-tag': {
        color: '#15E7BC'
      }
    }
  },
  piePaginate: {
    '& li': {
      marginTop: '0'
    },
    '& li > button': {
      fontSize: '16px !important',
      lineHeight: '22px !important',
      '& > svg': {
        fontSize: '22px !important',
        lineHeight: '22px !important'
      }
    },
    '& > *': {
      marginTop: '25px',
      justifyContent: 'center',
      display: 'flex'
    },
    marginBottom: '25px'
  }
})

const Blog = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1)
  const [numpages, setNumPages] = useState(1)
  const [post, savePost] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const history = useHistory()

  useEffect(async () => {
    let valueInt = parseInt(id)

    if (!Number.isInteger(valueInt)) {
      valueInt = 1
      history.push(`/blog/${valueInt}`)
    }

    const response = await getPost(valueInt)

    if (response?.data?.posts) {
      if (valueInt !== page) {
        setPage(valueInt)
      }

      savePost(response.data.posts)
      setNumPages(response.data.meta.pagination.pages)
    }

    setLoading(false)
  }, [page])

  const handleChangePaginate = async (event, value) => {
    setPage(value)
    history.push(`/blog/${value}`)
  }

  const getPost = async (id) => {
    const url = `${process.env.REACT_APP_BLOG_URL}posts/?key=${process.env.REACT_APP_BLOG_URL_CONTENT_KEY}&order=published_at%20desc&page=${id}&limit=6&include=authors,tags`
    const response = await axios.get(url)
    return response
  }

  const handleOpenPost = id => {
    history.push(`/detail/${id}`)
  }

  const handleParseDate = date => {
    return moment((date || {})).format('LL')
  }

  const renderPost = () => {
    return post && post.map(p => {
      return (
        <Grid key={p.id} item xs={12} md={4}>
          <article className={`${classes.postCard} post-card post tag-getting-started`}>
            {p.feature_image &&
              <a className="post-card-image-link" onClick={() => handleOpenPost(p.slug)}>
                <img className="post-card-image" sizes="(max-width: 1000px) 400px, 800px" src={p.feature_image} alt={p.title} loading="lazy" />
              </a>
            }

            <div className="post-card-content">
              <a className="post-card-content-link" onClick={() => handleOpenPost(p.slug)}>
                <header className="post-card-header">
                  <div className="post-card-primary-tag">{p?.primary_tag?.name}</div>
                  <h2 className="post-card-title">{p.title}</h2>
                </header>
                <section className="post-card-excerpt">
                  <p>{p.custom_excerpt || p.excerpt }</p>
                </section>
              </a>

              <footer className="post-card-meta">
                <ul className="author-list">
                  <li className="author-list-item">
                    <div className="static-avatar">
                      <img className="author-profile-image" src={p?.primary_author?.profile_image ? p?.primary_author?.profile_image : userSvg} alt={p?.primary_author?.name} />
                    </div>
                  </li>
                </ul>
                <div className="post-card-byline-content">
                  <span>{p?.primary_author?.name}</span>
                  <span className="post-card-byline-date">
                    <time dateTime="2020-08-12">{handleParseDate(p.published_at)}</time>
                  </span>
                </div>
              </footer>
            </div>
          </article>
        </Grid>
      )
    })
  }

  return (loading
    ? <div className={classes.backgroundLoading}><Loading /></div>
    : <div className={classes.background}>
      <div style={{ paddingTop: 150, width: '80%', margin: '0 auto' }}>
        <Grid container spacing={6} className={`${classes.background} blog-container`}>
          {renderPost()}
          <Grid item xs={12}>
            <div className={classes.piePaginate}>
              <Pagination count={numpages} page={page} onChange={handleChangePaginate} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default Blog
