import { Middleware } from '@nuxt/types';

const authRequired: Middleware = ({ store, redirect }) => {
  // Use context
  // If the user is not authenticated
  if (!store.state.auth) {
    redirect('/login');
  }
};

export default authRequired;
