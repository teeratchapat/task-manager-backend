import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import taskRoutes from "./routes/task.routes";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
