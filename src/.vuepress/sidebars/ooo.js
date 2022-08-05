module.exports = {
  sidebar: [
    {
      text: 'OoO Introduction',
      link: '/ooo/'
    },
    {
      text: 'OoO Contract Addresses',
      link: '/ooo/contracts'
    },
    {
      text: 'OoO Provider Addresses',
      link: '/ooo/providers'
    },
    {
      text: 'OoO Guides',
      collapsible: true,
      children: [
        '/ooo/guide/',
        '/ooo/guide/quickstart',
        '/ooo/guide/implementation',
        '/ooo/guide/interaction',
        '/ooo/guide/ooo_api'
      ]
    },
    {
      text: 'OoO Contract Docs',
      collapsible: true,
      children: [
        '/ooo/api/Router',
        '/ooo/api/lib/ConsumerBase',
        '/ooo/api/lib/RequestIdBase',
        '/ooo/api/examples/DemoConsumer',
      ]
    },
  ]
}
