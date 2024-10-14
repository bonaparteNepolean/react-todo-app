import express from "express";
import cors from "cors";
import { Todo, connectDb } from "./db.js";
import { createTodo } from "./types.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
    const data = req.body;
    const parsedData = createTodo.safeParse(data);
    if (!parsedData.success) {
        res.json({
            msg: "Wrong inputs",
        });
    }
    await Todo.create({
        title: data.title,
        description: data.description,
        completed: false,
    });
    res.json({
        msg: "Todo created",
    });
});

app.put("/update", async (req, res) => {
    const data = req.body;

    await Todo.updateOne(
        {
            _id: data.id,
        },
        {
            completed: true,
        }
    );

    res.json({
        msg: "Todo Updated successfully",
    });
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({});
    res.json({
        todos: todos,
    });
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});
connectDb();
