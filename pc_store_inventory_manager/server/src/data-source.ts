import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Purchase } from "./entity/Purchase"
import { Computer } from "./entity/Computer"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "store_database",
    synchronize: true,
    logging: true,
    entities: [User, Purchase, Computer, Customer],
    migrations: [],
    subscribers: [],
})
