const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './utils/uploads/profile')
    },
    filename: function(req,file,cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null,uniqueSuffix + path.extname(file.originalname))
    }
})

const  fileFilter = (req,file,cb) => {
    const allowedTypes = ['image/jpeg','image/png','image/gif'];
    if(allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Only images are allowed'))
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
}).fields([
    {name: 'profileImage', maxCount: 1},
    {name: 'coverImage', maxCount: 1},
])

module.exports = upload