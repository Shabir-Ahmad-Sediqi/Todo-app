import { Sequelize } from "sequelize";;
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres'
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('✅ Connected to PostgreSQL With Sequelize"')
    })
    .catch((error) => {
        console.log(`❌ Unable to Connect to the database ${error}`);
    })

export default sequelize
