
module.exports = {
  sidebar: [
    {
      text: 'Home',
      link: '/mainchain/',
      collapsible: true,
    },
    {
      text: 'Introduction',
      collapsible: true,
      children: [
        '/mainchain/introduction/about-mainchain',
        '/mainchain/introduction/denomination',
        '/mainchain/introduction/fees-and-gas',
        '/mainchain/introduction/total-supply',
        '/mainchain/introduction/genesis-settings',
        '/mainchain/introduction/delegators',
        '/mainchain/introduction/validators',
        '/mainchain/introduction/faqs'
      ]
    },
    {
      text: 'Installation',
      collapsible: true,
      children: [
        '/mainchain/software/installation',
        '/mainchain/software/run-und-as-service',
      ]
    },
    {
      text: 'Networks',
      collapsible: true,
      children: [
        {
          text: 'Public Networks',
          collapsible: true,
          children: [
            '/mainchain/networks/join-network',
            '/mainchain/networks/become-validator'
          ]
        },
        {
          text: 'DevNet',
          collapsible: true,
          children: [
            '/mainchain/networks/devnet/local-devnet-docker',
            '/mainchain/networks/devnet/single-node-devnet'
          ]
        },
        '/mainchain/networks/participation',
      ]
    },
    {
      text: "Migrations & Upgrades",
      collapsible: true,
      children: [
        '/mainchain/migrations/',
        '/mainchain/migrations/cosmovisor',
        '/mainchain/migrations/1-ibc_upgrade'
      ]
    },
    {
      text: 'Using und',
      collapsible: true,
      children: [
        '/mainchain/software/accounts-wallets',
        '/mainchain/software/light-client-rpc',
        {
          text: 'CLI Command & Config References',
          collapsible: true,
          children: [
            '/mainchain/software/und_cmd/und',
            '/mainchain/software/und-mainchain-config-ref',
            '/mainchain/software/und-mainchain-app-config-ref',
            '/mainchain/software/und-mainchain-client-config-ref'
          ]
        }
      ]
    },
    {
      text: 'Tx & Query Examples',
      collapsible: true,
      children: [
        '/mainchain/examples/transactions',
        '/mainchain/examples/wrkchain',
        '/mainchain/examples/beacon',
        '/mainchain/examples/enterprise-fund'
      ]
    },
    {
      text: 'Cloud Installation Guides',
      collapsible: true,
      children: [
        '/mainchain/guides/cloud/install-aws',
        '/mainchain/guides/cloud/install-gc'
      ]
    },
    {
      text: 'Developers',
      collapsible: true,
      children: [
        '/mainchain/developers/third-party',
      ]
    },
  ]
}
