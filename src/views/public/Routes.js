import About from './About';
import Home from './Home'
import Login from './Login';
import SingUp from './SingUp';

    const routesPublic = [
        {path: '/', element:<Home></Home>},
        {path: '/login', element:<Login></Login>},
        {path: '/about', element:<About></About>},
        {path: '/sign-up', element:<SingUp></SingUp>},
    ];
    

export default routesPublic;