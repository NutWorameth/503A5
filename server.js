const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json());

const hospitals = require("./routes/hospitals");
app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});