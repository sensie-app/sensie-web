import React from 'react'
// import Title from '../components/Title/Title'
import IframeResizer from 'iframe-resizer-react'
// import { Box, makeStyles, Grid } from '@material-ui/core'

// const useStyles = makeStyles({
//   background: {
//     height: '768px',
//     backgroundColor: '#071215'
//   }
// })

const Blog = () => {
  // const classes = useStyles()
  return (
    <IframeResizer
      src="http://sensieapp.com/blog"
      scrolling="yes"
      style={{ width: '100%', minWidth: '100%', minHeight: '1000px', overflow: 'scroll' }}
    />
  )
}

export default Blog
