"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { CURRENCY_COOKIE, type Currency } from "./currency";

export async function setCurrencyAction(currency: Currency) {
  const cookieStore = await cookies();
  cookieStore.set(CURRENCY_COOKIE, currency, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    path: "/",
  });
  revalidatePath("/launch");
  revalidatePath("/university");
}
