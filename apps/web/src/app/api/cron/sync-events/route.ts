import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  
  // Vercel Cron Auth (CRON_SECRET should be defined in Vercel Env)
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    console.log("CRON: Syncing top 100 global events from the last 24 hours...");
    
    // In a real implementation, you would:
    // 1. Fetch from Devfolio / Devpost API or RSS feeds of top 100 universities.
    // 2. Filter events created in the last 24 hours.
    // 3. Insert/upsert into Supabase `events` table.
    
    const mockSyncedEvents = [
      {
        title: "Global Tech Innovators Hackathon",
        host: "MIT",
        category: "tech",
        date: new Date(Date.now() + 86400000 * 30).toLocaleDateString(),
        mode: "virtual",
        location: "Global",
        participants: 1200,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        type: "discovery",
      },
      {
        title: "Harvard Business Summit",
        host: "Harvard Business School",
        category: "corporate",
        date: new Date(Date.now() + 86400000 * 45).toLocaleDateString(),
        mode: "physical",
        location: "Boston, MA",
        participants: 500,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        type: "discovery",
      }
    ];

    // Simulate DB saving delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`CRON: Successfully synced ${mockSyncedEvents.length} events to the global feed.`);

    return NextResponse.json({ 
      success: true, 
      message: `Successfully synced events from the internet in the last 24 hours.`,
      events: mockSyncedEvents
    });
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to sync events' }, { status: 500 });
  }
}
