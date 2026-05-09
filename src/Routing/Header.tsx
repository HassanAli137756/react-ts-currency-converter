
import { NavLink } from "react-router"

interface LinkStructure
{
    name: string
    path: string
}


function Header()
{
    const links:LinkStructure[] = 
    [
        {
            name: 'Converter',
            path: ''
        },
        {
            name: 'History',
            path: '/history'
        },
        {
            name: 'Logout',
            path: '/logout'
        },
    ]


  return(
    <div>
        <div className="p-6 font-bold flex justify-evenly gap-10 bg-pink-400 ">
        {
            links.map(link =>
            {
                return(
                <NavLink
                to={link.path}
                className={({isActive}) => `font-bold text-2xl ${isActive ? 'text-cyan-500' : 'text-white'}`}
                >
                    {link.name}
                </NavLink>
                )
            }
            )
        }
        </div>
    </div>
  )
}

export default Header


