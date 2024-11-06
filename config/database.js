import { Sequelize } from "sequelize";

const db = new Sequelize("capstone_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
