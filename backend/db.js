import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://wtfdevil666:1234@cluster0.gx6zh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDb connected");
    } catch (error) {
        console.log("Error", error.message);
    }
};

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

export const Todo = mongoose.model("Todo", todoSchema);
