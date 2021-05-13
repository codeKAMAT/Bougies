import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        This is a Dummy Web App, Build for learning purpose.
        <br />
        Design and Developed by{' '}
        <a
          href='http://sachinkamat.me'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          SACHIN KAMAT
        </a>{' '}
        .
      </p>
    </footer>
  )
}

export default Footer
