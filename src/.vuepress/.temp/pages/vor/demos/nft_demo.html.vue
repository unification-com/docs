<template><div><h1 id="vor-nft-competition-demo" tabindex="-1"><a class="header-anchor" href="#vor-nft-competition-demo" aria-hidden="true">#</a> VOR NFT Competition Demo</h1>
<p>Our first demo is running on Rinkeby testnet, and showcases the potential of VOR by implementing
an NFT competition. Competitions can be created, with an NFT as the prize. Entrants pay a
fee in xFUND to enter, and the winner is selected via VOR. The NFT is then minted for the
winner.</p>
<p><strong>Contract</strong>: <a href="https://rinkeby.etherscan.io/address/0xE1426CE899537340E5551cF37Db813B75Ec6C579#code" target="_blank" rel="noopener noreferrer">0xE1426CE899537340E5551cF37Db813B75Ec6C579<ExternalLinkIcon/></a><br>
<strong>Github</strong>: <a href="https://github.com/unification-com/vor-demos" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/vor-demos<ExternalLinkIcon/></a></p>
<h2 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction" aria-hidden="true">#</a> Interaction</h2>
<p>For the moment, interaction can be done via Etherscan (UI is forthcoming).</p>
<h3 id="view-a-competition" tabindex="-1"><a class="header-anchor" href="#view-a-competition" aria-hidden="true">#</a> View a Competition</h3>
<p>There is currently only one competition running at the moment, for this wonderful
<a href="https://gateway.pinata.cloud/ipfs/QmNuNkxxhdbWAGJkAESvcTPVZZevCKnTfnWtquRmAUzuBj" target="_blank" rel="noopener noreferrer">unique piece of art<ExternalLinkIcon/></a>.</p>
<p>The competition has a maximum of 100 entries, and costs 0.1 xFUNDMOCK to enter.</p>
<p>To see the competition details and current entrants:</p>
<ol>
<li>Go to <a href="https://rinkeby.etherscan.io/address/0xE1426CE899537340E5551cF37Db813B75Ec6C579#readContract" target="_blank" rel="noopener noreferrer">NFT Competition Contract<ExternalLinkIcon/></a> on
Etherscan and click the &quot;Read Contract&quot; button.</li>
<li>Select the <code v-pre>getCompetition</code> function</li>
<li>Enter <code v-pre>1</code> as the <code v-pre>_competitionId</code></li>
<li>Click the &quot;Query&quot; button</li>
</ol>
<h3 id="entering-a-competition" tabindex="-1"><a class="header-anchor" href="#entering-a-competition" aria-hidden="true">#</a> Entering a competition</h3>
<p>To enter a competition, you'll need some xFUNDMOCK tokens, and to approve the NFT competition contract to spend some for you
to pay for entry fees.</p>
<h4 id="getting-xfundmock-tokens" tabindex="-1"><a class="header-anchor" href="#getting-xfundmock-tokens" aria-hidden="true">#</a> Getting xFUNDMOCK tokens</h4>
<ol>
<li>Go to the <a href="https://rinkeby.etherscan.io/address/0x245330351344F9301690D5D8De2A07f5F32e1149#writeContract" target="_blank" rel="noopener noreferrer">xFUNDMOCK<ExternalLinkIcon/></a> contract</li>
<li>Click the &quot;Connect to Web3&quot; button and connect your wallet.</li>
<li>Click &quot;gimme&quot; function, followed by &quot;Write&quot;</li>
</ol>
<p>This should give you 10 <code v-pre>xFUNDMOCK</code> tokens.</p>
<h4 id="approving-the-nft-contract-to-pay-entry-fees" tabindex="-1"><a class="header-anchor" href="#approving-the-nft-contract-to-pay-entry-fees" aria-hidden="true">#</a> Approving the NFT Contract to pay entry fees</h4>
<ol>
<li>Go to the <a href="https://rinkeby.etherscan.io/address/0x245330351344F9301690D5D8De2A07f5F32e1149#writeContract" target="_blank" rel="noopener noreferrer">xFUNDMOCK<ExternalLinkIcon/></a> contract</li>
<li>Click the &quot;Connect to Web3&quot; button and connect your wallet.</li>
<li>Click the &quot;increaseAllowance&quot; function.</li>
<li>Enter <code v-pre>0xE1426CE899537340E5551cF37Db813B75Ec6C579</code> as the <code v-pre>spender</code> (the NFT Competition contract address)</li>
<li>Enter <code v-pre>5000000000</code> (5 xFUNDMOCK) as the <code v-pre>addedValue</code></li>
<li>Click &quot;Write&quot;</li>
</ol>
<p>You have now approved the NFT contract to transfer a small amount of xFUNDMOCK on your behalf.</p>
<h4 id="enter-the-competition" tabindex="-1"><a class="header-anchor" href="#enter-the-competition" aria-hidden="true">#</a> Enter the Competition</h4>
<p>Now we're ready to enter the competition.</p>
<ol>
<li>Go to <a href="https://rinkeby.etherscan.io/address/0xE1426CE899537340E5551cF37Db813B75Ec6C579#writeContract" target="_blank" rel="noopener noreferrer">NFT Competition Contract<ExternalLinkIcon/></a> on
Etherscan and click the &quot;Write Contract&quot; button.</li>
<li>Click the &quot;Connect to Web3&quot; button and connect your wallet.</li>
<li>Click the <code v-pre>enterCompetition</code> function.</li>
<li>Enter <code v-pre>1</code> as the <code v-pre>_competitionId</code></li>
<li>Click the &quot;Write&quot; button.</li>
</ol>
<p>Once your transaction has been confirmed, you can repeat the steps in the &quot;<strong>View a Competition</strong>&quot; section and you
should see your wallet address in the list of entrants.</p>
<h2 id="wen-winner" tabindex="-1"><a class="header-anchor" href="#wen-winner" aria-hidden="true">#</a> Wen Winner?</h2>
<p>The winner will be selected at some point in the future...</p>
<p>In the meantime, check out our <RouterLink to="/vor/guide/">guides</RouterLink> on deploying your own VOR-enable smart contract, or the
<a href="https://github.com/unification-com/vor-demos" target="_blank" rel="noopener noreferrer">Github repo<ExternalLinkIcon/></a> for this demo.</p>
</div></template>
