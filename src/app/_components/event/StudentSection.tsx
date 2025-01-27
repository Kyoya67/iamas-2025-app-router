'use client';

import { useStudentByName } from "@/app/_lib/api-client";

export const StudentSection = ({ name }: { name: string }) => {
    console.log("StudentSection rendering with name:", name);

    const { student, error } = useStudentByName(name);

    console.log("StudentSection data:", { student, error });

    if (error) {
        console.error("Error fetching student:", error);
        return <div>Error loading student data</div>;
    }

    if (!student) {
        console.log("No student data yet");
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="text-base text-black">{student.authorJapaneseName}</div>
            <div className="text-base text-black">{student.authorEnglishName}</div>
        </div>
    );
}; 