import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const prefixoComData = Date.now().toString();
    cb(null, prefixoComData + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });

export default upload;