export default {
  mongo: {
    // url: 'mongodb://127.0.0.1:27017',
    url: 'mongodb+srv://admin:passw0rd@cluster0.hrjyfjo.mongodb.net/test',
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