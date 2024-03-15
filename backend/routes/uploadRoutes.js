import express from 'express';
import multer from 'multer';
import uploadController from '../controllers/uploadController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('excelFile'), async (req, res) => {
    try {
        await uploadController.uploadCandidates(req, res);
    } catch (error) {
        console.error('Error processing Excel:', error);
        res.status(500).json({ message: 'An error occurred while processing the Excel file.' });
    }
});

export default router;
