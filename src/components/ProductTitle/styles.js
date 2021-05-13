import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productTitle: {
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    color: 'rgb(255, 115, 0)',
    fontWeight: '900',
  },
}))
