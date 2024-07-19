const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index')
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password


    Admin.create({
        username: username,
        password: password
    }).then(() => [
        res.json({
            message: "admin created succussfully"
        })
    ])


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;


    const newCourse = await Course.create({
        title, description, imageLink, price
    })
    console.log(newCourse)
    res.json({
        messege: "course created succussfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware,  async(req, res) => {
    // Implement fetching all courses logic

     const response  = await Course.find({})
     res.json({
        courses: response
    })


});

module.exports = router;