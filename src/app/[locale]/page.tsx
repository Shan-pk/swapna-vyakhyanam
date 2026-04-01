import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sparkles, Moon, BrainCircuit } from "lucide-react";

export default async function Home() {
  const t = await getTranslations("Index");

  return (
    <div className="flex flex-col flex-1 items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 -z-10 rounded-b-[100px] blur-3xl opacity-70" />
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-indigo-400/20 to-blue-400/20 blur-[100px] -z-10" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 pt-24 pb-32">
        <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm text-purple-600 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mb-4 shadow-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          <span>AI-Powered Dream Analysis</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-balance bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-100 dark:to-purple-200 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8 text-balance">
          {t("subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
          <Link 
            href="/journal" 
            className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 transition-all w-full sm:w-auto text-md font-medium"
          >
            <Moon className="mr-2 h-5 w-5" />
            {t("cta_primary")}
          </Link>
          <Link 
            href="#how-it-works" 
            className="inline-flex items-center justify-center rounded-lg h-12 px-8 shadow-sm w-full sm:w-auto text-md font-medium border border-indigo-200 text-foreground hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-950/50 transition-all"
          >
            <BrainCircuit className="mr-2 h-5 w-5 text-indigo-500" />
            {t("cta_secondary")}
          </Link>
        </div>
      </div>

      <section id="how-it-works" className="w-full py-16 md:py-24 bg-white dark:bg-zinc-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("features_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50">
              <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">{t("feature_1_title")}</h3>
              <p className="text-muted-foreground">{t("feature_1_desc")}</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md hover:border-purple-100 dark:hover:border-purple-900/50">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">{t("feature_2_title")}</h3>
              <p className="text-muted-foreground">{t("feature_2_desc")}</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md hover:border-pink-100 dark:hover:border-pink-900/50">
              <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-2">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">{t("feature_3_title")}</h3>
              <p className="text-muted-foreground">{t("feature_3_desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
