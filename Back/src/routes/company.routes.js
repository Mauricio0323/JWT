import { Router } from 'express'
import{getCompanys,getCompany,createCompanys,deleteCompanys,updateCompanys} from '../controllers/company.controller.js'


const router = Router()

router.get('/companty', getCompanys)
router.get('/companty/:id', getCompany)
router.post('/companty', createCompanys)
router.delete('/companty:id', deleteCompanys)
router.put('/companty/:id', updateCompanys)





export default router