import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: { type: String, unique: false },
        username: { type: String },
    },
    {
        timestamps: true,
    },
);
