import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { makeStyles, Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

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
  content: {
    textAlign: '-webkit-left',
    width: '90%'
  },
  text: {
    color: 'white',
    fontSize: '22px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'justify',
    height: '200px'
  },
  postItem: {
    float: 'left',
    display: 'block',
    marginRight: '2.84259%',
    width: '100%',
    padding: '5vh 5%'
  },
  postDate: {
    fontSize: '16px !important',
    fontStyle: 'italic',
    fontWeight: 'lighter',
    padding: '0',
    paddingBottom: '15px',
    color: '#989898'
  },
  postTitle: {
    fontWeight: '500',
    fontSize: '32px',
    margin: '0',
    marginTop: '8px',
    marginBottom: '10px',
    color: '#767676'
  },
  postContent: {
    textAlign: 'justify',
    marginBottom: '5px',
    position: 'relative',
    color: '#989898',
    fontSize: '19px'
  },
  postAuthor: {
    fontWeight: '500',
    fontSize: '22px',
    margin: '0',
    marginTop: '0px',
    paddingTop: '10px',
    marginBottom: '0px',
    color: '#15E7BC'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #15E7BC',
    boxShadow: '5px #000',
    padding: '2px 4px 3px',
    width: '80%',
    height: '80%'
  },
  link: {
    fontWeight: '500',
    fontSize: '29px',
    color: 'white',
    '&:hover': {
      color: '#15E7BC',
      cursor: 'pointer'
    }
  },
  piePaginate: {
    '& > *': {
      marginTop: '25px',
      justifyContent: 'center',
      display: 'flex'
    },
    marginBottom: '25px'
  },
  articleExcerpt: {
    fontSize: '2rem',
    lineHeight: '1.4em',
    opacity: '.6',
    width: '800px',
    margin: '0 auto',
    paddingBottom: '25px'
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
    const url = `${process.env.REACT_APP_BLOG_URL}posts/?key=${process.env.REACT_APP_BLOG_URL_CONTENT_KEY}&order=published_at%20desc&page=${id}&limit=6&include=authors`
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
        <Grid key={p.id} item xs={6}>
          <article className={classes.postItem}>
            <header className="post-header">
              <time className={classes.postDate} dateTime="2020-08-12">{handleParseDate(p.published_at)}</time>
              <h2 className={classes.postTitle}><span className={classes.link} onClick={() => handleOpenPost(p.slug)}>{p.title}</span></h2>
            </header>
            <section className={classes.postContent}>
              <p>
                {p.custom_excerpt || p.excerpt }
              </p>
            </section>
            <footer className="post-meta">
              <h3 className={classes.postAuthor}>{p.primary_author.name}</h3>
            </footer>
          </article>
        </Grid>
      )
    })
  }

  return (loading
    ? <div className={classes.backgroundLoading}><Loading /></div>
    : <div className={classes.background}>
      <div style={{ paddingTop: 125, width: '80%', margin: '0 auto' }}>
        <Grid container spacing={6} className={classes.background}>
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
