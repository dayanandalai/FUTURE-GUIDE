import connectDB from '@/lib/mongodb';
import ArtSubjectModel from '@/models/art_Subject';
import ArtGuideClient from '@/app/art_guide/_components/ArtGuideClient';

export default async function ArtGuidePage() {
  await connectDB();
  
  const docs = await ArtSubjectModel.find({ category: 'BA' }).sort({ name: 'asc' }).lean();
  
  const subjects = docs.map((doc: any) => ({
    id: doc._id ? doc._id.toString() : 'default-id',
    name: doc.name || 'Untitled Subject',
    description: doc.description || 'No description available.',
  }));

  console.log('Fetched Art subjects:', subjects);

  return <ArtGuideClient subjects={subjects} />;
}