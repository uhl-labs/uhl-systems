import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const email = body?.email;

		if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return new Response(JSON.stringify({ success: false, error: 'Invalid email address.' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const apiKey = import.meta.env.RESEND_API_KEY;
		const audienceId = import.meta.env.RESEND_AUDIENCE_ID;

		if (!apiKey || !audienceId) {
			return new Response(JSON.stringify({ success: true, note: 'not_configured' }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		});

		if (!res.ok) {
			const err = await res.text();
			return new Response(JSON.stringify({ success: false, error: err }), {
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch {
		return new Response(JSON.stringify({ success: false, error: 'Server error.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
