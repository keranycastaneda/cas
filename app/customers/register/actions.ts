"use server";

import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";

export async function create(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!);

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const wantsUpdates = formData.get("wantsUpdates") === "on";
  const phone = formData.get("phone");
  const password = formData.get("password");

  await sql`
    INSERT INTO customers 
    (first_name, last_name, email, wants_updates, phone, password)
    VALUES 
    (${firstName}, ${lastName}, ${email}, ${wantsUpdates}, ${phone}, ${password})
  `;

  redirect("/");
}