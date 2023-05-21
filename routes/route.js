const express = require('express')
const {showNFTs, createNFT} = require('../controller/NFT-controller.js');
const multer = require('multer');

// Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage }).fields([
    { name: 'name', maxCount: 1 },
    { name: 'description', maxCount: 1 },
    { name: 'image', maxCount: 1 },
]);

router.get('/nfts',showNFTs)
router.post('/nfts',upload,createNFT)

module.exports={
    router
}
