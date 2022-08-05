module.exports = {
  sidebar: [
    {
      text: 'VOR Introduction',
      link: '/vor/'
    },
    {
      text: 'VOR Contract Addresses',
      link: '/vor/contracts'
    },
    {
      text: 'VOR Providers',
      link: '/vor/providers'
    },
    {
      text: 'VOR Guides',
      collapsible: true,
      children: [
        '/vor/guide/',
        '/vor/guide/quickstart',
        '/vor/guide/implementation',
        '/vor/guide/interaction',
        '/vor/guide/advanced',
        '/vor/guide/oracle',
      ]
    },
    {
      text: 'VOR Demos',
      collapsible: true,
      children: [
        '/vor/demos/',
        '/vor/demos/nft_demo',
      ]
    },
    {
      text: 'VOR Contract Docs',
      collapsible: true,
      children: [
        '/vor/api/VOR',
        '/vor/api/VORConsumerBase',
        '/vor/api/VORCoordinator',
        '/vor/api/VORRequestIDBase',
      ]
    },
  ]
}
