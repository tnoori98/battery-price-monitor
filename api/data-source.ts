import { DataSource } from "typeorm";

let ApiDataSource: DataSource;

export const getDataSource = () => {
  if (!ApiDataSource) {
    ApiDataSource = new DataSource({
      type: "mariadb",
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.DB_PORT || "3306"),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        __dirname + "/models/*.ts",
      ],
      synchronize: false,
      logging: false,
      migrations: ["migration/*.js"],
      charset: "utf8mb4",
    });
  }
  return ApiDataSource 
};
