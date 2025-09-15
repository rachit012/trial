// Environment configuration
const apiUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? `${window.location.origin}/api` : 'http://localhost:5000/api');

const socketUrl =
  import.meta.env.VITE_SOCKET_URL ||
  (import.meta.env.PROD ? window.location.origin : 'http://localhost:5000');

const config = {
  API_URL: apiUrl,
  SOCKET_URL: socketUrl,
  IS_DEV: import.meta.env.DEV || false,
  IS_PROD: import.meta.env.PROD || false
};

export default config;