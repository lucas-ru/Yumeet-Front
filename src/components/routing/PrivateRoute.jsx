import { Redirect, Route } from "react-router"

const PrivateRoute = ({authenticated, exact, path, children}) => {
    return (
        <Route exact={exact} path={path}>
            {authenticated ? children : <Redirect to="/login" />}
        </Route>
    )
}

export default PrivateRoute