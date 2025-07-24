'use client'
import { useParams } from 'next/navigation';

const Page = () => {
    const params = useParams();
    const id = params.id;

    return <div>Projeto ID: {id}</div>;
};

export default Page;
