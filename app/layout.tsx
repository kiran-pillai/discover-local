import './globals.css';
import { Inter } from 'next/font/google';
import Layout from './theme/Layout/Layout';
import { Topbar } from './components/Topbar';
import { getServerSession } from 'next-auth';
import { handler } from '../app/api/auth/[...nextauth]/route';
const inter = Inter({ subsets: ['latin'] });

const getSessionData = async () => {
    const sessionData = await getServerSession(handler);
    return sessionData;
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = getSessionData();
    return (
        <html lang="en">
            <head>
                <title>Discover Local</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <Layout session={session}>
                    <Topbar />
                    {children}
                </Layout>
            </body>
        </html>
    );
}
