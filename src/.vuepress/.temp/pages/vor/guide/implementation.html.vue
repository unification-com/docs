<template><div><h1 id="vor-full-implementation-example" tabindex="-1"><a class="header-anchor" href="#vor-full-implementation-example" aria-hidden="true">#</a> VOR Full implementation example</h1>
<p>In this guide, we'll run through a more detailed example and show you how to
implement a simplified DnD D20 for fighting monsters and calculating hits.</p>
<p>The resulting contract will:</p>
<ul>
<li>allow any player to &quot;roll for hit&quot; against a selected monster, using a VOR
request for the D20 roll</li>
<li>allow the owner to add up to 20 monsters</li>
<li>allow any player to register their STR modifier</li>
<li>allow the contract owner to implement and run some optional helper functions
included in the <code v-pre>VORConsumerBase</code> contract.</li>
</ul>
<p>Players calling the <code v-pre>rollToHit</code> function will pay their own xFUNDMOCK fees.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This guide assumes you have read through the <RouterLink to="/vor/guide/quickstart.html">quickstart</RouterLink>
and :</p>
<ol>
<li>set up your development and NodeJS environment</li>
<li>initialised a new project (using npm, and Truffle/Hardhat etc.)</li>
<li>installed the required <code v-pre>@unification-com/xfund-vor</code> and
supplementary <code v-pre>@openzeppelin/contracts</code> packages using
<code v-pre>npm</code>/<code v-pre>yarn</code></li>
</ol>
</div>
<p>The full, final contract can be seen in our <code v-pre>vor-demos</code> Github repo:
<a href="https://github.com/unification-com/vor-demos/blob/main/contracts/DnD.sol" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/vor-demos/blob/main/contracts/DnD.sol<ExternalLinkIcon/></a>.</p>
<h2 id="initial-contract-skeleton" tabindex="-1"><a class="header-anchor" href="#initial-contract-skeleton" aria-hidden="true">#</a> Initial contract skeleton</h2>
<p>We'll start with a simple contract outline - some function stubs and the constructor:</p>
<p>Create <code v-pre>contracts/DnD.sol</code>. All future edits will be in this file</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token number">0.6</span><span class="token number">.12</span><span class="token punctuation">;</span>
<span class="token keyword">pragma</span> experimental ABIEncoderV2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"@openzeppelin/contracts/math/SafeMath.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@openzeppelin/contracts/access/Ownable.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@unification-com/xfund-vor/contracts/VORConsumerBase.sol"</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">DnD</span> <span class="token keyword">is</span> Ownable<span class="token punctuation">,</span> VORConsumerBase <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">SafeMath</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _vorCoordinator<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span>
    <span class="token function">VORConsumerBase</span><span class="token punctuation">(</span>_vorCoordinator<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">rollForHit</span><span class="token punctuation">(</span>
        <span class="token builtin">uint256</span> _monsterId<span class="token punctuation">,</span> 
        <span class="token builtin">uint256</span> _seed<span class="token punctuation">,</span> 
        <span class="token builtin">bytes32</span> _keyHash<span class="token punctuation">,</span> 
        <span class="token builtin">uint256</span> _fee
    <span class="token punctuation">)</span> 
    <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        requestId <span class="token operator">=</span> <span class="token function">requestRandomness</span><span class="token punctuation">(</span>_keyHash<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">fulfillRandomness</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _randomness<span class="token punctuation">)</span> 
    <span class="token keyword">internal</span> override <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We're importing the <code v-pre>VORConsumerBase</code>, and some helper contracts from the
awesome OpenZeppelin suite, and we have the three most basic functions
required to implement VOR:</p>
<ol>
<li>a <code v-pre>constructor</code> which passes the addresses of the <code v-pre>VORCoordinatior</code> and
<code v-pre>xFUND</code> to the <code v-pre>VORConsumerBase</code>.</li>
<li>a <code v-pre>rollForHit</code> function which will ultimately call the <code v-pre>requestRandomness</code>
function in <code v-pre>VORConsumerBase</code>.</li>
<li>a <code v-pre>fulfillRandomness</code> which overrides the same function <code v-pre>VORConsumerBase</code>, and
which will be called by the VOR Oracle via the <code v-pre>VORCoordinator</code> smart contract.</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>the <code v-pre>_keyHash</code> and <code v-pre>_fee</code> args passed to <code v-pre>rollForHit</code> function can be
set/retrieved elsewhere in the contract, and passed to the <code v-pre>requestRandomness</code>
function. Your request function does not necessarily require these arguments,
but the values do ultimately need passing to <code v-pre>requestRandomness</code></p>
<p><code v-pre>_seed</code> however, should be generated for each individual request.</p>
</div>
<h2 id="adding-some-functionality" tabindex="-1"><a class="header-anchor" href="#adding-some-functionality" aria-hidden="true">#</a> Adding some functionality</h2>
<p>The above contract isn't very useful. While it requests a random number, it
doesn't actually do anything with it. Let's add a few functions
that can make use of the random number, and some support variables, structures
and events.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><em>None of the following variables or events are required by VOR</em>.
They are required only for the DnD contract's own functionality
and for the purpose of demoing VOR.</p>
</div>
<h3 id="contract-variables" tabindex="-1"><a class="header-anchor" href="#contract-variables" aria-hidden="true">#</a> Contract variables</h3>
<p>We'll need a couple of simple contract variables to keep track of our monsters:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token comment">// keep track of the monsters added</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> currentMonsterId<span class="token punctuation">;</span>

    <span class="token comment">// super simple monster stats</span>
    <span class="token keyword">struct</span> <span class="token class-name">Monster</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> name<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> ac<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> roll<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> modified<span class="token punctuation">;</span>
        <span class="token builtin">string</span> result<span class="token punctuation">;</span>
        <span class="token builtin">bool</span> isRolling<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nothing complex here - each monster added will be assgined an incremental
ID <code v-pre>currentMonsterId</code>, and have some simple stats associated with it.
<code v-pre>Result</code> will be used to store that last result for a player/monster.</p>
<h3 id="mappings" tabindex="-1"><a class="header-anchor" href="#mappings" aria-hidden="true">#</a> Mappings</h3>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token comment">// monsters held in the contract</span>
    <span class="token keyword">mapping</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=></span> Monster<span class="token punctuation">)</span> <span class="token keyword">public</span> monsters<span class="token punctuation">;</span>
    <span class="token comment">// player STR modifiers</span>
    <span class="token keyword">mapping</span> <span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> strModifiers<span class="token punctuation">;</span>
    <span class="token comment">// map request IDs to monster IDs</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> requestIdToMonsterId<span class="token punctuation">;</span>
    <span class="token comment">// map request IDs to player addresses, to retrieve STR modifiers</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> <span class="token operator">=></span> <span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token keyword">public</span> requestIdToAddress<span class="token punctuation">;</span>
    <span class="token comment">// store last [player][monster] results</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=></span> Result<span class="token punctuation">)</span><span class="token punctuation">)</span> lastResult<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>monsters</code> will be used to store our contracts monsters and their stats</li>
<li><code v-pre>strModifiers</code> will allow players to set their STR modifier, which gets
added to each dice roll</li>
<li><code v-pre>requestIdToMonsterId</code> will temporarily store data on which request relates
to which monster while the roll is in progress</li>
<li><code v-pre>requestIdToAddress</code> will similarly track which user rolled.</li>
<li><code v-pre>lastResult</code> will store the last roll and result for a player/monster</li>
</ul>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">event</span> <span class="token function">AddMonster</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">string</span> name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> ac<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">ChangeStrModifier</span><span class="token punctuation">(</span><span class="token builtin">address</span> player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> strMod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">HittingMonster</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">HitResult</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> requestId<span class="token punctuation">,</span> <span class="token builtin">address</span> player<span class="token punctuation">,</span> <span class="token builtin">string</span> result<span class="token punctuation">,</span> <span class="token builtin">uint256</span> roll<span class="token punctuation">,</span> <span class="token builtin">uint256</span> modified<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Again, nothing complex here - just some events that will be emitted during
the functions we'll implement next.</p>
<h2 id="monster-player-related-functions" tabindex="-1"><a class="header-anchor" href="#monster-player-related-functions" aria-hidden="true">#</a> Monster &amp; Player related functions</h2>
<p>We'll add few non-VOR functions first, to support the contract
owner adding monsters, and players editing their stats.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><em>Neither of the two following functions are required by VOR</em>.
They are required only for the DnD contract's own functionality
and for the purpose of demoing VOR.</p>
</div>
<h3 id="addmonster" tabindex="-1"><a class="header-anchor" href="#addmonster" aria-hidden="true">#</a> addMonster</h3>
<p>This will just allow the contract owner to add up to 20 monsters. The
<code v-pre>onlyOwner</code> modifier is part of OpenZeppelin's <code v-pre>Ownable</code> contract.</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">addMonster</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _ac<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>nextMonsterId <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"too many monsters"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_ac <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"monster too weak"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        monsters<span class="token punctuation">[</span>nextMonsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> _name<span class="token punctuation">;</span>
        monsters<span class="token punctuation">[</span>nextMonsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac <span class="token operator">=</span> _ac<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">AddMonster</span><span class="token punctuation">(</span>nextMonsterId<span class="token punctuation">,</span> _name<span class="token punctuation">,</span> _ac<span class="token punctuation">)</span><span class="token punctuation">;</span>
        nextMonsterId <span class="token operator">=</span> nextMonsterId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, we're just taking the name and AC value of a new monster and adding it
to the <code v-pre>monsters</code> list, then emitting an event.
Players will select the ID of the monster they are fighting when
calling the <code v-pre>rollForHit</code> function.</p>
<h3 id="changestrmodifier" tabindex="-1"><a class="header-anchor" href="#changestrmodifier" aria-hidden="true">#</a> changeStrModifier</h3>
<p>This function will allow players to set their STR modifier. Anyone can
call, and the result will be stored with the <code v-pre>msg.sender</code>.</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">changeStrModifier</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _strMod<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_strMod <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"player too strong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strModifiers<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> _strMod<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">ChangeStrModifier</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _strMod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getlastresult" tabindex="-1"><a class="header-anchor" href="#getlastresult" aria-hidden="true">#</a> getLastResult</h3>
<p>This function allows queries to the contract to retrieve the last roll
result for a player/monster combo</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">getLastResult</span><span class="token punctuation">(</span><span class="token builtin">address</span> _player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _monsterId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>Result <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lastResult<span class="token punctuation">[</span>_player<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unstickroll" tabindex="-1"><a class="header-anchor" href="#unstickroll" aria-hidden="true">#</a> unstickRoll</h3>
<p>Because sometimes the dice rolls under the table...</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">unstickRoll</span><span class="token punctuation">(</span><span class="token builtin">address</span> _player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _monsterId<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        lastResult<span class="token punctuation">[</span>_player<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="implementing-vor-for-randomness" tabindex="-1"><a class="header-anchor" href="#implementing-vor-for-randomness" aria-hidden="true">#</a> Implementing VOR for Randomness</h2>
<p>Now we have some support functions, we can implement the actual randomness
functionality and make the contract do something. We need to extend and
flesh out the <code v-pre>rollForHit</code> function, which will call the underlying <code v-pre>requestRandomness</code>
function in the <code v-pre>VORConsumerBase</code> contract, and the <code v-pre>fulfillRandomness</code>
function, which will receive and process the random number.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The following two functions <strong>are required</strong> to interact with VOR and request
random numbers.</p>
</div>
<h3 id="rollforhit" tabindex="-1"><a class="header-anchor" href="#rollforhit" aria-hidden="true">#</a> rollForHit</h3>
<p>The <code v-pre>rollForHit</code> function is a wrapper around the required
<code v-pre>VORConsumerBase.requestRandomness</code> function. The call to <code v-pre>requestRandomness</code>
is required in order to initialise a request to a VOR Provider Oracle.
Technically, this is the only requirement of the function, but we'll need
to do some pre-processing in order to track results and make use of the
returned value.</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">rollForHit</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _monsterId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _seed<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _keyHash<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _fee<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>monsters<span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"monster does not exist"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>lastResult<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling<span class="token punctuation">,</span> <span class="token string">"roll currently in progress"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xFUND<span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> _fee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestId <span class="token operator">=</span> <span class="token function">requestRandomness</span><span class="token punctuation">(</span>_keyHash<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">HittingMonster</span><span class="token punctuation">(</span>_monsterId<span class="token punctuation">,</span> requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestIdToAddress<span class="token punctuation">[</span>requestId<span class="token punctuation">]</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        requestIdToMonsterId<span class="token punctuation">[</span>requestId<span class="token punctuation">]</span> <span class="token operator">=</span> _monsterId<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prior to calling <code v-pre>requestRandomness</code>, we're just ensuring the monster
is in the contract's database, and that the player/monster combo does
not currently have a roll in progress.</p>
<p>The next line transfers the required fee from the player calling the
function to this DnD contract. The VORCoordinator then transfers
that fee from the DnD contract to itself for later forwarding to the
VOR Provider Oracle.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is just one method for transferring fees to the VORCoordinator.
Another is to omit <code v-pre>xFUND.transferFrom</code> from your request implementation,
and simply keep the contract topped up with xFUND (for example, if the
contract owner is the only address that will ever call the request function).
In this case, it would also be advisable to implement a function to withdraw
xFUND from your contract.</p>
<p>However, since we want each player to pay their own fees, we are
transferring as a part of the request process.</p>
</div>
<p>Next, the function is making the actual <code v-pre>requestRandomness</code> call, which
forwards the request to the <code v-pre>VORCoordinator</code>. It returns the generated
<code v-pre>requestId</code> which we then use to map some data about the request:</p>
<ol>
<li>the address of the player who made the request</li>
<li>the monster th player is fighting.</li>
</ol>
<p>When the request is fulfilled, the <code v-pre>requestId</code> is included in the
fulfilment so that we can retrieve any data associated with the request.</p>
<p>Finally, we set <code v-pre>isRolling</code> for the current player/monster combo to
prevent any further requests on this combo until it's fulfilled</p>
<h3 id="fulfillrandomness" tabindex="-1"><a class="header-anchor" href="#fulfillrandomness" aria-hidden="true">#</a> fulfillRandomness</h3>
<p>The <code v-pre>fulfillRandomness</code> overrides the <code v-pre>virtual</code> function in
<code v-pre>VORConsumerBase</code>. It is the function that will receive the random number
and ultimately process it.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Whilst the <code v-pre>requestRandomness</code> function can be wrapped around an
arbitrary function, <code v-pre>fulfillRandomness</code> must be implemented as</p>
<p><code v-pre>function fulfillRandomness(bytes32 requestId, uint256 randomness)</code></p>
<p>This is because the <code v-pre>VORCoordinator</code>, and <code v-pre>VORConsumerBase</code> return
data with specific parameters, and expect this function to be defined
as this in order to be able to correctly fulfil the request.</p>
<p>The internals of the function contain anything, however.</p>
</div>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">fulfillRandomness</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _randomness<span class="token punctuation">)</span> <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> monsterId <span class="token operator">=</span> requestIdToMonsterId<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> player <span class="token operator">=</span> requestIdToAddress<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> strModifier <span class="token operator">=</span> strModifiers<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> roll <span class="token operator">=</span> _randomness<span class="token punctuation">.</span><span class="token function">mod</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> modified <span class="token operator">=</span> roll<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>strModifier<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> res <span class="token operator">=</span> <span class="token string">"miss"</span><span class="token punctuation">;</span>

        <span class="token comment">// Critical hit!</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>roll <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token string">"nat20"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>roll <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token string">"nat1"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Check roll + STR modifier against monster's AC</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>modified <span class="token operator">>=</span> monsters<span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token string">"hit"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token string">"miss"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">emit</span> <span class="token function">HitResult</span><span class="token punctuation">(</span>monsterId<span class="token punctuation">,</span> _requestId<span class="token punctuation">,</span> player<span class="token punctuation">,</span> res<span class="token punctuation">,</span> roll<span class="token punctuation">,</span> modified<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
        <span class="token comment">// store the results</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>result <span class="token operator">=</span> res<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>roll <span class="token operator">=</span> roll<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>modified <span class="token operator">=</span> modified<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token comment">// clean up</span>
        <span class="token keyword">delete</span> requestIdToMonsterId<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> requestIdToAddress<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first three lines of our function are just retrieving some data related
to the request. This data was stored when the request was initialised.
It's simply getting the ID of the monster being hit, the player who is
hitting it, and then from that, deriving that player's STR modifier.</p>
<p>Next, the <code v-pre>_randomness</code> value returned from the VOR Provider Oracle is
converted into a value between 1 and 20, simulating the roll of a d20.</p>
<p>The player's STR modifier is added to this value, and then checking
whether the player rolled high enough to hit the selected monster.</p>
<p>A roll of 20 is a Natural 20, and always hits (with crit!).
A roll of 1 is a Natural 1, and always misses (boo!).</p>
<p>Otherwise, we check to see if the <code v-pre>roll + STR</code> modifier is enough to
hit the monster.</p>
<p>The result is emitted in the <code v-pre>HitResult</code> event, and stored in <code v-pre>lastResult</code>.</p>
<h2 id="helper-function-s" tabindex="-1"><a class="header-anchor" href="#helper-function-s" aria-hidden="true">#</a> Helper function(s)</h2>
<p>The final function we'll write uses the <code v-pre>_increaseVorCoordinatorAllowance</code>
helper function included in <code v-pre>VORConsumerBase</code>. Its role is to permit
the <code v-pre>VORCoordinator</code> smart contract to spend xFUNDMOCK on behalf of
our smart contract, since the <code v-pre>VORCoordinator</code> needs to be able to
transfer fees when each request for randomness is made.</p>
<p>For this function, we'll also use the OpenZeppelin <code v-pre>Ownable</code> contract's
<code v-pre>onlyOwner</code> modifier to ensure that only the contract owner can run this
function</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code>    <span class="token keyword">function</span> <span class="token function">increaseVorAllowance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">_increaseVorCoordinatorAllowance</span><span class="token punctuation">(</span>_amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This just calls <code v-pre>VORConsumerBase._increaseVorCoordinatorAllowance</code> function,
which in turn informs the <code v-pre>xFUNDMOCK</code> smart contract that we're allowing
<code v-pre>VORCoordinator</code> to spend <code v-pre>DnD</code>'s <code v-pre>xFUNDMOCK</code> tokens to pay for fees.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The <code v-pre>VORConsumerBase</code> contract contains other helper functions, which can
also be wrapped in a protected function in your own contract. See
<a href="https://github.com/unification-com/xfund-vor/blob/main/contracts/examples" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/xfund-vor/blob/main/contracts/examples<ExternalLinkIcon/></a>
for implementation examples.</p>
</div>
<h2 id="final-contract" tabindex="-1"><a class="header-anchor" href="#final-contract" aria-hidden="true">#</a> Final contract</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Check out <a href="https://github.com/unification-com/vor-demos/blob/main/contracts/DnD.sol" target="_blank" rel="noopener noreferrer">https://github.com/unification-com/vor-demos/blob/main/contracts/DnD.sol<ExternalLinkIcon/></a>
for the latest version of this demo contract.</p>
</div>
<p>The final contract should look something like this:</p>
<div class="language-solidity ext-solidity line-numbers-mode"><pre v-pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token number">0.6</span><span class="token number">.12</span><span class="token punctuation">;</span>
<span class="token keyword">pragma</span> experimental ABIEncoderV2<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"@openzeppelin/contracts/math/SafeMath.sol"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@openzeppelin/contracts/access/Ownable.sol"</span><span class="token punctuation">;</span>
<span class="token comment">//import "@unification-com/xfund-vor/contracts/VORConsumerBase.sol";</span>
<span class="token keyword">import</span> <span class="token string">"../../xfund-vor/contracts/VORConsumerBase.sol"</span><span class="token punctuation">;</span>

<span class="token comment">/** ****************************************************************************
 * @notice Extremely simple DnD roll D20 to Hit using VOR
 * *****************************************************************************
 * @dev The contract owner can add up to 20 monsters. Players can modify their STR
 * modifier, which is pinned to their address. Players call the rollForHit function
 * and pay the associated xFUND fee to roll the D20. The result is returned in
 * fulfillRandomness, which calculates if the player crits, hits or misses.
 */</span>
<span class="token keyword">contract</span> <span class="token class-name">DnD</span> <span class="token keyword">is</span> Ownable<span class="token punctuation">,</span> VORConsumerBase <span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token class-name">SafeMath</span> <span class="token keyword">for</span> <span class="token builtin">uint256</span><span class="token punctuation">;</span>

    <span class="token comment">// keep track of the monsters</span>
    <span class="token builtin">uint256</span> <span class="token keyword">public</span> nextMonsterId<span class="token punctuation">;</span>

    <span class="token comment">// super simple monster stats</span>
    <span class="token keyword">struct</span> <span class="token class-name">Monster</span> <span class="token punctuation">{</span>
        <span class="token builtin">string</span> name<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> ac<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> roll<span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> modified<span class="token punctuation">;</span>
        <span class="token builtin">string</span> result<span class="token punctuation">;</span>
        <span class="token builtin">bool</span> isRolling<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// monsters held in the contract</span>
    <span class="token keyword">mapping</span> <span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=></span> Monster<span class="token punctuation">)</span> <span class="token keyword">public</span> monsters<span class="token punctuation">;</span>
    <span class="token comment">// player STR modifiers</span>
    <span class="token keyword">mapping</span> <span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> strModifiers<span class="token punctuation">;</span>
    <span class="token comment">// map request IDs to monster IDs</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> <span class="token operator">=></span> <span class="token builtin">uint256</span><span class="token punctuation">)</span> <span class="token keyword">public</span> requestIdToMonsterId<span class="token punctuation">;</span>
    <span class="token comment">// map request IDs to player addresses, to retrieve STR modifiers</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> <span class="token operator">=></span> <span class="token builtin">address</span><span class="token punctuation">)</span> <span class="token keyword">public</span> requestIdToAddress<span class="token punctuation">;</span>
    <span class="token comment">// store last [player][monster] results</span>
    <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">address</span> <span class="token operator">=></span> <span class="token keyword">mapping</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> <span class="token operator">=></span> Result<span class="token punctuation">)</span><span class="token punctuation">)</span> lastResult<span class="token punctuation">;</span>

    <span class="token comment">// Some useful events to track</span>
    <span class="token keyword">event</span> <span class="token function">AddMonster</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">string</span> name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> ac<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">ChangeStrModifier</span><span class="token punctuation">(</span><span class="token builtin">address</span> player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> strMod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">HittingMonster</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">event</span> <span class="token function">HitResult</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> monsterId<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> requestId<span class="token punctuation">,</span> <span class="token builtin">address</span> player<span class="token punctuation">,</span> <span class="token builtin">string</span> result<span class="token punctuation">,</span> <span class="token builtin">uint256</span> roll<span class="token punctuation">,</span> <span class="token builtin">uint256</span> modified<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
    * @notice Constructor inherits VORConsumerBase
    *
    * @param _vorCoordinator address of the VOR Coordinator
    * @param _xfund address of the xFUND token
    */</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _vorCoordinator<span class="token punctuation">,</span> <span class="token builtin">address</span> _xfund<span class="token punctuation">)</span>
    <span class="token keyword">public</span>
    <span class="token function">VORConsumerBase</span><span class="token punctuation">(</span>_vorCoordinator<span class="token punctuation">,</span> _xfund<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextMonsterId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
    * @notice addMonster can be called by the owner to add a new monster
    *
    * @param _name string name of the monster
    * @param _ac uint256 AC of the monster
    */</span>
    <span class="token keyword">function</span> <span class="token function">addMonster</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token keyword">memory</span> _name<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _ac<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>nextMonsterId <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"too many monsters"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_ac <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"monster too weak"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        monsters<span class="token punctuation">[</span>nextMonsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> _name<span class="token punctuation">;</span>
        monsters<span class="token punctuation">[</span>nextMonsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac <span class="token operator">=</span> _ac<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">AddMonster</span><span class="token punctuation">(</span>nextMonsterId<span class="token punctuation">,</span> _name<span class="token punctuation">,</span> _ac<span class="token punctuation">)</span><span class="token punctuation">;</span>
        nextMonsterId <span class="token operator">=</span> nextMonsterId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
    * @notice changeStrModifier can be called by anyone to change their STR modifier
    *
    * @param _strMod uint256 STR modifier of player
    */</span>
    <span class="token keyword">function</span> <span class="token function">changeStrModifier</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _strMod<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_strMod <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"player too strong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        strModifiers<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span> <span class="token operator">=</span> _strMod<span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">ChangeStrModifier</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _strMod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
    * @notice rollForHit anyone can call to roll the D20 for hit. Caller (msg.sender)
    * pays the xFUND fees for the request.
    *
    * @param _monsterId uint256 Id of the monster the caller is fighting
    * @param _seed uint256 seed for the randomness request. Gets mixed in with the blockhash of the block this Tx is in
    * @param _keyHash bytes32 key hash of the provider caller wants to fulfil the request
    * @param _fee uint256 required fee amount for the request
    */</span>
    <span class="token keyword">function</span> <span class="token function">rollForHit</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _monsterId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _seed<span class="token punctuation">,</span> <span class="token builtin">bytes32</span> _keyHash<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _fee<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes32</span> requestId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>monsters<span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"monster does not exist"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token operator">!</span>lastResult<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling<span class="token punctuation">,</span> <span class="token string">"roll currently in progress"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Note - caller must have increased xFUND allowance for this contract first.</span>
        <span class="token comment">// Fee is transferred from msg.sender to this contract. The VORCoordinator.requestRandomness</span>
        <span class="token comment">// function will then transfer from this contract to itself.</span>
        <span class="token comment">// This contract's owner must have increased the VORCoordnator's allowance for this contract.</span>
        xFUND<span class="token punctuation">.</span><span class="token function">transferFrom</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> _fee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestId <span class="token operator">=</span> <span class="token function">requestRandomness</span><span class="token punctuation">(</span>_keyHash<span class="token punctuation">,</span> _fee<span class="token punctuation">,</span> _seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">emit</span> <span class="token function">HittingMonster</span><span class="token punctuation">(</span>_monsterId<span class="token punctuation">,</span> requestId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        requestIdToAddress<span class="token punctuation">[</span>requestId<span class="token punctuation">]</span> <span class="token operator">=</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">;</span>
        requestIdToMonsterId<span class="token punctuation">[</span>requestId<span class="token punctuation">]</span> <span class="token operator">=</span> _monsterId<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice Callback function used by VOR Coordinator to return the random number
     * to this contract.
     * @dev The random number is used to simulate a D20 roll. Result is emitted as follows:
     * 1: Natural 1...
     * 20: Natural 20!
     * roll + strModifier >= monster AC: hit
     * roll + strModifier &lt; monster AC: miss
     *
     * @param _requestId bytes32
     * @param _randomness The random result returned by the oracle
     */</span>
    <span class="token keyword">function</span> <span class="token function">fulfillRandomness</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _requestId<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _randomness<span class="token punctuation">)</span> <span class="token keyword">internal</span> override <span class="token punctuation">{</span>
        <span class="token builtin">uint256</span> monsterId <span class="token operator">=</span> requestIdToMonsterId<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> player <span class="token operator">=</span> requestIdToAddress<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> strModifier <span class="token operator">=</span> strModifiers<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> roll <span class="token operator">=</span> _randomness<span class="token punctuation">.</span><span class="token function">mod</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint256</span> modified <span class="token operator">=</span> roll<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>strModifier<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">string</span> <span class="token keyword">memory</span> res <span class="token operator">=</span> <span class="token string">"miss"</span><span class="token punctuation">;</span>

        <span class="token comment">// Critical hit!</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>roll <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token string">"nat20"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>roll <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> <span class="token string">"nat1"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Check roll + STR modifier against monster's AC</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>modified <span class="token operator">>=</span> monsters<span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>ac<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token string">"hit"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token string">"miss"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">emit</span> <span class="token function">HitResult</span><span class="token punctuation">(</span>monsterId<span class="token punctuation">,</span> _requestId<span class="token punctuation">,</span> player<span class="token punctuation">,</span> res<span class="token punctuation">,</span> roll<span class="token punctuation">,</span> modified<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// store the results</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>result <span class="token operator">=</span> res<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>roll <span class="token operator">=</span> roll<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>modified <span class="token operator">=</span> modified<span class="token punctuation">;</span>
        lastResult<span class="token punctuation">[</span>player<span class="token punctuation">]</span><span class="token punctuation">[</span>monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token comment">// clean up</span>
        <span class="token keyword">delete</span> requestIdToMonsterId<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> requestIdToAddress<span class="token punctuation">[</span>_requestId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice getLastResult returns the last result for a specified player/monsterId.
     *
     * @param _player address address of player
     * @param _monsterId uint256 id of monster
     */</span>
    <span class="token keyword">function</span> <span class="token function">getLastResult</span><span class="token punctuation">(</span><span class="token builtin">address</span> _player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _monsterId<span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">view</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span>Result <span class="token keyword">memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lastResult<span class="token punctuation">[</span>_player<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
    * @notice unstickRoll allows contract owner to unstick a roll when a request is not fulfilled
    *
    * @param _player address address of player
    * @param _monsterId uint256 id of monster
    */</span>
    <span class="token keyword">function</span> <span class="token function">unstickRoll</span><span class="token punctuation">(</span><span class="token builtin">address</span> _player<span class="token punctuation">,</span> <span class="token builtin">uint256</span> _monsterId<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        lastResult<span class="token punctuation">[</span>_player<span class="token punctuation">]</span><span class="token punctuation">[</span>_monsterId<span class="token punctuation">]</span><span class="token punctuation">.</span>isRolling <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @notice Example wrapper function for the VORConsumerBase increaseVorCoordinatorAllowance function.
     * @dev Wrapped around an Ownable modifier to ensure only the contract owner can call it.
     * @dev Allows contract owner to increase the xFUND allowance for the VORCoordinator contract
     * @dev enabling it to pay request fees on behalf of this contract.
     *
     * @param _amount uint256 amount to increase allowance by
     */</span>
    <span class="token keyword">function</span> <span class="token function">increaseVorAllowance</span><span class="token punctuation">(</span><span class="token builtin">uint256</span> _amount<span class="token punctuation">)</span> <span class="token keyword">external</span> onlyOwner <span class="token punctuation">{</span>
        <span class="token function">_increaseVorCoordinatorAllowance</span><span class="token punctuation">(</span>_amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, we'll look at how to <RouterLink to="/vor/guide/interaction.html">interact</RouterLink> with the contract,
request randomness and view the results.</p>
</div></template>
