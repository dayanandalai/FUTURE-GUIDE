// app/guide/page.tsx
import connectDB from '@/lib/mongodb';
import TechnicalSubjectModel from '@/models/technical_Subject';
import TechnicalGuideClient from '@/app/technical_guide/_components/TechnicalGuideClient';

// This is a Server Component, so we can make it async and fetch data directly.
export default async function TechnicalGuidePage() {
 await connectDB();
  
  const docs = await TechnicalSubjectModel.find().sort({ name: 1 }).lean();
  
  const subjects = docs.map((doc: any) => ({
    id: doc._id ? doc._id.toString() : 'default-id',
    name: doc.name || 'Untitled Subject',
    description: doc.description || 'No description available.',
  }));

  console.log('Fetched Technical subjects:', subjects);

  return <TechnicalGuideClient subjects={subjects} />;
}