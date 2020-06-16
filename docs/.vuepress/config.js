module.exports = {
  title: 'Strngle Docs',
  description: 'Documentation for Strngle — composable string validation',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/jack-chapman/strngle' },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['/guide/installation', 'Installation'],
          ['/guide/validate', 'Validation']
        ]
      },
    ],
    displayAllHeaders: true,
    markdown: {
      lineNumbers: true
    }
  }
}