const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    uname: String,
    psw: String

})
//model
const admins = new mongoose.model("admins", adminSchema)

//userregister
const userSchema = new mongoose.Schema({
    
    uname:String,
    email: String,
    ph:Number,
    psw: String

})
const users = new mongoose.model("users", userSchema)

//Member collection
const memberSchema = new mongoose.Schema({
    
    mname:String,
    mimage:String,
    address:String,
    phn:Number,
    adproof:String,
    idproof:String,
    description:String
    
})
//model
const members = new mongoose.model("members", memberSchema)

//Staffs collection

const staffSchema = new mongoose.Schema({
    
    sname:String,
    loginid:String,
    phone:Number,
    psw:String

})
const staffs = new mongoose.model("staffs", staffSchema)

//Staffs fund add and retrive in admin page

const fundSchema = new mongoose.Schema({
    userId:String,
    image:String,
    title:String,
    description:String

})
const funds = new mongoose.model("funds", fundSchema)

//user  donate money collection
const donateFundSchema = new mongoose.Schema({
    userId:String,
    fId:String,
    uname:String,
    title:String,
    ph:Number,
    email:String,
    fname:String,
    phone: Number,
    amount: Number,
    cardno: Number,
    expdate: String,
    cvv: Number,
    transactions:[]

})
const donatefunds = new mongoose.model("donatefunds", donateFundSchema)


//user  donate items collection
const itemsdonationSchema = new mongoose.Schema({
    userId:String,
    uname:String,
    itemname:String,
    detail:String,
    quantity: Number,
    address: String,
    city: String,
    pincode: Number,
    datetime: Date

})
const itemdonations = new mongoose.model("itemdonations", itemsdonationSchema)

const viewdonationsSchema =new mongoose.Schema({
    did:String,
    userId:String,
    uname:String,
    fname:String,
    phone: Number,
    amount: Number,
    cardno: Number,
    expdate: String,
    cvv: Number,
    title:String

})
const viewdonations = new mongoose.model("viewdonations", viewdonationsSchema)

module.exports = { admins, users, members, funds, staffs, donatefunds,itemdonations,viewdonations}
