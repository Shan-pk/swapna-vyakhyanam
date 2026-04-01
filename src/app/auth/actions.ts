"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function signInWithGithub() {
  const supabase = await createClient()

  // Generate a URL for GitHub login
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      // The redirect URL that Supabase uses after OAuth is complete
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  })

  if (error) {
    console.error("Error signing in with GitHub:", error.message)
    return redirect("/?error=" + encodeURIComponent("Failed to initialize login flow."))
  }

  // Once Supabase generates the OAuth URL, redirect the user to it
  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  return redirect("/")
}
