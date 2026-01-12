import { useEffect, useRef } from "react";
import { useTooltip } from "./TooltipContext";
import { linkStyle } from "../../lib/styles";

interface TooltipTextProps {
    id: string;
    label: string;
    tooltip: string;
}

export default function TooltipText({ id, label, tooltip }: TooltipTextProps) {
    const { openId, setOpenId } = useTooltip();
    const ref = useRef<HTMLSpanElement>(null);

    const isOpen = openId === id;

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpenId(null);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [setOpenId]);

    return (
        <span ref={ref} className="relative inline-block group">
            <span
                className={linkStyle}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenId(isOpen ? null : id);
                }}
            >
                {label}
            </span>

            {/* Desktop hover */}
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs rounded-md bg-base-2 border border-secondary px-3 py-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50 hidden md:block">
                {tooltip}
            </span>

            {/* Mobile click */}
            {isOpen && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs rounded-md bg-base-2 border border-secondary px-3 py-1 text-sm text-primary shadow-lg z-50 md:hidden">
                    {tooltip}
                </span>
            )}
        </span>
    );
}