"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

export const login = async (
  values: { email: string; password: string },
  callbackUrl?: string | null
) => {
  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl ?? "/dashboard",
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log("CredentialsSignin", error);
          return { error: "Invalid credentials!" };
        }
        case "CallbackRouteError": {
          return { error: "Invalid email or password!" };
        }
        default: {
          console.log("default", error);
          return { error: "Something went wrong!" };
        }
      }
    }

    throw error;
  }
};
