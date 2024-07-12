import { Router } from 'express'
import {getuserCompantys,getuserCompanty,createuserCompantys,deleteuserCompantys,updateuserCompantys} from '../controllers/userCompany.controller.js'

const router = Router()

router.get('/userCompany', getuserCompantys)
router.get('/userCompany/:id', getuserCompanty)
router.post('/userCompany', createuserCompantys)
router.delete('/userCompany:id', deleteuserCompantys)
router.put('/userCompany/:id', updateuserCompantys)





export default router