export const isAuthenticated = () => {
    const token = sessionStorage.getItem('username');
    return token !== null;
  };