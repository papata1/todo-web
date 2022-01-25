export interface Authors {
    id?: string;
    name?: string;
    avatar_url?: string;
    place?: string;
    role?: string;
}

export interface Post {
    title?: string;
    body?: string;
    image_url?: string;
    created_at?: Date;
    author_id?: string;
    id?: string;
    authors?: Authors;
}
