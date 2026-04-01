"use client";

import { useActionState } from "react";
import { submitDream } from "@/app/actions/journal";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Loader2 } from "lucide-react";

const initialState = {
  success: false,
  error: null as string | null,
};

export default function DreamForm({ placeholder, submitText }: { placeholder: string, submitText: string }) {
  const [state, formAction, isPending] = useActionState(submitDream, initialState);

  return (
    <form action={formAction} className="p-6 sm:p-10 space-y-6">
      {state?.error && (
        <div className="p-4 rounded-md bg-destructive/15 text-destructive font-medium border border-destructive/20 text-sm">
          {state.error}
        </div>
      )}
      
      {state?.success && (
        <div className="p-4 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20 text-sm">
          Dream submitted securely! AI Analysis will be available shortly...
        </div>
      )}

      <div className="flex flex-col space-y-3 relative">
         <label htmlFor="dream" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Your Dream
         </label>
         <textarea
           id="dream"
           name="dream"
           rows={8}
           className="flex min-h-[200px] w-full rounded-xl border border-input bg-transparent px-4 py-3 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
           placeholder={placeholder}
           required
           disabled={isPending || state?.success}
         />
      </div>

      <div className="flex justify-end pt-4">
         <Button 
           type="submit" 
           size="lg" 
           disabled={isPending || state?.success}
           className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md disabled:from-indigo-400 disabled:to-purple-400 transition-all font-medium"
         >
            {isPending ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <BrainCircuit className="mr-2 h-5 w-5" />
            )}
            {isPending ? "Submitting..." : submitText}
         </Button>
      </div>
    </form>
  );
}
