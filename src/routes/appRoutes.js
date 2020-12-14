import { motion } from 'framer-motion';
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

const AppRoutes = () => {

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
          <Route path="/Home" component={Home} />
          <Route path="/PropertyDetails/:id" component={PropertyDetails} />
        </motion.div>
      </Switch>
    </div>
  );
}

export default AppRoutes