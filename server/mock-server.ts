import express from 'express';


const app = express();

app.get('/students', (req,res) => {
    res.status(200).json([
        {
            first_name: "Wesley",
            last_name: "Waters",
            classroom_id: 1,
            num_claps: 0
        },
        {
            first_name: "Jonah",
            last_name: "Weinbaum",
            classroom_id: 1,
            num_claps: 0
        },
        {
            first_name: "Jessica",
            last_name: "Vo",
            classroom_id: 2,
            num_claps: 0
        }
    ])
}) 

export default app;