<template><div><h1 id="vor-interacting-with-the-dnd-example" tabindex="-1"><a class="header-anchor" href="#vor-interacting-with-the-dnd-example" aria-hidden="true">#</a> VOR Interacting with the DnD example</h1>
<p>If you haven't already, run through the <RouterLink to="/vor/guide/implementation.html">full implementation example</RouterLink></p>
<p>This guide assumes you are familiar with Solidity development frameworks
such as Truffle/Hardhat.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>The contract will be deployed on Rinkeby testnet. You will need:</p>
<ol>
<li>wallets with test Eth - for example from the <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">faucet<ExternalLinkIcon/></a></li>
<li>xFUNDMOCK tokens for each wallet interacting, including the owner. See
<RouterLink to="/vor/contracts.html">contracts</RouterLink> for the Rinkeby testnet address, and call the
<code v-pre>gimme()</code> function to get 10 xFUNDMOCK tokens.</li>
</ol>
<h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2>
<p>Write your deployment script for your contract (this will be dependent on your framework
of choice). You will need to pass the two contract values to the <code v-pre>constructor</code>
for both <code v-pre>xFUNDMOCK</code> and the <code v-pre>VORCoordinator</code>. These can be obtained from
<RouterLink to="/vor/contracts.html">contracts</RouterLink>.</p>
<p>Once you're ready, deploy your contract on Rinkeby. You can also optionally
verify the contract source code on Etherscan.</p>
<h2 id="initialise" tabindex="-1"><a class="header-anchor" href="#initialise" aria-hidden="true">#</a> Initialise</h2>
<p>Once deployed, we need to call a couple of functions to set things up.</p>
<h3 id="dnd-increasevorallowance" tabindex="-1"><a class="header-anchor" href="#dnd-increasevorallowance" aria-hidden="true">#</a> DnD.increaseVorAllowance</h3>
<p>The first thing we need to do is allow the <code v-pre>VORCoordinator</code> smart contract
to spend xFUNDMOCK on behalf of our DnD smart contract. This allows us to
request random numbers, and for the <code v-pre>VORCoordinator</code> to transfer fees to
the VOR Oracle Provider.</p>
<p><code v-pre>increaseVorAllowance</code> can be called from your framework's development console,
or if you have verified the source code on Etherscan, from their &quot;Write Contract&quot;
feature.</p>
<p>The amount should be suitably high to cover any future costs. Many services
(for example Uniswap), do this once with the maximum allowable <code v-pre>uint256</code>
value &quot;115792089237316195423570985008687907853269984665640564039457584007913129639935&quot;</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>increaseVorAllowance</code> must be called by the wallet that deployed the DnD
example smart contract</p>
</div>
<h3 id="xfundmock-increaseallowance" tabindex="-1"><a class="header-anchor" href="#xfundmock-increaseallowance" aria-hidden="true">#</a> xFUNDMOCK.increaseAllowance</h3>
<p><em>Each</em> wallet that interacts with the DnD smart contract and intends to call
the <code v-pre>rollForHit</code> function will need to allow the DnD smart contract to spend
xFUNDMOCK tokens on their behalf.</p>
<p>The <code v-pre>increaseAllowance</code> function can be executed on Etherscan (see <RouterLink to="/vor/contracts.html">contracts</RouterLink>
for the Rinkeby address), using Metamask etc. Similarly, the amount
should be sufficiently high, and the <code v-pre>spender</code> value should be the address
of the deployed DnD smart contract.</p>
<h3 id="vorcoordinator-getprovidergranularfee" tabindex="-1"><a class="header-anchor" href="#vorcoordinator-getprovidergranularfee" aria-hidden="true">#</a> VORCoordinator.getProviderGranularFee</h3>
<p>It's good practice to check the current fees for your contract before requesting
randomness. This can be done by calling the
<RouterLink to="/vor/api/VORCoordinator.html#VORCoordinator-getProviderGranularFee-bytes32-address-">getProviderGranularFee</RouterLink> function in the
<code v-pre>VORCoordinator</code> contract and passing it the <code v-pre>keyHash</code> of the provider Oracle you're
requesting from, along with the address of your smart contract.</p>
<p>The <code v-pre>getProviderGranularFee</code> function can be called on
Etherscan (see <RouterLink to="/vor/contracts.html">contracts</RouterLink>, or via a helper function in your own contract
using the <code v-pre>IVORCoordinator</code> interface in the <code v-pre>ConsumerBase</code> library.</p>
<h2 id="interact" tabindex="-1"><a class="header-anchor" href="#interact" aria-hidden="true">#</a> Interact</h2>
<p>Now we have the boring stuff out of the way, we can actually run the game.
As before, these functions can be called via your Solidity framework of choice
or via Etherscan.</p>
<h3 id="dnd-addmonster" tabindex="-1"><a class="header-anchor" href="#dnd-addmonster" aria-hidden="true">#</a> DnD.addMonster</h3>
<p>This must be called by the wallet that deployed the contract. It's possible
to add up to 20 monsters, with each one requiring a short name (for example
&quot;Orc&quot;), and an AC value between 1 - 20.</p>
<h3 id="dnd-monsters" tabindex="-1"><a class="header-anchor" href="#dnd-monsters" aria-hidden="true">#</a> DnD.monsters</h3>
<p><code v-pre>monsters</code> has a built-in getter, which will accept the Id of a monster
and retrieve its stats. The result returned will be the name and AC.</p>
<h3 id="dnd-changestrmodifier" tabindex="-1"><a class="header-anchor" href="#dnd-changestrmodifier" aria-hidden="true">#</a> DnD.changeStrModifier</h3>
<p>Each wallet calling the <code v-pre>rollForHit</code> can optionally change their STR modifier,
up to 5. This modifier gets added to the d20 roll when the randomness request
is fulfilled.</p>
<h3 id="dnd-rollforhit" tabindex="-1"><a class="header-anchor" href="#dnd-rollforhit" aria-hidden="true">#</a> DnD.rollForHit</h3>
<p>A wallet can call the <code v-pre>rollForHit</code> to generate a random d20 roll to determin
if they hit the monster or not. There are 4 required parameters:</p>
<ol>
<li>The <code v-pre>monsetrId</code> of the monster being hit. See <code v-pre>DnD.monsters</code> above</li>
<li>A <code v-pre>seed</code> value - this can be any number, and gets mixed in with the
random number generation</li>
<li>The <code v-pre>keyhash</code> for the provider you wish to fulfil the request. This can be
obtained from the <RouterLink to="/vor/providers.html">providers</RouterLink> page.</li>
<li>the <code v-pre>fee</code> amount required to pay for the request. This will be deducted
from the wallet calling this function.</li>
</ol>
<p>::: warn
A VOR Provider's base fee is available on the <RouterLink to="/vor/providers.html">providers</RouterLink> page
or by querying the <code v-pre>VORCoordinator</code> smart contract. This is the minimum
amount they will accept for fulfilling a request.</p>
<p>However, providers may also set granular fees on a per-consumer contract
basis, because not every contract is the same and more complex consumer
contracts will incur higher gas costs for the provider.</p>
<p>The current fee for your contract can be acquired by calling the
<code v-pre>VORCoordinator.getProviderGranularFee()</code> function and passing the
provider's <code v-pre>keyHash</code> along with the address of your contract.</p>
<p>The <code v-pre>VORCoordinator</code> address is available on the <RouterLink to="/vor/contracts.html">contracts</RouterLink>
page.
:::</p>
<p>Once a request has been initialised, the VOR Provider Oracle will see
a <code v-pre>RandomnessRequest</code> event emitted in the <code v-pre>VORCoordinator</code> smart
contract, generate a random number, and call your contract's
<code v-pre>fulfillRandomness</code> function to complete the process.</p>
<h3 id="dnd-getlastresult" tabindex="-1"><a class="header-anchor" href="#dnd-getlastresult" aria-hidden="true">#</a> DnD.getLastResult</h3>
<p>It's possible to monitor the DnD contract's event logs and watch for the
<code v-pre>HitResult</code> event. This indicates that the VOR Provider Oracle has fulfilled
the randomness request.</p>
<p>Calling the <code v-pre>DnD.getLastResult</code> function requires 2 parameters:</p>
<ol>
<li><code v-pre>player</code> - the wallet address of the player that rolled</li>
<li><code v-pre>monsterId</code> - the ID of the monster they attempted to hit</li>
</ol>
<p>The result returned will be something along the lines of:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[
  roll: '17',
  modified: '19',
  result: 'hit',
  isRolling: false
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
