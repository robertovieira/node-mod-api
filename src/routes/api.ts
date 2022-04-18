import { Router } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);
router.get('/random', apiController.random);
router.get('/name/:name', apiController.name);

// rotas frases
router.post('/phrases', apiController.createPhrases);
router.get('/phrases', apiController.listPhrases);

router.get('/phrase/random', apiController.randomPhrase);

router.get('/phrase/:id', apiController.getPhrase);
router.put('/phrase/:id', apiController.updatePhrase);
router.delete('/phrase/:id', apiController.deletePhrase)


export default router;