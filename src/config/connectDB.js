const { Sequelize } = require('sequelize');
require('dotenv').config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    'dnk76uvkpsrp0',
    'pgbcxytrmokvtb',
    '1db9bfebb9450ef08ec554a0b634aa30f9a1985ff9df068f6e0032fa6df1180c', {
    host: 'ec2-3-231-254-204.compute-1.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;