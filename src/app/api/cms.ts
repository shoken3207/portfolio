import { NextApiRequest, NextApiResponse } from "next";

export default async function Cms(req: NextApiRequest, res: NextApiResponse) {
    try {
		const crypto = require('crypto');
		const requestBody = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
		const expectedSignature = crypto
			.createHmac('sha256', <シークレット>)
			.update(requestBody)
			.digest('hex');
		let signature = req.headers['X-MICROCMS-Signature'] || req.headers['x-microcms-signature'];

		if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
			return res.status(401).send('Invalid token');
		}
	} catch (err) {
		console.log(err);
		return res.status(401).send('Invalid token');
	}
}