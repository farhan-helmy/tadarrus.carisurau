import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import TrpcProvider from "@/lib/trpc/Provider";
import { cookies } from "next/headers";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (
    <main>
      <ClerkProvider>
        <TrpcProvider cookies={cookies().toString()}>{children}</TrpcProvider>
      </ClerkProvider>

      <Toaster richColors />
    </main>
  );
}
