import PropTypes from 'prop-types';
import { useAuth } from '../providers/auth'

interface PrivateRouteProperties {
  children: React.ReactNode;
}
// eslint-disable-next-line consistent-return
const PrivateRoute: React.FC<PrivateRouteProperties>  = ({ children }) => {
  const { token }  = useAuth()
  if (token) {
    return children;
  }
  window.location.assign(import.meta.env.VITE_OAUTH_URL as string)

}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
