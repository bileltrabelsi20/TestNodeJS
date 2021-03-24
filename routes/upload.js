var express = require('express');
const multer = require('multer');
const path = require('path');
var router =express.Router();



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Routes
router.post('/uploadSingle', upload.single('image'), async(req, res)=>{
    res.json({message: 'Image has been uploaded successfully!'});
});

router.post('/uploadMultiple', upload.array("images",3), async(req, res)=>{
    res.json({message: 'Images has been uploaded successfully!'})
});

module.exports = router;
