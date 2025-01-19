'use client';

interface StudentContentProps {
    name: string;
}

export function StudentContent({ name }: StudentContentProps) {
    return (
        <div className="p-8">
            <h1 className="text-[#000f9f] text-fluid-xl mb-4">
                {name}
            </h1>
            {/* 他の学生情報 */}
        </div>
    );
} 