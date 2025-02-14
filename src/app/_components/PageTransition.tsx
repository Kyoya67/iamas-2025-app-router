"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // モーダルページかどうかをチェック
    const isModalPage = pathname.includes('/event/') ||
        pathname.includes('/master/') ||
        pathname.includes('/project/');

    // モーダルページの場合はアニメーションを無効化
    if (isModalPage) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}