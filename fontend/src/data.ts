import { Post } from "./app/shared/models/post"

Post

export const sample_post: Post[] = [
    {
        id:'1',
        name: 'THE PRESENT DAY PLANNER',
        date: new Date(),
        categories: 'Uncategorized',
        description: 'Bạn đọc thân yêu của The Present Writer, Sau hơn 5 năm nghiên cứu, sáng tạo và thử nghiệm, The Present Day planner—cuốn sổ hiệu năng mà mình ấp ủ đã mở bán chính thức tại Việt Nam!',
        tags: ['tag1', 'tag2'],
        stars: 5,
        imageUrl: 'assets/post-1.webp',
        author: 'Chi',
    },
]