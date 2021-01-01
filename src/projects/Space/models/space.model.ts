export interface Launch {
    id: string;
    provider: string;
}

export interface News {
    id: string;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: Launch[];
    events: any[];
}
