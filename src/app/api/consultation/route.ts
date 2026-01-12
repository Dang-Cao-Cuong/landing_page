import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simple validation
        if (!body.name || !body.phone || !body.email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'consultations.json');

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        let consults = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                consults = JSON.parse(fileContent);
            } catch (e) {
                // If file is corrupt or empty, start fresh
                consults = [];
            }
        }

        const newConsult = {
            id: Date.now().toString(),
            ...body,
            createdAt: new Date().toISOString(),
        };

        consults.push(newConsult);

        fs.writeFileSync(filePath, JSON.stringify(consults, null, 2));

        return NextResponse.json({ success: true, data: newConsult });
    } catch (error) {
        console.error('Error saving consultation:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
