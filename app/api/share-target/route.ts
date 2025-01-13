import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Логируем запрос
    console.log('Request received:', request);

    const formData = await request.formData();
    console.log('Form Data:', Array.from(formData.entries()));

    const file = formData.get('file') as File;
    if (!file) {
      console.error('No file found in the request.');
      return NextResponse.redirect('/?error=true');
    }

    console.log('File received:', {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    return NextResponse.json({ success: true,
      name: file.name,
      size: file.size,
      type: file.type, });

    return NextResponse.redirect('https://my-pwa-phi.vercel.app/files');
  } catch (error) {
    console.error('Error processing shared file:', error);
    return NextResponse.redirect('/?error=true');
  }
}