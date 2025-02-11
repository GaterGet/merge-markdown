import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {locales} from "@/i18n/i18n";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function generateStaticParams() {
	return locales.map(locale => ({ lang: locale }))
}