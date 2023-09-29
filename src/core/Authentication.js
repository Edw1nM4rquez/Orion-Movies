/**
 * Function to check if a user is logged in
 * @returns 
 */
export const isAuthenticated = () => {
    const token = sessionStorage.getItem('username');
    return token !== null;
  };