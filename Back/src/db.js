import mongoose from 'mongoose'

export const connectDB = async () => {
    try{

        mongoose.connect('mongodb://localhost/biomedica')
    console.log("Base de datos Connected")
    } catch(error){

        console.log(error)
    }

};