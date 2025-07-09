import mongoose from 'mongoose';

const artSubjectSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  category: String,
});

export default mongoose.models.art_Subject || mongoose.model('art_Subject', artSubjectSchema, 'art_Subject');
