let config = {
  development: {
    apiUrl: 'http://localhost:8080'
  },
  production: {
    apiUrl: 'https://api.resume.bolgarov.org'
  }
};

export default process.env.NODE_ENV ? config[process.env.NODE_ENV] : config['production'];

// export default {
//   poop: 'poop'
// };
