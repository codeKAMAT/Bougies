import { Container, Typography, Grid } from '@material-ui/core'
import logo from './bg.jpeg'
import './style.css'

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography className='title' variant='h1'>
                Get the natural Scents in your <span>Homes</span>
              </Typography>
            </Grid>
            <Grid className='brand' item sm={6}>
              <img src={logo} alt='Brand-tv' />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Banner
