'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menue";
import { cn } from "@/utils/cn";
import Link from 'next/link'

function navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Work">
                    </MenuItem>
                </Link>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Profile">
                    </MenuItem>
                </Link>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default navbar