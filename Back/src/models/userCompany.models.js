import mongoose from "mongoose";

const UserCompanySchema = new mongoose.Schema(

    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true

        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            require: true

        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("UserCompany", UserCompanySchema);