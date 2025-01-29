export default async function ProjectPage({ params }: { params: { name: string } }) {
    const { name } = await params;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
} 