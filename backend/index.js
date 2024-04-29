//write basic express bollerplate code,
// with express.json() middleware
const express = require("express");
const { createTodo } = require("./types");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post('/todos', async (req, res) => {
    const createpayload = req.body;
    const parsepayload = createTodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            message: "you send wrong input",
        })
        return;
    }
    await todo.create({
        tittle: createpayload.tittle,
        description: createpayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})



app.put('/completed', async (req, res) => {
    const updatepayload = req.body;
    const parsepayload = createTodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg: "you send wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    },
    {
        completed: true
    }
)
res.json({
    msg: "todo marked as completed"
})

})

// const port = process.env.PORT || 3000;
app.listen(3000);