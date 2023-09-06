// Write your code here
import {useState} from 'react'
import './index.css'

const Welcome = () => {
  const [subscribed, setSubscribed] = useState(false)

  const handleClick = () => {
    setSubscribed(!subscribed)
  }

  return (
    <div className={`welcome-container ${subscribed ? 'subscribed' : ''}`}>
      <h1 className="heading">Welcome</h1>
      <p>Thank you! Happy Learning</p>
      <button onClick={handleClick} type="button">
        {subscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}

export default Welcome
