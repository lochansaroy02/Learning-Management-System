const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://chatgptapi13:Ma7rBJF07WCi6Xb5@cluster0.47ftwse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String 
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String ,
    purchesedCourses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course' 
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String, 
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}