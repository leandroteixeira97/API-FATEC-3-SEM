import { Sequelize } from "sequelize-typescript";
import User from "../model/User";
import Profile from "../model/Profile";

import * as dotenv from "dotenv";
dotenv.config({ path: 'backend/.env' });

const connection = new Sequelize(
    
    `${process.env.POSTGRES_DATABASE}`,
    `${process.env.POSTGRES_USER}`,
    `${process.env.POSTGRES_PASSWORD}`,
    
    {
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        models: [ User, Profile ]
    }
)

export default connection;