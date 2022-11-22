
module.exports = {
  sidebar: [
    {
      title: 'Introduction',
      children: [
        '',
        'introduction/about-mainchain',
        'introduction/denomination',
        'introduction/fees-and-gas',
        'introduction/total-supply',
        'introduction/genesis-settings',
        'introduction/delegators',
        'introduction/validators',
        'introduction/faqs'
      ]
    },
    {
      title: 'Installation',
      children: [
        'software/installation',
        'software/cosmovisor/install_statesync_cosmovisor',
        'software/run-und-as-service',
      ]
    },
    {
      title: 'Networks',
      children: [
        'networks/overview',
        {
          title: 'Join Public Networks',
          children: [
            'networks/join-network',
            'networks/become-validator',
          ]
        },
        {
          title: 'Run a Local DevNet',
          children: [
            'networks/devnet/local-devnet-docker',
            'networks/devnet/single-node-devnet'
          ]
        },
        'networks/sentry',
        'networks/participation'
      ]
    },
    {
      title: "Migrations & Upgrades",
      children: [
        'migrations/',
        'migrations/cosmovisor',
        'migrations/1-init_ibc_upgrade'
      ]
    },
    {
      title: 'Using und',
      children: [
        'software/accounts-wallets',
        'software/light-client-rpc',
        {
          title: 'CLI Command & Config References',
          children: [
            'software/und_cmd/und',
            'software/und-mainchain-config-ref',
            'software/und-mainchain-app-config-ref',
            'software/und-mainchain-client-config-ref'
          ]
        }
      ]
    },
    {
      title: "IBC Transfers",
      children: [
        'ibc/',
        {
          title: "Generic",
          children: [
            "ibc/generic/"
          ]
        },
        {
          title: "Gravity Bridge",
          children: [
            "ibc/gravity-bridge/cli",
            "ibc/gravity-bridge/web-portal"
          ]
        },
        {
          title: "Osmosis",
          children: [
            "ibc/osmosis/"
          ]
        }
      ]
    },
    {
      title: 'Tx & Query Examples',
      children: [
        'examples/transactions',
        'examples/wrkchain',
        'examples/beacon',
        'examples/enterprise-fund'
      ]
    },
    {
      title: 'Cloud Installation Guides',
      children: [
        'guides/cloud/install-aws',
        'guides/cloud/install-gc'
      ]
    },
    {
      title: 'Developers',
      children: [
        'developers/third-party',
      ]
    },
  ]
}
