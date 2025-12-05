export default {
    name: 'blog',
    title: 'Blog', 
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        },
        {
            name: 'titleImage',
            title: 'Title Image',
            type: 'image',
        },
    ],  
}