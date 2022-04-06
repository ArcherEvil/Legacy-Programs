import PropTypes from 'prop-types'
import Button from './button'

const Header = () => {

  return (
    <header className='header'>
      <h1>TaskTracker</h1>
      <Button
          color='green'
          text='Add'
          onClick=''
        />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header