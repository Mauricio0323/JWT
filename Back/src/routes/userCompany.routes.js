import { Router } from 'express'
import {getuserCompantys,getuserCompanty,createuserCompantys,deleteuserCompantys,updateuserCompantys} from '../controllers/userCompany.controller.js'

const router = Router()

router.get('/userCompanty', getuserCompantys)
router.get('/userCompanty/:id', getuserCompanty)
router.post('/userCompanty', createuserCompantys)
router.delete('/userCompanty:id', deleteuserCompantys)
router.put('/userCompanty/:id', updateuserCompantys)





export default router