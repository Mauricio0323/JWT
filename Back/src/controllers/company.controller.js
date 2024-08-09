import multer from 'multer';
import Company from '../models/company.models.js';

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware para manejar la subida de archivos
export const uploadFiles = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);

export const getCompanys = async (req, res) => {
    try {
        let query = req.query || {};
        const result = await Company.find(query);

        return res.status(200).json(result);
    } catch (err) {
        console.error("Company getAll failed: " + err);
        const { status, message } = errorHandler(err);
        res.status(status).json({ message, entity: 'Company' });
    }
};

export const createCompanys = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newCompany = new Company({
            name,
            email,
            image: req.files['image'] ? {
                data: req.files['image'][0].buffer,
                contentType: req.files['image'][0].mimetype
            } : undefined,
            pdf: req.files['pdf'] ? {
                data: req.files['pdf'][0].buffer,
                contentType: req.files['pdf'][0].mimetype
            } : undefined
        });

        const result = await newCompany.save();
        return res.status(200).json(result);
    } catch (err) {
        console.error("Company creation failed: " + err);
        const { status, message } = errorHandler(err);
        res.status(status).json({ message, entity: 'Company' });
    }
};

export const getCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Company.findById(id);

        return res.status(200).json(result);
    } catch (err) {
        console.error("Company getById failed: " + err);
        const { status, message } = errorHandler(err);
        res.status(status).json({ message, entity: 'Company' });
    }
};

export const deleteCompanys = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Company.deleteOne({ _id: id });
        return res.status(200).json(result);
    } catch (err) {
        console.error("Company delete failed: " + err);
        const { status, message } = errorHandler(err);
        res.status(status).json({ message, entity: 'Company' });
    }
};

export const updateCompanys = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = {
            ...req.body,
            image: req.files['image'] ? {
                data: req.files['image'][0].buffer,
                contentType: req.files['image'][0].mimetype
            } : undefined,
            pdf: req.files['pdf'] ? {
                data: req.files['pdf'][0].buffer,
                contentType: req.files['pdf'][0].mimetype
            } : undefined
        };

        const result = await Company.findOneAndUpdate({ _id: id }, updateData, { new: true });

        return res.status(200).json(result);
    } catch (err) {
        console.error("Company update failed: " + err);
        const { status, message } = errorHandler(err);
        res.status(status).json({ message, entity: 'Company' });
    }
};
