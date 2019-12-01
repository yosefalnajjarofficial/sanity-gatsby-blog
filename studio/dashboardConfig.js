export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de3661a63eafdc259c63311',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t5wfb6dz',
                  apiId: 'b9a62ee5-d3dc-49d8-8b14-7da1e059fdb6'
                },
                {
                  buildHookId: '5de3661a1738f6263cb9c3a5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qkt57tiy',
                  apiId: '36f28297-aa94-4d89-bf18-6b0f6607acec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yosefalnajjarofficial/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qkt57tiy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
