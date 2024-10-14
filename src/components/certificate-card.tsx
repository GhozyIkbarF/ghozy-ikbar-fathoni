import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "./icons";
import Link from "next/link";

interface Props {
  title: string;
  dates?: string;
  issuer: string;
  image?: string;
  link: string
  // links?: readonly {
  //   icon: React.ReactNode;
  //   title: string;
  //   href: string;
  // }[];
}

export function CertificateCard({
  title,
  dates="",
  issuer,
  image,
  link,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-semibold leading-none">{title}</h2>
        {issuer && (
          <p className="text-sm text-muted-foreground">{issuer}</p>
        )}
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        {link && (
          <Link href={link} className="flex items-center gap-2 max-w-min prose dark:prose-invert text-sm bg-black text-white dark:bg-white dark:text-black rounded-md px-2 py-[1px]">
            credential <Icons.openLink className="inline size-3" />
          </Link>
        )}
      </div>
    </li>
  );
}
