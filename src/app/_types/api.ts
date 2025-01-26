export interface MasterResponse {
    authorJapaneseName: string;
    authorEnglishName: string;
    profileJapanese: string;
    profileEnglish: string;
    X_URL?: string;
    instagram_URL?: string;
    other_URL?: string;
    workTitleJapanese: string;
    workTitleEnglish: string;
    workDescriptionJapanese: string;
    workDescriptionEnglish: string;
}

export interface EventResponse {
    eventName: string;
    exhibitors: string;
    day: string;
    time: string;
    content: string;
} 