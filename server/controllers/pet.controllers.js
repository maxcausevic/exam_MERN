const  Pet  = require('../models/pet.models')

    module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    module.exports.findAllPets = (req, res)=>{
        Pet.find().sort({petType:1})
            .then(allpets =>{
                res.json({results: allpets})
            })
            .catch(err=>{
                res.json(err)
            })
    }
    
    module.exports.createPet = (req, res)=>{
        Pet.create(req.body)
            .then(newPet=>{
                res.json({results: newPet})
            })
            .catch(err=>{
                console.log(err)
                res.json(err)
            })
    }
    
    module.exports.findOnePet = (req, res)=>{
        Pet.findOne({_id: req.params.id })
            .then(onePet=>{
                res.json({results: onePet})
            })
            .catch(err=>res.json(err))
    }
    
    module.exports.updateOnePet = (req, res)=>{
        Pet.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true, runValidators: true }
            )
            .then(updatedPet =>{
                res.json({results: updatedPet})
            })
            .catch(err=> res.json(err))
    }
    
    module.exports.deletePet = (req,res)=>{
        Pet.deleteOne({_id: req.params.id})
            .then(deletedPet =>{
                res.json({results: deletedPet})
            })
            .catch(err=> res.json(err))
    }
