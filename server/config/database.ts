import mongoose from "mongoose";

const URI = process.env.MONGODB_URL;
console.log(URI);

const connectDB = () =>
  mongoose.connect(
    `${URI}`,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("connected successfully to database");
    }
  );

export default connectDB;
