import Header from '@/components/header'
import './globals.css'
import { Fira_Sans } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const fira_sans = Fira_Sans({
  weight: ['300', '400', '500', '700'],  // Ensure spaces after commas for readability (optional)
  subsets: ['latin']
});


export const metadata = {
  title: 'Dipit Vasdev - M.Sc. @ New York University',
  description: 'Dipit Vasdev is a talented software engineer and a Master’s student at New York University, specializing in Computer Engineering with a GPA of 3.9. His skills in Python, JavaScript, React, and AWS Cloud solutions highlight his technical proficiency. Dipit has contributed to significant projects, such as developing RESTful API endpoints and creating AI-driven solutions. He is also recognized as a Top Data Science Voice on LinkedIn and holds a $18,000 Merit-Based Scholarship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${fira_sans.className} bg-gray-50 text-gray-950 relative pt-28 !pb-0 !pr-0 !pl-0 sm:p-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
