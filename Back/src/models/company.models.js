import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        image: {
            data: Buffer,
            contentType: String
        },
        pdf: {
            data: Buffer,
            contentType: String
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Company", CompanySchema);