import RootLayout from "@/components/layout/layout";
import Carousel from "@/components/style/carousel";

export default function Home() {
  return (
      <RootLayout>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Simple Next.js Carousel</h1>
            <Carousel />
        </main>
      </RootLayout>
  );
}
