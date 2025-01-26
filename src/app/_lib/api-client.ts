import useSWR from 'swr';
import type { MasterResponse, EventResponse } from '../_types/api';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useMasterData() {
    return useSWR<MasterResponse[]>('/api/master', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000,
    });
}

export function useStudentByName(name: string) {
    const { data, error } = useMasterData();

    const student = data?.find(item =>
        item.authorEnglishName.split(' ').join('') === name
    );

    return {
        student,
        error,
        isLoading: !error && !data,
    };
}

export function useEventData() {
    return useSWR<EventResponse[]>('/api/events', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000,
    });
} 