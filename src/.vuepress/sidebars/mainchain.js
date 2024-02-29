
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
        'introduction/faqs',
      ]
    },
    {
      title: 'Software',
      children: [
        {
          title: 'Client',
          children: [
            'software/installation',
            'software/accounts-wallets',
          ]
        },
        {
          title: 'Server',
          children: [
            'software/cosmovisor/install_und_with_cosmovisor',
            'software/run-und-as-service',
            'networks/sentry',
            'software/light-client-rpc',
            'software/statesync.md',
          ]
        },
        {
          title: 'CLI Command & Config References',
          children: [
            'software/und_cmd/und',
            'software/und-mainchain-config-ref',
            'software/und-mainchain-app-config-ref',
            'software/und-mainchain-client-config-ref',
          ]
        }
      ]
    },
    {
      title: "Migrations & Upgrades",
      children: [
        'migrations/',
        'migrations/cosmovisor',
        'migrations/1-init_ibc_upgrade',
        'migrations/2-grog_upgrade',
        'migrations/3-keyleth_upgrade',
        'migrations/4-percival_upgrade',
      ]
    },
    {
      title: 'Networks',
      children: [
        'networks/overview',
        'networks/erc20_ibc',
        'networks/participation',
      ]
    },
    {
      title: 'Validators',
      children: [
        'introduction/validators',
        'networks/become-validator',
      ]
    },
    {
      title: 'Delegators',
      children: [
        'introduction/delegators',
      ]
    },
    {
      title: "IBC Transfers",
      children: [
        'ibc/',
        {
          title: "Generic",
          children: [
            "ibc/generic/",
          ]
        },
        {
          title: "Gravity Bridge",
          children: [
            "ibc/gravity-bridge/cli",
            "ibc/gravity-bridge/web-portal",
          ]
        },
        {
          title: "Osmosis",
          children: [
            "ibc/osmosis/",
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
        'examples/enterprise-fund',
      ]
    },
    {
      title: 'Guides',
      children: [
        'guides/legacy-to-current',
        {
          title: 'Cloud Installation',
          children: [
            'guides/cloud/install-aws',
            'guides/cloud/install-gc',
          ]
        }
      ]
    },
    {
      title: 'Developers',
      children: [
        'developers/third-party',
        {
          title: 'Run a Local DevNet',
          children: [
            'networks/devnet/local-devnet-docker',
            'networks/devnet/single-node-devnet',
          ]
        },
      ]
    },
  ]
}
