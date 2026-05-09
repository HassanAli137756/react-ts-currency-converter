
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
            name: 'Contact-Me',
            path: '/contact'
        },
        {
            name: 'Logout',
            path: '/logout'
        },
    ]


  return(
    <div>
        <div className="p-4 font-bold flex justify-evenly gap-10 bg-black ">
        {
            links.map(link =>
            {
                return(
                <NavLink
                key={link.path}
                to={link.path}
                className={({isActive}) => `font-bold text-2xl  ${isActive ? 'text-cyan-500' : 'text-white'} hover:text-cyan-200  transition-all duration-300`}
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


