import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
    name: {type: String, required: true},
    biome: {type: String},
    atmosphere: {type: Boolean, default: false},

    galaxyId: {type: ObjectId, required: true, ref: 'Galaxy'}
}, { timestamps: true, toJSON: { virtuals: true } })