import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      email.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    // connection with database
    try {
      client = await MongoClient.connect(
        "mongodb+srv://manojthulung:thulungmanoj@cluster0.ewaqcmh.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Database connection failed." });
      return;
    }

    const dbName = "my-blog"; //database name
    const db = client.db(dbName);

    //data insertion in database
    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed to insert data." });
      return;
    }

    client.close();
    res.status(201).json({ message: "Message sent successful." });
  }
}

export default handler;
