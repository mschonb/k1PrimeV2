"use client";
interface kuulaEmbedProps {
    tourUrl: string; // The URL of the tour
}

export default function KuulaEmbed({tourUrl} : kuulaEmbedProps) {
return (
    <iframe
    src= {tourUrl}
    className="w-full h-full"/>
);
}