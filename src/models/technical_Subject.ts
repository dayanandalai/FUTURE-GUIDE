import mongoose from 'mongoose';

const technicalSubjectSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  category: String,
});

// Use the exact collection name as in MongoDB: 'technical_subject'
export default mongoose.models.technical_subject || mongoose.model('technical_subject', technicalSubjectSchema, 'technical_subject');
