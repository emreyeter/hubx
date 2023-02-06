    export interface CategoryImage {
        id: number;
        name: string;
        alternativeText?: any;
        caption?: any;
        width: number;
        height: number;
        formats?: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: any;
        provider: string;
        provider_metadata?: any;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface CategoryItem {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        title: string;
        rank: number;
        image: CategoryImage;
    }

    export interface Pagination {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }

    export interface Meta {
        pagination: Pagination;
    }

    export interface CategoryResponse {
        data: CategoryItem[];
        meta: Meta;
    }



