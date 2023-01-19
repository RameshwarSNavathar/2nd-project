const express = require("express");
const router = express.Router();
const bookController=require("../controller/bookController")
const userController = require("../controller/userController");
const reviewController = require("../controller/reviewController");
const {authenticate,authorisation} = require("../middelwar/auth");



router.post("/register", userController.createUser);
router.post("/login",userController.userLogin)
router.post("/book",authenticate,bookController.createBook)
router.get("/books",authenticate,bookController.getbooks)
router.get("/books/:bookId",authenticate,authorisation,bookController.getBookById)
router.put("/books/:bookId",authenticate,authorisation,bookController.updateBook)
router.delete("/books/:bookId",authenticate,authorisation,bookController.deletebookbyId)
router.post("/books/:bookId/review",reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)


router.all("/*",function (req,res){
return res.status(404).send({status:false,message:"path not found"})
})

module.exports = router;