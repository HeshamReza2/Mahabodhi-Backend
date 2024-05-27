const express = require('express')
const router = express.Router()

const { getAllStudents, findStudentUsingAnyField, addStudent, updateStudent, deleteStudent } = require('../Controller/StudentsControl')
const { getAllStates, getStatesByTypes, getStatesByName, addStates, updateStates, deleteStates } = require('../Controller/StatesControl')


//student routes
router.get('/students', getAllStudents) //get all students list
router.post('/find-student-any-field', findStudentUsingAnyField) //get all students list using a field
router.post('/add-student', addStudent) //add a student
router.patch('/update-student/:postId', updateStudent) //update a student data
router.delete('/delete-student/:postId', deleteStudent) // delete a students data


//states routes
router.get('/states', getAllStates) //get all states list
router.post('/find-states', getStatesByTypes) //get all states list using type
router.post('/search-states', getStatesByName) //get all states list using type
router.post('/add-states', addStates) //add a states
router.patch('/update-states/:postId', updateStates) //update a states data
router.delete('/delete-states/:postId', deleteStates) // delete a states data




module.exports = router