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
  window.open('https://pshrrdazlftosdtoevpf.supabase.co/auth/v1/authorize?provider=google', '_blank', 'height=500,width=500');
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
