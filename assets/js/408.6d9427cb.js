(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{690:function(e,t,r){"use strict";r.r(t);var a=r(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vorcoordinator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vorcoordinator"}},[e._v("#")]),e._v(" VORCoordinator")]),e._v(" "),t("p",[e._v("Coordinates on-chain verifiable-randomness requests")]),e._v(" "),t("h2",{attrs:{id:"functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#VORCoordinator-constructor-address-address-"}},[t("code",[e._v("constructor(address _xfund, address _blockHashStore) public")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-getProviderAddress-bytes32-"}},[t("code",[e._v("getProviderAddress(bytes32 _keyHash) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-getProviderFee-bytes32-"}},[t("code",[e._v("getProviderFee(bytes32 _keyHash) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-getProviderGranularFee-bytes32-address-"}},[t("code",[e._v("getProviderGranularFee(bytes32 _keyHash, address _consumer) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-registerProvingKey-uint256-address-payable-uint256-2--"}},[t("code",[e._v("registerProvingKey(uint256 _fee, address payable _oracle, uint256[2] _publicProvingKey) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-changeFee-uint256-2--uint256-"}},[t("code",[e._v("changeFee(uint256[2] _publicProvingKey, uint256 _fee) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-changeGranularFee-uint256-2--uint256-address-"}},[t("code",[e._v("changeGranularFee(uint256[2] _publicProvingKey, uint256 _fee, address _consumer) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-withdraw-address-uint256-"}},[t("code",[e._v("withdraw(address _recipient, uint256 _amount) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-randomnessRequest-bytes32-uint256-uint256-"}},[t("code",[e._v("randomnessRequest(bytes32 _keyHash, uint256 _consumerSeed, uint256 _feePaid) external")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-hashOfKey-uint256-2--"}},[t("code",[e._v("hashOfKey(uint256[2] _publicKey) public")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-fulfillRandomnessRequest-bytes-"}},[t("code",[e._v("fulfillRandomnessRequest(bytes _proof) public")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-callBackWithRandomness-bytes32-uint256-address-"}},[t("code",[e._v("callBackWithRandomness(bytes32 requestId, uint256 randomness, address consumerContract) internal")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-getRandomnessFromProof-bytes-"}},[t("code",[e._v("getRandomnessFromProof(bytes _proof) internal")])])])]),e._v(" "),t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#VORCoordinator-RandomnessRequest-bytes32-uint256-address-uint256-bytes32-"}},[t("code",[e._v("RandomnessRequest(bytes32 keyHash, uint256 seed, address sender, uint256 fee, bytes32 requestID)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-NewServiceAgreement-bytes32-uint256-"}},[t("code",[e._v("NewServiceAgreement(bytes32 keyHash, uint256 fee)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-ChangeFee-bytes32-uint256-"}},[t("code",[e._v("ChangeFee(bytes32 keyHash, uint256 fee)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-ChangeGranularFee-bytes32-address-uint256-"}},[t("code",[e._v("ChangeGranularFee(bytes32 keyHash, address consumer, uint256 fee)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-RandomnessRequestFulfilled-bytes32-uint256-"}},[t("code",[e._v("RandomnessRequestFulfilled(bytes32 requestId, uint256 output)")])])])]),e._v(" "),t("h2",{attrs:{id:"modifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifiers"}},[e._v("#")]),e._v(" Modifiers:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#VORCoordinator-sufficientXFUND-uint256-bytes32-"}},[t("code",[e._v("sufficientXFUND(uint256 _feePaid, bytes32 _keyHash)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VORCoordinator-hasAvailableFunds-uint256-"}},[t("code",[e._v("hasAvailableFunds(uint256 _amount)")])])])]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-constructor-address-address-"}})]),e._v(" "),t("h3",{attrs:{id:"function-constructor-address-xfund-address-blockhashstore-public"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-constructor-address-xfund-address-blockhashstore-public"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("constructor(address _xfund, address _blockHashStore) public")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-getProviderAddress-bytes32-"}})]),e._v(" "),t("h3",{attrs:{id:"function-getprovideraddress-bytes32-keyhash-external-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-getprovideraddress-bytes32-keyhash-external-address"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("getProviderAddress(bytes32 _keyHash) external -> address")])]),e._v(" "),t("p",[e._v("getProviderAddress - get provider address")]),e._v(" "),t("h4",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_keyHash")]),e._v(": ID of the VOR public key")])]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-getProviderFee-bytes32-"}})]),e._v(" "),t("h3",{attrs:{id:"function-getproviderfee-bytes32-keyhash-external-uint96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-getproviderfee-bytes32-keyhash-external-uint96"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("getProviderFee(bytes32 _keyHash) external -> uint96")])]),e._v(" "),t("p",[e._v("getProviderFee - get provider's base fee")]),e._v(" "),t("h4",{attrs:{id:"parameters-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_keyHash")]),e._v(": ID of the VOR public key")])]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-getProviderGranularFee-bytes32-address-"}})]),e._v(" "),t("h3",{attrs:{id:"function-getprovidergranularfee-bytes32-keyhash-address-consumer-external-uint96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-getprovidergranularfee-bytes32-keyhash-address-consumer-external-uint96"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("getProviderGranularFee(bytes32 _keyHash, address _consumer) external -> uint96")])]),e._v(" "),t("p",[e._v("getProviderGranularFee - get provider's granular fee for selected consumer")]),e._v(" "),t("h4",{attrs:{id:"parameters-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_keyHash")]),e._v(": ID of the VOR public key")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_consumer")]),e._v(": address of the consumer smart contract")])])]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-registerProvingKey-uint256-address-payable-uint256-2--"}})]),e._v(" "),t("h3",{attrs:{id:"function-registerprovingkey-uint256-fee-address-payable-oracle-uint256-2-publicprovingkey-external"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-registerprovingkey-uint256-fee-address-payable-oracle-uint256-2-publicprovingkey-external"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("registerProvingKey(uint256 _fee, address payable _oracle, uint256[2] _publicProvingKey) external")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("h4",{attrs:{id:"parameters-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_fee")]),e._v(": minimum xFUND payment required to serve randomness")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_oracle")]),e._v(": the address of the node with the proving key")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_publicProvingKey")]),e._v(": public key used to prove randomness\n"),t("a",{attrs:{name:"VORCoordinator-changeFee-uint256-2--uint256-"}})])])]),e._v(" "),t("h3",{attrs:{id:"function-changefee-uint256-2-publicprovingkey-uint256-fee-external"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-changefee-uint256-2-publicprovingkey-uint256-fee-external"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("changeFee(uint256[2] _publicProvingKey, uint256 _fee) external")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("h4",{attrs:{id:"parameters-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_publicProvingKey")]),e._v(": public key used to prove randomness")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_fee")]),e._v(": minimum xFUND payment required to serve randomness\n"),t("a",{attrs:{name:"VORCoordinator-changeGranularFee-uint256-2--uint256-address-"}})])])]),e._v(" "),t("h3",{attrs:{id:"function-changegranularfee-uint256-2-publicprovingkey-uint256-fee-address-consumer-external"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-changegranularfee-uint256-2-publicprovingkey-uint256-fee-address-consumer-external"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("changeGranularFee(uint256[2] _publicProvingKey, uint256 _fee, address _consumer) external")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("h4",{attrs:{id:"parameters-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_publicProvingKey")]),e._v(": public key used to prove randomness")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_fee")]),e._v(": minimum xFUND payment required to serve randomness\n"),t("a",{attrs:{name:"VORCoordinator-withdraw-address-uint256-"}})])])]),e._v(" "),t("h3",{attrs:{id:"function-withdraw-address-recipient-uint256-amount-external"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-withdraw-address-recipient-uint256-amount-external"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("withdraw(address _recipient, uint256 _amount) external")])]),e._v(" "),t("p",[e._v("Allows the oracle operator to withdraw their xFUND")]),e._v(" "),t("h4",{attrs:{id:"parameters-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-7"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_recipient")]),e._v(": is the address the funds will be sent to")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_amount")]),e._v(": is the amount of xFUND transferred from the Coordinator contract\n"),t("a",{attrs:{name:"VORCoordinator-randomnessRequest-bytes32-uint256-uint256-"}})])])]),e._v(" "),t("h3",{attrs:{id:"function-randomnessrequest-bytes32-keyhash-uint256-consumerseed-uint256-feepaid-external"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-randomnessrequest-bytes32-keyhash-uint256-consumerseed-uint256-feepaid-external"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("randomnessRequest(bytes32 _keyHash, uint256 _consumerSeed, uint256 _feePaid) external")])]),e._v(" "),t("p",[e._v("_consumerSeed is mixed with key hash, sender address and nonce to\nobtain preSeed, which is passed to VOR oracle, which mixes it with the\nhash of the block containing this request, to compute the final seed.")]),e._v(" "),t("p",[e._v("The requestId used to store the request data is constructed from the\npreSeed and keyHash.")]),e._v(" "),t("h4",{attrs:{id:"parameters-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-8"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_keyHash")]),e._v(": ID of the VOR public key against which to generate output")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_consumerSeed")]),e._v(": Input to the VOR, from which randomness is generated")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_feePaid")]),e._v(": Amount of xFUND sent with request. Must exceed fee for key")])])]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-hashOfKey-uint256-2--"}})]),e._v(" "),t("h3",{attrs:{id:"function-hashofkey-uint256-2-publickey-public-bytes32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-hashofkey-uint256-2-publickey-public-bytes32"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("hashOfKey(uint256[2] _publicKey) public -> bytes32")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("h4",{attrs:{id:"parameters-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-9"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_publicKey")]),e._v(": the key to return the address for\n"),t("a",{attrs:{name:"VORCoordinator-fulfillRandomnessRequest-bytes-"}})])]),e._v(" "),t("h3",{attrs:{id:"function-fulfillrandomnessrequest-bytes-proof-public"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-fulfillrandomnessrequest-bytes-proof-public"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("fulfillRandomnessRequest(bytes _proof) public")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("h4",{attrs:{id:"parameters-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-10"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_proof")]),e._v(": the proof of randomness. Actual random output built from this\n"),t("a",{attrs:{name:"VORCoordinator-callBackWithRandomness-bytes32-uint256-address-"}})])]),e._v(" "),t("h3",{attrs:{id:"function-callbackwithrandomness-bytes32-requestid-uint256-randomness-address-consumercontract-internal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-callbackwithrandomness-bytes32-requestid-uint256-randomness-address-consumercontract-internal"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("callBackWithRandomness(bytes32 requestId, uint256 randomness, address consumerContract) internal")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-getRandomnessFromProof-bytes-"}})]),e._v(" "),t("h3",{attrs:{id:"function-getrandomnessfromproof-bytes-proof-internal-bytes32-currentkeyhash-struct-vorcoordinator-callback-callback-bytes32-requestid-uint256-randomness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-getrandomnessfromproof-bytes-proof-internal-bytes32-currentkeyhash-struct-vorcoordinator-callback-callback-bytes32-requestid-uint256-randomness"}},[e._v("#")]),e._v(" Function "),t("code",[e._v("getRandomnessFromProof(bytes _proof) internal -> bytes32 currentKeyHash, struct VORCoordinator.Callback callback, bytes32 requestId, uint256 randomness")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-RandomnessRequest-bytes32-uint256-address-uint256-bytes32-"}})]),e._v(" "),t("h3",{attrs:{id:"event-randomnessrequest-bytes32-keyhash-uint256-seed-address-sender-uint256-fee-bytes32-requestid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-randomnessrequest-bytes32-keyhash-uint256-seed-address-sender-uint256-fee-bytes32-requestid"}},[e._v("#")]),e._v(" Event "),t("code",[e._v("RandomnessRequest(bytes32 keyHash, uint256 seed, address sender, uint256 fee, bytes32 requestID)")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-NewServiceAgreement-bytes32-uint256-"}})]),e._v(" "),t("h3",{attrs:{id:"event-newserviceagreement-bytes32-keyhash-uint256-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-newserviceagreement-bytes32-keyhash-uint256-fee"}},[e._v("#")]),e._v(" Event "),t("code",[e._v("NewServiceAgreement(bytes32 keyHash, uint256 fee)")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-ChangeFee-bytes32-uint256-"}})]),e._v(" "),t("h3",{attrs:{id:"event-changefee-bytes32-keyhash-uint256-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-changefee-bytes32-keyhash-uint256-fee"}},[e._v("#")]),e._v(" Event "),t("code",[e._v("ChangeFee(bytes32 keyHash, uint256 fee)")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-ChangeGranularFee-bytes32-address-uint256-"}})]),e._v(" "),t("h3",{attrs:{id:"event-changegranularfee-bytes32-keyhash-address-consumer-uint256-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-changegranularfee-bytes32-keyhash-address-consumer-uint256-fee"}},[e._v("#")]),e._v(" Event "),t("code",[e._v("ChangeGranularFee(bytes32 keyHash, address consumer, uint256 fee)")])]),e._v(" "),t("p",[e._v("No description\n"),t("a",{attrs:{name:"VORCoordinator-RandomnessRequestFulfilled-bytes32-uint256-"}})]),e._v(" "),t("h3",{attrs:{id:"event-randomnessrequestfulfilled-bytes32-requestid-uint256-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-randomnessrequestfulfilled-bytes32-requestid-uint256-output"}},[e._v("#")]),e._v(" Event "),t("code",[e._v("RandomnessRequestFulfilled(bytes32 requestId, uint256 output)")])]),e._v(" "),t("p",[e._v("No description")]),e._v(" "),t("p",[t("a",{attrs:{name:"VORCoordinator-sufficientXFUND-uint256-bytes32-"}})]),e._v(" "),t("h3",{attrs:{id:"modifier-sufficientxfund-uint256-feepaid-bytes32-keyhash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifier-sufficientxfund-uint256-feepaid-bytes32-keyhash"}},[e._v("#")]),e._v(" Modifier "),t("code",[e._v("sufficientXFUND(uint256 _feePaid, bytes32 _keyHash)")])]),e._v(" "),t("p",[e._v("Reverts if amount is not at least what was agreed upon in the service agreement")]),e._v(" "),t("h4",{attrs:{id:"parameters-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-11"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("_feePaid")]),e._v(": The payment for the request")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("_keyHash")]),e._v(": The key which the request is for\n"),t("a",{attrs:{name:"VORCoordinator-hasAvailableFunds-uint256-"}})])])]),e._v(" "),t("h3",{attrs:{id:"modifier-hasavailablefunds-uint256-amount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifier-hasavailablefunds-uint256-amount"}},[e._v("#")]),e._v(" Modifier "),t("code",[e._v("hasAvailableFunds(uint256 _amount)")])]),e._v(" "),t("p",[e._v("Reverts if amount requested is greater than withdrawable balance")]),e._v(" "),t("h4",{attrs:{id:"parameters-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters-12"}},[e._v("#")]),e._v(" Parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_amount")]),e._v(": The given amount to compare to "),t("code",[e._v("withdrawableTokens")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);