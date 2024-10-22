import { useRef, useEffect } from 'react'
import { Destination } from '../../http/destinaitons';

export function useDocumentTitle(title: string, prevailOnUnmount = false) {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = `${title} - Student Career Consultancy`;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [])
}

interface Destination {
    id: number,
    destination_name: String,
    destination_thumbnail: String,
    destination_images: String,
    description: String,
    published: number,
    created_by: number,
    created_at: String,
    updated_at: String
}

export async function destinaionLoader(): Promise<Destination[]> {
    const data = await Destination.getAll();
    return data;
}

export async function getDestinationById({ params }: any): Promise<Destination> {
    const { id }: any = params;
    const data = await Destination.getById(id);
    const { destination } = data;
    return destination;
}