export default {
  mongo: {
    url: 'mongodb://127.0.0.1:27017',
    dbName: 'mighty-jaxx'
  },
  express: {
    port: 3010,
    fileLimit: "520kb",
    collection: {
      user: "user",
      product: "product"
    }
  }
}