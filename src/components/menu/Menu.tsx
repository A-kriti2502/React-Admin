import { Link } from 'react-router-dom';
import './menu.scss';
import {menu} from "../../data";

const Menu = () => {
  return (
    <div className='menu'>

      {menu.map(item => (
          <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {
            item.listItem.map((listitem)=>(
              <Link to='/' className='listItem' key={listitem.id}>
                <img src={listitem.icon} alt="" />
                <span className='ListItemtitle'>{listitem.title}</span>
              </Link>
            ))
          }

        </div>
      ))}
      
    </div>
  )
}

export default Menu
