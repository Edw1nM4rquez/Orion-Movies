import About from './About';
import Home from './Home'
import Login from './Login';

    const routesPublic = [
        {path: '/', element:<Home></Home>},
        {path: '/login', element:<Login></Login>},
        {path: '/about', element:<About></About>}
    ];
    

export default routesPublic;