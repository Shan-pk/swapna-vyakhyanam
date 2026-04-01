import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-semibold text-lg bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            SwapnaVyakhyanam
          </span>
          <p className="text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} SwapnaVyakhyanam. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
