"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/admin', async (req, res) => {
    try {
        const paper = await prisma.questionpaper.create({
            data: {
                title: req.body.title,
            }
        });
        res.json({ paperId: paper.id });
    }
    catch (error) {
        res.send("error");
    }
});
app.post('/admin/:paperId', async (req, res) => {
    try {
        console.log("Paper ID on server:", req.params.paperId);
        const paper = await prisma.questionpaper.findUnique({
            where: {
                id: req.params.paperId,
            },
        });
        if (!paper) {
            res.send("not found");
            return;
        }
        const addquestion = await prisma.question.create({
            data: {
                question: req.body.question,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4,
                answer: req.body.answer,
                paperid: req.params.paperId,
            }
        });
        console.log(addquestion);
        res.json(addquestion);
    }
    catch (error) {
        res.send("error");
    }
});
app.get('/home', async (req, res) => {
    try {
        const papers = await prisma.questionpaper.findMany();
        res.json(papers);
    }
    catch (error) {
        res.send("error");
    }
});
app.get('/test/:paperId', async (req, res) => {
    try {
        console.log(req.params.paperId);
        const value = await prisma.question.findMany({
            where: {
                paperid: req.params.paperId,
            },
        });
        if (!value) {
            res.send("not found");
            return;
        }
        res.json(value);
        // const answer = value.answer;
        // if(answer === req.body.answer){
        //     res.json("correct");
        // }
    }
    catch (error) {
        res.send("error");
    }
});
app.post('/home', async (req, res) => {
    try {
    }
    catch (error) {
        res.send("error");
    }
});
app.listen(4000);
