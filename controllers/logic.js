const { admins, users, members, staffs, funds, donatefunds, itemdonations, viewdonations } = require("../models/collection")

//admin login
const adminLogin = (req, res) => {
    const { uname, psw } = req.body

    admins.findOne({ uname, psw }).then(admin => {
        if (admin) {
            res.status(200).json({
                message: "login success",
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(400).json({
                message: "incorrect user password or acc no",
                status: false,
                statusCode: 400
            })
        }
    })
}

//userregister

const userSignup = (req, res) => {
    const { uname, email, ph, psw } = req.body
    users.findOne({ email }).then(user => {
        if (user) {
            res.status(404).json({ 
                message: "already registered",
                status: false,
                statusCode: 404
            })
        }
        else {
            newUser = new users({
                uname, email, ph, psw
            })
            newUser.save()
            res.status(200).json({
                message: "registered",
                status: true,
                statusCode: 200
            })
        }
    })
}

//user login
const userLogin = (req, res) => {
    const { email, psw } = req.body

    users.findOne({ email, psw }).then(user => {
        if (user) {
            res.status(200).json({
                email:user.email,
                message: "login success",
                status: true,
                statusCode: 200,
                _id: user._id,
                uname: user.uname,
                ph:user.ph
            })
        }
        else {
            res.status(404).json({
                message: "incorrect user name or password",
                status: false,
                statusCode: 404
            })
        }
    })
}

//add members - admin

const addMembers = (req, res) => {
    const { mname, mimage, address, psw, adproof, idproof, description } = req.body
    const newMembers = new members({
        mname, mimage, address, psw, adproof, idproof, description
    })
    newMembers.save()
    res.status(200).json({
        message: "new member added",
        status: true,
        statusCode: 200
    })
}

//add staffs - admin

const addStaffs = (req, res) => {
    const { sname, loginid, phone, psw } = req.body
    const newStaffs = new staffs({
        sname, loginid, phone, psw
    })
    newStaffs.save()
    res.status(200).json({
        message: "new staff added",
        status: true,
        statusCode: 200
    })
}


//View member details - admin

const ViewMemberDetails = (req, res) => {
    members.find().then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

//View staff details - admin

const ViewStaffDetails = (req, res) => {
    staffs.find().then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

//View users details - admin

const ViewUserDetails = (req, res) => {
    users.find().then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

//delete users and all other activities
const deleteUser = (req, res) => {
    const { _id } = req.params
    users.deleteOne({ _id }).then(data => {
        res.status(200).json({
            message: "user deleted",
            status: true,
            statusCode: 200
        })
    })
}

//delete staff and all other activities
const deleteStaff = (req, res) => {
    const { _id } = req.params
    staffs.deleteOne({ _id }).then(data => {
        res.status(200).json({
            message: "staffs deleted",
            status: true,
            statusCode: 200
        })
    })
}


//delete Member and all other activities
const deleteMember = (req, res) => {
    const { _id } = req.params
    members.deleteOne({ _id }).then(data => {
        res.status(200).json({
            message: "member deleted",
            status: true,
            statusCode: 200
        })
    })
}

//get single member  - admin

const singleViewMember = (req, res) => {
    const { id } = req.params
    members.findOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(404).json({
                message: "No data",
                status: false,
                statusCode: 404
            })
        }
    })
}

//edit member - admin
const editMembers = (req, res) => {
    const { id } = req.params
    const { mname, mimage, address, psw, idproof, description } = req.body
    members.findOne({ _id: id }).then(pdata => {
        if (pdata) {
            pdata.mname = mname
            pdata.mimage = mimage
            pdata.address = address
            pdata.psw = psw
            // pdata.adproof = adproof
            pdata.idproof = idproof
            pdata.description = description

            pdata.save()
            res.status(200).json({
                message: "Member data updated",
                status: true,
                statusCode: 200
            })

        }
    })
}

//get single staff  - admin

const singleViewStaff = (req, res) => {
    const { id } = req.params
    staffs.findOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(404).json({
                message: "No data",
                status: false,
                statusCode: 404
            })
        }
    })
}

//edit staff - admin
const editStaffs = (req, res) => {
    const { id } = req.params
    const { sname, loginid, phone, psw } = req.body
    staffs.findOne({ _id: id }).then(pdata => {
        if (pdata) {
            pdata.sname = sname
            pdata.loginid = loginid
            pdata.phone = phone
            pdata.psw = psw

            pdata.save()
            res.status(200).json({
                message: "Staff data updated",
                status: true,
                statusCode: 200
            })

        }
    })
}

//add fund form - admin

const addFunds = (req, res) => {
    const { image, title, description } = req.body
    const newFunds = new funds({
        image, title, description
    })
    newFunds.save()
    res.status(200).json({
        message: "fund detail added",
        status: true,
        statusCode: 200
    })
}

//view fund details - admin
const ViewFundAddedDetails = (req, res) => {
    // const { userId,image,title, description } = req.body

    funds.find().then((data) => {
        if (data) {
            title=data.title
            
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

//edit fund raiser by admin
const editFund = (req, res) => {
    const { id } = req.params
    const { image, title, description } = req.body
    funds.findOne({ _id: id }).then(pdata => {
        if (pdata) {
            pdata.image = image
            pdata.title = title
            pdata.description = description


            pdata.save()
            res.status(200).json({
                message: "fund data updated",
                status: true,
                statusCode: 200
            })

        }
    })
}

//admin single view of funds 
const singleViewAdminFunds = (req, res) => {
    const { id } = req.params
    funds.findOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(404).json({
                message: "No data",
                status: false,
                statusCode: 404
            })
        }
    })
}

//admin delete fund raising

const deleteFund = (req, res) => {
    const { _id } = req.params
    funds.deleteOne({ _id }).then(data => {
        res.status(200).json({
            message: "fund detail deleted",
            status: true,
            statusCode: 200
        })
    })
}

//get fund data from the admin to landing
const getAccessFund = (req, res) => {
    funds.find().then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


//user donate money
// const donateFundUser = (req, res) => {
//     const { fId,userId} = req.body
//     donatefunds.findOne({fId,userId }).then((data) => {
//         if (data) {
//             const { fId,userId, fname, phone, amount, cardno,expdate,cvv} = req.body
//             const newDonateUserFund = new donatefunds({
//                 fId,userId,fname,phone,amount,cardno,expdate,cvv
//             })
//             newDonateUserFund.save()
//             res.status(200).json({
//                 message: "Money Transffered Successfully",
//                 status: true,
//                 statusCode: 200
//             })
//             res.status(200).json({
//                 message: data,
//                 status: true,
//                 statusCode: 200
//             })
//         }

//     })


// }


const donateFundUser = (req, res) => {
    const { fId, userId,uname,title,ph,email, fname, phone, amount, cardno, expdate, cvv } = req.body
    const newdonateFunds = new donatefunds({
        fId, userId,uname,title,ph,email, fname, phone, amount, cardno, expdate, cvv
    })
    newdonateFunds.save()
    res.status(200).json({
        message: "Money transferred successfully",
        status: true,
        statusCode: 200
    })
}


//get access fund to the home page of user
const getAccessFundUser = (req, res) => {
    funds.find().then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


//get single view fund data to the user
const getSingleViewFundUser = (req, res) => {
    const { id } = req.params
    funds.findOne({ _id: id }).then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200,
                title:data.data

            })
        }
    })
}

//recipt user
const receiptUser = (req, res) => {
    const { userId } = req.params
    donatefunds.findOne({ userId}).then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
    
    
}

//post method donate all things - user
const donateAllItemsUser = (req, res) => {
    const { userId, fullname, itemname, detail, quantity,
        address, city, pincode, datetime} = req.body
    const newdonateItems = new itemdonations({
     userId, fullname, itemname, detail, quantity, address, city, 
     pincode, datetime
    })
    newdonateItems.save()
    res.status(200).json({
        message: "Donation requested successfully",
        status: true,
        statusCode: 200
    })
}

//View item details - user

const ViewItemDonationUser = (req, res) => {
    const { userId } = req.params
    itemdonations.find({userId}).then((data) => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


//logic for view receipt
// const viewreceiptlogic =(req,res)=>{
    
//             donatefunds.find({ userId }).then(product => {
//                 if (product) {
//                     newCart = new viewdonations ({
//                         userId,
//                         fId,
//                         uname: product.uname,
//                         phone: product.phone,
//                         amount: product.amount,
//                         cardno: product.cardno,
//                         expdate: product.expdate,
//                         cvv:product.cvv,
//                         title:product.title
//                     })
//                     newCart.save()
//                     res.status(200).json({
//                         message: "money transferred successfully",
//                         status: true,
//                         statusCode: 200
//                     })
//                 }
//             })
// }




module.exports = {
    adminLogin, userSignup, userLogin, addMembers, addStaffs,
    ViewMemberDetails, ViewStaffDetails, ViewUserDetails, deleteUser,
    deleteStaff, deleteMember, singleViewMember, editMembers, singleViewStaff,
    editStaffs, addFunds, ViewFundAddedDetails,
    editFund, singleViewAdminFunds, deleteFund, getAccessFund,
    donateFundUser, getAccessFundUser, getSingleViewFundUser,
     receiptUser,donateAllItemsUser,ViewItemDonationUser
}
