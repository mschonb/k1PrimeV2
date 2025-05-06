"use client";
export default function KuulaEmbed({tourUrl} : {tourUrl: string}) {
return (
    <iframe
    src= {tourUrl}
    className="w-full h-full"/>
);
}