"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.post('/admin', async (req, res) => {
    try {
        const paper = await prisma.questionPaper.create({});
        const question = await prisma.question.create({
            data: {
                question: req.body.question,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4,
                answer: req.body.answer,
                paperId: paper.id,
            }
        });
        res.send(question.id);
    }
    catch (error) {
        res.send("error");
    }
});
app.post('/admin/:paperId', async (req, res) => {
    try {
        const paper = await prisma.questionPaper.findFirst({
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
                paperId: req.params.paperId,
            }
        });
        res.send(addquestion);
    }
    catch (error) {
        res.send("error");
    }
});
app.get('/home/:paperId', async (req, res) => {
    try {
        const value = await prisma.question.findFirst({
            where: {
                paperId: req.params.paperId,
                id: req.body.id,
            },
        });
        if (!value) {
            res.send("not found");
            return;
        }
        const answer = value.answer;
        if (answer === req.body.answer) {
            res.send("correct");
        }
        else {
            res.send("incorrect");
        }
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
app.listen(3000);
