module.exports = {
  sidebar: [
    {
      title: 'OoO Introduction',
      path: '/ooo/'
    },
    {
      title: 'OoO Contract Addresses',
      path: '/ooo/contracts'
    },
    {
      title: 'OoO Provider Addresses',
      path: '/ooo/providers'
    },
    {
      title: 'OoO Guides',
      children: [
        'guide/',
        'guide/quickstart',
        'guide/implementation',
        'guide/interaction',
        'guide/ooo_api'
      ]
    },
    {
      title: 'OoO Contract Docs',
      children: [
        'api/Router',
        'api/lib/ConsumerBase',
        'api/lib/RequestIdBase',
        'api/examples/DemoConsumer',
      ]
    },
  ]
}
