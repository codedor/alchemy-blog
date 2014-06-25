alchemy.connect('blog::view', '/:prefix/blog/:slug', {controller: 'blog_posts', action: 'view'});
alchemy.connect('blog::preview', '/blog_preview/:id', {controller: 'blog_posts', action: 'view'});