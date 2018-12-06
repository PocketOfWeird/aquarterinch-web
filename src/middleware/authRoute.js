import Firebase from 'firebase/app';
import 'firebase/auth';

const authRoute = (to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/welcome');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
};

export default authRoute;
