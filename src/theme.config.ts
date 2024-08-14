export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Yw4rf",
  /** your name */
  author: "tobigfioroni",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://astro-theme-typography.vercel.app/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: 'light',
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/Yw4rf",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/tobigfioroni",
    },
    {
      name: "twitter",
      href: "https://x.com/Yw4rf",
    },
    {
      name: "instagram",
      href: "https://instagram.com/yw4rf",
    }, 
    {
      name: "whatsapp",
      href: "https://instagram.com/yw4rf",
    }
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
     giscus: {
       repo: 'Yw4rf/yw4rf-blog',
       repoId: '842627339',
       category: 'General',
       categoryId: 'DIC_kwDOKy9HOc4CegmW',
       mapping: 'title',
       strict: '0',
       reactionsEnabled: '1',
       emitMetadata: '1', 
       inputPosition: 'top',
       theme: 'light',
       lang: 'en',
       loading: 'lazy',
     }
  }
}

