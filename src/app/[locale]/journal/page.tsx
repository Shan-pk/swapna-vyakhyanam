import { getTranslations } from "next-intl/server";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { signInWithGithub } from "@/app/auth/actions";
import DreamForm from "./DreamForm";

export default async function JournalPage() {
  const t = await getTranslations("Journal");
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2 text-center items-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 mb-4">
             <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{t("title")}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {user ? (
          <div className="rounded-2xl border bg-card text-card-foreground shadow-sm relative overflow-hidden">
            {/* Subtle aesthetic gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/50 to-transparent dark:from-purple-900/10 rounded-full blur-3xl -z-10 -mr-32 -mt-32 pointer-events-none" />
            
            <DreamForm placeholder={t("placeholder")} submitText={t("submit")} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border bg-card text-card-foreground shadow-sm">
             <div className="p-4 bg-muted/50 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
             </div>
             <p className="text-lg text-muted-foreground max-w-sm mb-8">
               {t("login_prompt")}
             </p>
             <form action={signInWithGithub}>
               <Button type="submit" size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-8 w-full sm:w-auto shadow-sm">
                 Log In to Continue
               </Button>
             </form>
          </div>
        )}
      </div>
    </div>
  );
}
