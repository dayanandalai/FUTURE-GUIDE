// app/guide/page.tsx
import connectDB from '@/lib/mongodb';
import SubjectModel, { ISubject } from '@/models/Subject';
import GuideClient from '@/app/guide/_components/GuideClinet';

// This is a Server Component, so we can make it async and fetch data directly.
export default async function GuidePage() {
  await connectDB();
  const docs = await SubjectModel.find().sort({ name: 1 }).lean();
  const subjects = docs.map((doc: any) => ({
    id: doc._id ? doc._id.toString() : '',
    name: doc.name,
    description: doc.description,
  }));
  console.log('Fetched subjects:', subjects);

  // Pass the fetched subjects to the client component that will handle interactions
  return <GuideClient subjects={subjects} />;
}