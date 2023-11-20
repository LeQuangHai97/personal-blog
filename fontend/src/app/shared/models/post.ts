export class Post {
    id!: string;
    name!: string;
    date: Date = new Date();
    categories!: string;
    description!: string;
    tags!: string[];
    stars!: number;
    imageUrl!: string;
    author!: string;
}