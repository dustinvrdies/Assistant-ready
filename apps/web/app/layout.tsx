export const metadata = {
  title: "DAH Attention Exchange",
  description: "The attention economy platform by DAH Enterprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
