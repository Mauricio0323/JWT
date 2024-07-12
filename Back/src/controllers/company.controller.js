import Company from '../models/company.models.js'

export const getCompanys = async (req, res) => {
    try {
      let query = req.query || {};
      const result = await Company.find(query);
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("Company getAll failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'Company' })
    }
  };

  export const createCompanys = async (req, res) => {
    try {
      const item = new Company(req.body);
  
      const result = await item.save();
      return res.status(200).json(result);
    } catch (err) {
      console.error("Company creation failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'Company' })
    }
  };
  
  export const getCompany = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Company.findById(id);
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("Company getById failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'Company' })
    }
  };
  
  export const deleteCompanys = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Company.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (err) {
      console.error("Company delete failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'Company' })
    }
  };
  
  export const updateCompanys = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Company.findOneAndUpdate({ _id: id }, req.body, { new: true });
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("Company update failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'Company' })
    }
  };
  