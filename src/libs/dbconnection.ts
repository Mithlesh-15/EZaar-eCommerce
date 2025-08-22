import mongoose from "mongoose";
let isConnetcted = 0;

export const Connect = async (): Promise<void> => {
    if(isConnetcted) return
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI! || " ")
      isConnetcted = db.connection.readyState;
    } catch (error) {
        console.log("There's an issue with the DB connection.", error)
        process.exit()
    }
};

