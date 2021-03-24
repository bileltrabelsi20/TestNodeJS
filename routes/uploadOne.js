const express = require('express');
const multer = require('multer');
const path = require('path');
const router =express.Router();


/////// upload une seul image ///////
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploadOne');
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const fileFilter = (req, file, cb) => {
    if ( file.mimetype == 'image/jpeg' ||
         file.mimetype == 'image/png'  ||
         file.mimetype == 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Routes
router.post('/uploadSingle', upload.single('seulImage'), async(req, res)=>{
    res.json('Image has been uploaded successfully!');
});

router.post('/uploadMultiple', upload.array("manyImg",3), async(req, res)=>{
    res.json( 'Images has been uploaded successfully!')
});

module.exports = router;
