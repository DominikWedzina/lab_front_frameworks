import { FC } from 'react'
import { Link } from 'react-router-dom'

interface TopBarProps {
  
}

const TopBar: FC<TopBarProps> = ({}) => {
  return <div>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/bookings"}>Bookings</Link></li>
      <li><Link to={"/settings"}>Settings</Link></li>
    </ul>
  </div>
}

export default TopBar