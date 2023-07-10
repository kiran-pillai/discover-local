import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function GET() {
    return NextResponse.json({ data: 'hello world' });
}

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextApiResponse) {
    const body = await req.json();
    const { username, password } = body;

    const user = await prisma.user.findUnique({
        where: {
            name: username,
        },
    });

    if (user) {
        return res.send({ user: null, message: 'User already exists!' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: { name: username, password: hashedPassword },
    });

    return NextResponse.json({
        user: newUser,
        message: 'User created successfully!',
    });
}
