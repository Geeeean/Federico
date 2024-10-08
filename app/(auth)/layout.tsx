import "@/app/globals.css";

export const metadata = {
  title: 'Login',
  description: "Federico's landing page login panel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
