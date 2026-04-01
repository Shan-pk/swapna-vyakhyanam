"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export type DreamFormState = {
  success: boolean
  error: string | null
}

export async function submitDream(
  _prevState: DreamFormState,
  formData: FormData
): Promise<DreamFormState> {
  const supabase = await createClient()

  // Verify the user is authenticated
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return { success: false, error: "You must be logged in to submit a dream." }
  }

  const dreamDescription = formData.get("dream") as string

  if (!dreamDescription || dreamDescription.trim() === "") {
    return { success: false, error: "Dream description cannot be empty." }
  }

  // Insert the dream into the database
  const { error: insertError } = await supabase
    .from("dreams")
    .insert({
      user_id: user.id,
      description: dreamDescription,
      // Status will be 'pending' by default in the DB until AI processed
    })

  if (insertError) {
    console.error("Error inserting dream:", insertError)
    return { success: false, error: "Failed to save your dream. Please try again." }
  }

  // Revalidate the journal path to show latest dreams (when history is implemented)
  revalidatePath("/journal")
  
  // Later we'll redirect to the specific interpretation view: redirect(`/journal/${dreamId}`)
  return { success: true, error: null }
}
