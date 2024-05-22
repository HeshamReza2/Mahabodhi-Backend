const Students = require('../Model/Students')


//get all students data
exports.getAllStudents = async(req, res) => {
    try{
        const getAllStudents = await Students.find()
        res.json(getAllStudents)
    }
    catch (err){
        message: err
    }
}

//find student using any field
exports.findStudentUsingAnyField = async(req, res) => {
    const data = {
        field: req.body.field,
        value: req.body.value
    }
    try{
        const findStudentUsingAnyField = await Students.findOne({ [data.field]: data.value })
        res.json(findStudentUsingAnyField)
    }
    catch (err){
        message: err
    }
}

//add a student
exports.addStudent = async(req, res) => {
    const data = new Students({
        registration_no: req.body.registration_no,
        application_no: req.body.application_no,

        name: req.body.name,

        course: req.body.course,
        subject: req.body.subject,
        subject_2: req.body.subject_2,

        class: req.body.class,
        selected_in: req.body.selected_in,
        confidential_no: req.body.confidential_no,

        mobile: req.body.mobile,
        mobile_2: req.body.mobile_2,
        email: req.body.email,

        aadhar: req.body.aadhar,
        
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,

        dob: req.body.dob,
        blood_group: req.body.blood_group,
        gender: req.body.gender,
        religion: req.body.religion,
        category: req.body.category,
        sub_category: req.body.sub_category,
        minority: req.body.minority,
        economically_weak: req.body.economically_weak,
        domicile_state: req.body.domicile_state,
        domicile_certificate_no: req.body.domicile_certificate_no,

        permanent_state: req.body.permanent_state,
        permanent_district: req.body.permanent_district,
        permanent_address_vill: req.body.permanent_address_vill,
        permanent_address_post: req.body.permanent_address_post,
        permanent_address_police: req.body.permanent_address_police,
        permanent_pincode: req.body.permanent_pincode,

        correspondence_state: req.body.correspondence_state,
        correspondence_district: req.body.correspondence_district,
        correspondence_address_vill: req.body.correspondence_address_vill,
        correspondence_address_post: req.body.correspondence_address_post,
        correspondence_address_police: req.body.correspondence_address_police,
        correspondence_pincode: req.body.correspondence_pincode,

        secondary_school_name: req.body.secondary_school_name,
        secondary_board_name: req.body.secondary_board_name,
        secondary_passing_year: req.body.secondary_passing_year,
        secondary_subject: req.body.secondary_subject,
        secondary_roll_no: req.body.secondary_roll_no,
        secondary_marks_obtained: req.body.secondary_marks_obtained,
        secondary_marks_max: req.body.secondary_marks_max,

        senior_secondary_school_name: req.body.senior_secondary_school_name,
        senior_secondary_board_name: req.body.senior_secondary_board_name,
        senior_secondary_passing_year: req.body.senior_secondary_passing_year,
        senior_secondary_subject: req.body.senior_secondary_subject,
        senior_secondary_roll_no: req.body.senior_secondary_roll_no,
        senior_secondary_marks_obtained: req.body.senior_secondary_marks_obtained,
        senior_secondary_marks_max: req.body.senior_secondary_marks_max,

        photo: req.body.photo,
        signature: req.body.signature,
        secondary_marksheet: req.body.secondary_marksheet,
        senior_secondary_marksheet: req.body.senior_secondary_marksheet,
        leaving_certificate: req.body.leaving_certificate,
        caste_certificate: req.body.caste_certificate,
        ews_certificate: req.body.ews_certificate,
        university_provisional_offer_letter: req.body.university_provisional_offer_letter,
        undertaking: req.body.undertaking,
        aadhar_card: req.body.aadhar_card,

        payment_status: req.body.payment_status,
        payment_id: req.body.payment_id,
        payment_mode: req.body.payment_mode,

        transaction_id: req.body.transaction_id,
        transaction_no: req.body.transaction_no,
        transaction_data: req.body.transaction_data
    })
    try{
        const addStudent = await data.save()
        res.json(addStudent)
    }
    catch (err){
        message: err
    }
}



//update a student
exports.updateStudent  = async(req, res) => {
    try{
        const data = await Students.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    registration_no: req.body.registration_no,
                    application_no: req.body.application_no,
                    admission_status: req.body.admission_status,

                    name: req.body.name,

                    course: req.body.course,
                    subject: req.body.subject,
                    subject_2: req.body.subject_2,

                    class: req.body.class,
                    selected_in: req.body.selected_in,
                    confidential_no: req.body.confidential_no,

                    mobile: req.body.mobile,
                    mobile_2: req.body.mobile_2,
                    email: req.body.email,

                    aadhar: req.body.aadhar,
                    
                    father_name: req.body.father_name,
                    mother_name: req.body.mother_name,

                    dob: req.body.dob,
                    blood_group: req.body.blood_group,
                    gender: req.body.gender,
                    religion: req.body.religion,
                    category: req.body.category,
                    sub_category: req.body.sub_category,
                    minority: req.body.minority,
                    economically_weak: req.body.economically_weak,
                    domicile_state: req.body.domicile_state,
                    domicile_certificate_no: req.body.domicile_certificate_no,

                    permanent_state: req.body.permanent_state,
                    permanent_district: req.body.permanent_district,
                    permanent_address_vill: req.body.permanent_address_vill,
                    permanent_address_post: req.body.permanent_address_post,
                    permanent_address_police: req.body.permanent_address_police,
                    permanent_pincode: req.body.permanent_pincode,

                    correspondence_state: req.body.correspondence_state,
                    correspondence_district: req.body.correspondence_district,
                    correspondence_address_vill: req.body.correspondence_address_vill,
                    correspondence_address_post: req.body.correspondence_address_post,
                    correspondence_address_police: req.body.correspondence_address_police,
                    correspondence_pincode: req.body.correspondence_pincode,

                    secondary_school_name: req.body.secondary_school_name,
                    secondary_board_name: req.body.secondary_board_name,
                    secondary_passing_year: req.body.secondary_passing_year,
                    secondary_subject: req.body.secondary_subject,
                    secondary_roll_no: req.body.secondary_roll_no,
                    secondary_marks_obtained: req.body.secondary_marks_obtained,
                    secondary_marks_max: req.body.secondary_marks_max,

                    senior_secondary_school_name: req.body.senior_secondary_school_name,
                    senior_secondary_board_name: req.body.senior_secondary_board_name,
                    senior_secondary_passing_year: req.body.senior_secondary_passing_year,
                    senior_secondary_subject: req.body.senior_secondary_subject,
                    senior_secondary_roll_no: req.body.senior_secondary_roll_no,
                    senior_secondary_marks_obtained: req.body.senior_secondary_marks_obtained,
                    senior_secondary_marks_max: req.body.senior_secondary_marks_max,

                    photo: req.body.photo,
                    signature: req.body.signature,
                    secondary_marksheet: req.body.secondary_marksheet,
                    senior_secondary_marksheet: req.body.senior_secondary_marksheet,
                    leaving_certificate: req.body.leaving_certificate,
                    caste_certificate: req.body.caste_certificate,
                    ews_certificate: req.body.ews_certificate,
                    university_provisional_offer_letter: req.body.university_provisional_offer_letter,
                    undertaking: req.body.undertaking,
                    aadhar_card: req.body.aadhar_card,

                    payment_status: req.body.payment_status,
                    payment_id: req.body.payment_id,
                    payment_mode: req.body.payment_mode,

                    transaction_id: req.body.transaction_id,
                    transaction_no: req.body.transaction_no,
                    transaction_data: req.body.transaction_data
                }
            }
        )
        res.json(data)
    }
    catch (err){
        message: err
    }
}


//delete a student data
exports.deleteStudent = async(req, res) => {
    try {
        const data = await Students.deleteOne({ _id: req.params.postId})
        res.json(data)
    }
    catch (err){
        message: err
    }
}





// = async(req, res) => {
//     try{
        
//     }
//     catch (err){
//         message: err
//     }
// }