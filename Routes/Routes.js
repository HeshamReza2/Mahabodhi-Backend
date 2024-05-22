const express = require('express')
const router = express.Router()

const { getAllStudents, findStudentUsingAnyField, addStudent, updateStudent, deleteStudent } = require('../Controller/StudentsControl')


//student routes
router.get('/students', getAllStudents) //get all students list
router.post('/find-student-any-field', findStudentUsingAnyField) //get all students list
router.post('/add-student', addStudent) //add a student
router.patch('/update-student/:postId', updateStudent) //update a student data
router.delete('/delete-student/:postId', deleteStudent) // delete a students data





module.exports = router