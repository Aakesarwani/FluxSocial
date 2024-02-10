import mysql from "mysql"

export const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "AK#2910muskan",
    database:"social"
})