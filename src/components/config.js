let config = {
  DEV: {
    apiUrl: 'http://localhost:8080'
  },
  PRODUCTION: {
    apiUrl: 'https://oleksandr.bolgarov.org/api'
  }
}

export default process.env.NODE_ENV ? config[process.env.NODE_ENV] : config['DEV']
