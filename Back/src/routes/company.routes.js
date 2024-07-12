import { Router } from 'express'
import{getCompanys,getCompany,createCompanys,deleteCompanys,updateCompanys} from '../controllers/company.controller.js'

const router = Router()

router.get('/company', getCompanys)
router.get('/company/:id', getCompany)
router.post('/company', createCompanys)
router.delete('/company:id', deleteCompanys)
router.put('/company/:id', updateCompanys)





export default router