const Sample=require('../model/model')
const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 const getsample = async (request, response) => {
    try{
        const datas = await Sample.find();
        response.status(200).json(datas);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

 const addsample = async (req, res) => {
     names=req.body.name
     ages=req.body.age
        const newSample = new Sample({
        name: names,
        age: ages,
      });
    
      newSample
        .save()
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
}


 const updatesample = async (req, response) => {
    Sample.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          age: req.body.age,
        }
      )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
}

 const deletesample = async (req, response) => {
    Sample.findByIdAndDelete({ _id: req.params.id })
    .then(() => console.log("updated succesfully"))
    .catch((err) => console.log(err));
}
module.exports={getsample,addsample,updatesample,deletesample};