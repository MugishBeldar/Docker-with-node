module.exports = {
  MONOG_USER: process.env.MONGO_USER,
  MONGO_PASWD: process.env.MONGO_PASWD,
  MONGO_IP: process.env.MONGO_IP || 'mongodb',
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_DATABASE: 'mydb',
}