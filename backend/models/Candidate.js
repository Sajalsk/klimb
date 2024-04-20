import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobile: String,
    dob: String,
    experience: String,
    resumeTitle: String,
    currentLocation: String,
    postalAddress: String,
    currentEmployer: String,
    currentDesignation: String
});

const Candidate = mongoose.model('Candidate', candidateSchema);

export default Candidate;
