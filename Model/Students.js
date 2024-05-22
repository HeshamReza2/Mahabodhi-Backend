const mongoose = require('mongoose')

const Students = new mongoose.Schema({
    registration_no: { type: Number },
    application_no: { type: String },
    admission_status: {
        type: Boolean,
        default: false
    },

    name: { type: String },

    course: { type: String },
    subject: { type: String },
    subject_2: { type: String },

    class: { type: String },
    selected_in: { type: String },
    confidential_no: { type: String },

    mobile: { type: Number },
    mobile_2: { type: Number },
    email: { type: String },

    aadhar: { type: String },
    
    father_name: { type: String },
    mother_name: { type: String },

    dob: {
        type: Date,
        default: Date.now
    },
    blood_group: { type: String },
    gender: { type: String },
    religion: { type: String },
    category: { type: String },
    sub_category: { type: String },
    minority: {
        type: Boolean,
        default: false
    },
    economically_weak: {
        type: Boolean,
        default: false
    },
    domicile_state: { type: String },
    domicile_certificate_no: { type: String },

    permanent_state: { type: String },
    permanent_district: { type: String },
    permanent_address_vill: { type: String },
    permanent_address_post: { type: String },
    permanent_address_police: { type: String },
    permanent_pincode: { type: Number },

    correspondence_state: { type: String },
    correspondence_district: { type: String },
    correspondence_address_vill: { type: String },
    correspondence_address_post: { type: String },
    correspondence_address_police: { type: String },
    correspondence_pincode: { type: Number },

    secondary_school_name: { type: String },
    secondary_board_name: { type: String },
    secondary_passing_year: { type: String},
    secondary_subject: { type: String },
    secondary_roll_no: { type: String },
    secondary_marks_obtained: { type: Number },
    secondary_marks_max: { type: Number },

    senior_secondary_school_name: { type: String },
    senior_secondary_board_name: { type: String },
    senior_secondary_passing_year: { type: String},
    senior_secondary_subject: { type: String },
    senior_secondary_roll_no: { type: String },
    senior_secondary_marks_obtained: { type: Number },
    senior_secondary_marks_max: { type: Number },

    photo: { type: String },
    signature: { type: String },
    secondary_marksheet: { type: String },
    senior_secondary_marksheet: { type: String },
    leaving_certificate: { type: String },
    caste_certificate: { type: String },
    ews_certificate: { type: String },
    university_provisional_offer_letter: { type: String },
    undertaking: { type: String },
    aadhar_card: { type: String },

    payment_status: {
        type: Boolean,
        default: false
    },
    payment_id: { type: String },
    payment_mode: { type: String },
    amount: { type: Number },

    transaction_id: { type: String },
    transaction_no: { type: String },
    transaction_data: { type: Date }
    
})

module.exports = mongoose.model('Students', Students)