import {Outlet,Link} from 'react-router-dom'

const NavBar=()=> {
    
        return(
            <div>
               <nav>
                   <Link to='/UploadForm'>upload</Link>
                   <Link to='/Gallery'>hello</Link>
                   <div>logo</div>
               </nav>
               <Outlet />
               <div>
                search post
                <input type="text" />
               </div>
            </div>
        )
    
}

export default NavBar