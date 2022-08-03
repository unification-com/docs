module.exports = {
  sidebar: [
    {
      title: 'VOR Introduction',
      path: '/vor/'
    },
    {
      title: 'VOR Contract Addresses',
      path: '/vor/contracts'
    },
    {
      title: 'VOR Providers',
      path: '/vor/providers'
    },
    {
      title: 'VOR Guides',
      children: [
        'guide/',
        'guide/quickstart',
        'guide/implementation',
        'guide/interaction',
        'guide/advanced',
        'guide/oracle',
      ]
    },
    {
      title: 'VOR Demos',
      children: [
        'demos/',
        'demos/nft_demo',
      ]
    },
    {
      title: 'VOR Contract Docs',
      children: [
        'api/VOR',
        'api/VORConsumerBase',
        'api/VORCoordinator',
        'api/VORRequestIDBase',
      ]
    },
  ]
}
