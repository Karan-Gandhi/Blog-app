import express from "express";
import { config } from "dotenv";
import cors from "cors";
import AuthRouter from "./routes/AuthRoutes";
import APIRouter from "./routes/APIRoutes";
import { createBlog } from "./utils/BlogUtils";
import { searchUserByEmail } from "./utils/UserUtils";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

config();

app.get("/", (_, res) => {
	res.send("Hello, world");
});

app.use("/auth", AuthRouter);
app.use("/api", APIRouter);

const server = app.listen(PORT, () => console.log("[S] Server started at port: " + PORT));
const gg = async () =>
	createBlog(
		"Hello world",
		1234,
		"This is a test content of the test blog",
		["Test", "My First Blog"],
		(await searchUserByEmail("karangandhi09@hotmail.com", 1000, ""))[0].id
	);

// gg();
