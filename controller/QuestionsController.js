const Question = require('../models/questions')
const Option = require('../models/options')

module.exports.create = async (req,res) => {
//  in this the question are created
    await Question.create(req.body, (err,ques) => {
            if(err){
                console.log("error in creating the question schema",err);
            }
        console.log(ques);
        res.send(ques);
    })
}

module.exports.viewDetails = async (req,res) => {
        console.log(req.params.id)

        const ques = await Question.findById(req.params.id).populate('options')
        
        if(ques){
            res.send(ques);
        }
        // handling the bad requests if that id does not exist
        else{
            res.send("Wrong id || Question does not exits");
        }
    // in this the details about the question is displayed
}

module.exports.deleteQuestion = async (req,res) => {
    // in this the question will be deleted
        const ques = await Question.findById(req.params.id).clone().catch((err) => { console.log(err)})
        if(ques){
            // delete all the option ⁉️ of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch((err) => { console.log(err)})
            // deleting all the option of that question
            await Option.deleteMany({question:req.params.id}).clone().catch((err) => { console.log(err)})
                res.send("Question deleted");    
        }
        //  if th at question of the given id does not exists then just sending a message
        else{
            res.send('Wrong id || Question does not exists')
        }
}