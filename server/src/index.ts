import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.post('/admin',async (req,res)=>{
    try{
        const paper = await prisma.questionPaper.create({
            data:{
                title : req.body.title,
            }
        });
        res.send(paper.id);
    }
    catch(error){
        res.send("error");
    }
});

app.post('/admin/:paperId',async (req,res)=>{
    try{
        const paper = await prisma.questionPaper.findFirst({
            where:{
                id:req.params.paperId,
            },
        })
        if(!paper){
            res.send("not found");
            return ;
        }
        const addquestion = await prisma.question.create({
            data:{
                question:req.body.question,
                option1:req.body.option1,
                option2:req.body.option2,
                option3:req.body.option3,
                option4:req.body.option4,
                answer:req.body.answer,
                paperId:req.params.paperId,
            }
        });
        res.send(addquestion);
    }
    catch(error){
        res.send("error");
    }
});

app.get('/home/:paperId',async (req,res)=>{
    try{
        const value = await prisma.question.findFirst({
            where:{
                paperId:req.params.paperId,
                id:req.body.id,
            },
        });
        if (!value) {
            res.send("not found");
            return;
        }
        const answer = value.answer;
        if(answer === req.body.answer){
            res.send("correct");
        }
        else{
            res.send("incorrect");
        }
    }
    catch(error){
        res.send("error")
    }
});
app.post('/home',async (req,res)=>{
    try{

    }
    catch(error){
        res.send("error");
    }
})
app.listen(3000);
