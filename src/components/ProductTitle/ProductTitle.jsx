import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './styles'

const ProductTitle = () => {
  const classes = useStyles()
  return (
    <main id='products' className={classes.content}>
      <div className={classes.toolbar} />

      <div className={classes.productTitle}>
        <Container>
          <Typography className={classes.title} variant='h3'>
            Products
          </Typography>
        </Container>
      </div>
    </main>
  )
}

export default ProductTitle
