import db from "../database/db.js";
import { DataTypes } from "sequelize"

const userModel = db.define("users",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})

export default userModel