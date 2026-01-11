import { createContext, useContext, useState, type ReactNode } from "react";

interface TooltipContextType {
    openId: string | null;
    setOpenId: (id: string | null) => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

export function TooltipProvider({ children }: { children: ReactNode }) {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <TooltipContext.Provider value={{ openId, setOpenId }}>
            {children}
        </TooltipContext.Provider>
    );
}

export function useTooltip() {
    const ctx = useContext(TooltipContext);
    if (!ctx) throw new Error("useTooltip must be used inside TooltipProvider");
    return ctx;
}