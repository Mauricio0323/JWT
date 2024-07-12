import userCompanty from '../models/userCompany.models.js'

export const getuserCompantys = async (req, res) => {
    try {
      let query = req.query || {};
      const result = await userCompanty.find(query);
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("userCompany getAll failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'userCompany' })
    }
  };

  export const createuserCompantys = async (req, res) => {
    try {
      const item = new userCompanty(req.body);
  
      const result = await item.save();
      return res.status(200).json(result);
    } catch (err) {
      console.error("userCompany creation failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'userCompany' })
    }
  };
  
  export const getuserCompanty = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userCompanty.findById(id);
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("userCompany getById failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'userCompany' })
    }
  };
  
  export const deleteuserCompantys = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await userCompantyCompany.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (err) {
      console.error("userCompany delete failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'userCompany' })
    }
  };
  
  export const updateuserCompantys = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userCompanty.findOneAndUpdate({ _id: id }, req.body, { new: true });
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("userCompany update failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({ message, entity: 'userCompany' })
    }
  };
  