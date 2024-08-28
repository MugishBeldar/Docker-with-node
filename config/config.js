module.exports = {
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASWD: process.env.MONGO_PASWD,
  MONGO_IP: process.env.MONGO_IP || 'mongodb',
  MONGO_PORT: process.env.MONGO_PORT || '27017', 
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'mydb',
};
