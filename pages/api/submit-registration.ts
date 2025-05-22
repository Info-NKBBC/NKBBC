import { createClient } from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

// 建立 Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'von9yh08',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
  withCredentials: true,
  ignoreBrowserTokenWarning: true
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ====== 加入 Token debug ======
  const token = process.env.SANITY_WRITE_TOKEN;
  console.log(
    '[DEBUG] SANITY_WRITE_TOKEN:',
    token
      ? `${token.slice(0, 8)}...${token.slice(-6)} (length: ${token.length})`
      : '[NOT FOUND]'
  );
  // ============================

  console.log('Received request:', req.method, req.url);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { eventId, name, email, phone = '', note = '' } = req.body;

  try {
    // 驗證必填欄位
    if (!eventId || !name || !email) {
      console.error('Missing required fields:', { eventId, name, email });
      return res.status(400).json({
        message: 'Missing required fields',
        fields: ['eventId', 'name', 'email']
      });
    }

    // 驗證電子郵件格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return res.status(400).json({
        message: 'Invalid email format',
        email: email
      });
    }

    // 創建報名記錄
    const registration = {
      _type: 'registration',
      event: {
        _type: 'reference',
        _ref: eventId,
      },
      name,
      email,
      phone,
      note,
      registeredAt: new Date().toISOString(),
    };

    console.log('Creating registration:', registration);

    // 保存到 Sanity
    const result = await client.create(registration);
    console.log('Registration created:', result);

    return res.status(200).json({
      message: 'Registration successful',
      registrationId: result._id
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      response: error.response
    });

    return res.status(500).json({
      message: 'Registration failed',
      error: error.message,
      details: error.details || 'Unknown error',
    });
  }
}
