
import { NextResponse } from 'next/server';
import https from 'https';
import nodeFetch from 'node-fetch';

// Create an https agent that rejects unauthorized certificates (set to false to allow self-signed)
const agent = new https.Agent({
    rejectUnauthorized: false
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const response = await nodeFetch('http://10.60.243.54:2405/api/contact-messages/v1/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        console.log('Proxy Upstream Status:', response.status);
        console.log('Proxy Upstream Body:', JSON.stringify(data, null, 2));

        // Trust the body "code" if it exists and equals 200, or fall back to HTTP status
        if (data && (data as any).code === 200) {
            console.log('Proxy: Overriding status to 200 based on body code');
            return NextResponse.json(data, { status: 200 });
        }

        if (!response.ok) {
            console.log('Proxy: Upstream failed with status', response.status);
            return NextResponse.json({ error: 'Upstream API error', details: data }, { status: response.status });
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error: any) {
        console.error('Proxy error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            message: error.message,
            stack: error.stack,
            cause: error.cause
        }, { status: 500 });
    }
}
