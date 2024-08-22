import { Router } from 'express'
import * as playerController from '../controllers/players-controller'

const router = Router()

router.get('/players', playerController.getPlayers)
router.get('/players/:id', playerController.getPlayerById)
router.post('/players', playerController.postPlayer)
router.delete('/players/:id', playerController.deletePlayer)
router.patch('/players/:id', playerController.updatePlayer)




export default router