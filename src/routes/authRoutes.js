import React, { lazy } from 'react';
import { Switch, Route, Redirect,  } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));

const LoginRoutes = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <div>
      <Switch>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </motion.div>
      </Switch>
    </div>
  );
};

export default LoginRoutes;
