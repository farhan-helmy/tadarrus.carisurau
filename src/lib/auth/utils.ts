import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      emailAddress?: string;
      hasImage?: boolean;
      imageUrl?: string;
    };
  } | null;
};

export const getUserAuth = async () => {
  // find out more about setting up 'sessionClaims' (custom sessions) here: https://clerk.com/docs/backend-requests/making/custom-session-token
  const { userId, sessionClaims } = auth();

  if (userId) {
    return {
      session: {
        user: {
          id: userId,
          name: `${sessionClaims?.firstName} ${sessionClaims?.lastName}`,
          emailAddress: sessionClaims?.emailAddress,
          hasImage: sessionClaims?.hasImage,
          imageUrl: sessionClaims?.imageUrl
        },
      },
    } as AuthSession;
  } else {
    return { session: null };
  }
};

export const checkAuth = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
};