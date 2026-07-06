// app/api/performance/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const targetUrl = 'https://auralexu-realestate.vercel.app/'; // Replace with your client's URL
  const apiKey = process.env.PAGESPEED_API_KEY; // Optional: Get one from Google Cloud Console
  
  try {
    const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}`);
    const data = await res.json();
    const score = data.lighthouseResult.categories.performance.score * 100;
    
    return NextResponse.json({ score: Math.round(score) });
  } catch (error) {
    return NextResponse.json({ score: 'N/A' });
  }
}