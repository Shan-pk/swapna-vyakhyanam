import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { signInWithGithub, signOut } from "@/app/auth/actions";

export default async function Navbar() {
  const t = await getTranslations("Navigation");
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl tracking-tight bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              SwapnaVyakhyanam
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link href="/journal" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("journal")}
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4 border-l pl-4">
          <LocaleSwitcher />
          {user ? (
            <div className="flex items-center gap-4">
               <span className="text-sm text-muted-foreground hidden md:inline-block">
                 {user.email}
               </span>
               <form action={signOut}>
                 <Button variant="outline" size="sm" type="submit">
                    Log Out
                 </Button>
               </form>
            </div>
          ) : (
            <form action={signInWithGithub}>
              <Button size="sm" type="submit" className="hidden md:flex bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white shadow-md">
                 Log In with GitHub
              </Button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
