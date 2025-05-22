import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

// 定義報名記錄的類型
interface Registration {
  _type: 'registration';
  event: {
    _type: 'reference';
    _ref: string;
  };
  name: string;
  email: string;
  phone?: string;
  note?: string;
  registeredAt: string;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'von9yh08',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // 使用專門的 write token
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 確保返回的內容類型是 JSON
  res.setHeader('Content-Type', 'application/json');

  // 檢查 Sanity client 是否正確配置
  if (!client) {
    console.error('Sanity client not properly configured');
    return res.status(500).json({ 
      message: 'Internal server error',
      error: 'Sanity client not configured'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { eventId, name, email, phone = '', note = '' } = req.body;

    if (!eventId || !name || !email) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        fields: ['eventId', 'name', 'email']
      });
    }

    // 驗證電子郵件格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format', 
        email: email
      });
    }

    // 驗證活動是否存在
    console.log('Fetching event with ID:', eventId);
    const event = await client.fetch(
      `*[_type == "event" && _id == "${eventId}"]`,
      { eventId }
    );

    if (!event?.length) {
      console.error('Event not found:', eventId);
      return res.status(400).json({ 
        message: 'Invalid event', 
        eventId: eventId
      });
    }

    // 儲存到 Sanity
    const registration = {
      _type: 'registration',
      event: {
        _type: 'reference',
        _ref: eventId,
      },
      name,
      email,
      ...(phone && { phone }),
      ...(note && { note }),
      registeredAt: new Date().toISOString(),
    };

    console.log('Creating registration:', registration);
    
    // 使用 Sanity 的 createMutation 來創建記錄
    const result = await client.create(registration);
    
    if (!result) {
      console.error('Failed to create registration:', registration);
      return res.status(500).json({ 
        message: 'Failed to create registration',
        error: 'No result from Sanity'
      });
    }

    console.log('Registration successful:', result);
    return res.status(200).json({ 
      message: 'Registration successful',
      registrationId: result._id
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      message: 'Registration failed', 
      error: error.message,
      details: error.details || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
