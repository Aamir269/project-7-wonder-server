const router = require("express").Router();
const mongoose = require("mongoose");

const Wonder = require("../models/Worder.model");
const Review = require("../models/Review.model")

router.get("/wonder", async(req, res) => {
    try{
        let allWonder = Wonder.find().populate("WorderCities");
        res.json(allWonder);
    }catch(error){
        res.json(error);
    }
});

router.get('/wonder/:id', async(req, res) =>{
    const {id} = req.params;
    try{
        let foundWonder = await Wonder.findById(id).populate('WorderCities');
        res.json(foundWonder);
    }catch(error){
        res.json(error);
    }
});

router.get("/wonders/:id/reviews", async(req, res) =>{
    const { description } = req.body;

    try{
        let response = await Review.create({description});
        res.json(response);
    }catch(error){
        console.log(error);
    }
});

router.post("/wonders/:id/reviews", async(req,res) =>{
    const {reviewId} = req.params;
    const {name, description, location} = req.body;

    try{
        let newReview = await Review.create({description, name, location, review: reviewId });
        let response = await Review.foundByIdAndUpdate(reviewId, {$push:{reviews: newReview.id}});
    }catch(error){
        res.json(error);
    }
});

router.put('/wonders/:id/reviews/:reviewId', async(req, res) => {
 const { reviewId } = req.params;
 const { description } = req.body;

 try{
    let updateReview = await Review.foundByIdAndUpdate(reviewId, {description}, {new: true});
    res.json(updateReview);
 }catch(error){
    res.json(error);
 }
});

router.delete("/wonders/:id/reviews/:reviewId", async(req, res) => {
    const {reviewId} = req.params;

    try{
        await reviewId.foundByIdAndDelete(reviewId);
        res.json({message: 'Wonder Point Delected'});
    }catch(error){
        console.log(error);
    }
});

module.exports = router;