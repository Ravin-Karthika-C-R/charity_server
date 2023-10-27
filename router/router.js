const express = require('express')
const { adminLogin, userLogin, userSignup, addMembers, addStaffs, ViewMemberDetails,
     ViewStaffDetails, ViewUserDetails, deleteUser, deleteStaff,
      deleteMember, singleViewMember, editMembers, editStaffs, singleViewStaff,
       addFunds, ViewFundAddedDetails, editFund,
       singleViewAdminFunds, deleteFund, getAccessFund, donateFundUser,
        getAccessFundUser, 
        getSingleViewFundUser,
        receiptUser,donateAllItemsUser, ViewItemDonationUser,
        ViewItemDetailsAdmin} = require('../controllers/logic')


const router = new express.Router()

router.post('/admin/login', adminLogin)
router.post('/user-signup', userSignup)
router.post('/user-login', userLogin)
router.post('/admin/addMember',addMembers)
router.post('/admin/addStaff',addStaffs)
router.post('/admin/addFund',addFunds)
router.post('/user/donate-fund',donateFundUser)
router.post('/user/donate-all',donateAllItemsUser)


router.get('/admin/viewMember',ViewMemberDetails)
router.get('/admin/viewStaff',ViewStaffDetails)
router.get('/admin/viewUsers',ViewUserDetails)
router.get('/admin-single-member/:id',singleViewMember)
router.get('/admin-single-staff/:id',singleViewStaff)
router.get('/admin/viewAddedFunds',ViewFundAddedDetails)
router.get('/admin-single-viewfund/:id',singleViewAdminFunds)
router.get('/landing/fund-access',getAccessFund)
router.get('/fund-access-user',getAccessFundUser)
router.get('/user-single-viewfund-detail/:id',getSingleViewFundUser)
router.get('/admin/itemDonationDetails',ViewItemDetailsAdmin)

router.get('/user/recipt/:userId',receiptUser)
router.get('/user/itemDonationView/:userId',ViewItemDonationUser)
// router.get('/user/viewreceipt/:userId')







router.delete('/admin/user-delete/:_id',deleteUser)
router.delete('/admin/staff-delete/:_id',deleteStaff)
router.delete('/admin/member-delete/:_id',deleteMember)
router.delete('/admin/fund-delete/:_id',deleteFund)

router.put('/admin-member-update/:id',editMembers )
router.put('/admin-staff-update/:id',editStaffs )
router.put('/admin-funds-update/:id',editFund )








module.exports = router
