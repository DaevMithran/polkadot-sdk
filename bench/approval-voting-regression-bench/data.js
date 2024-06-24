window.BENCHMARK_DATA = {
  "lastUpdate": 1719234980829,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "approval-voting-regression-bench": [
      {
        "commit": {
          "author": {
            "name": "Przemek Rzad",
            "username": "rzadp",
            "email": "przemek@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3380e21cd92690c2066f686164a954ba7cd17244",
          "message": "Use default branch of `psvm` when synchronizing templates (#4240)\n\nWe cannot lock to a specific version of `psvm`, because we will need to\nkeep it up-to-date - each release currently requires a change in `psvm`\nsuch as [this one](https://github.com/paritytech/psvm/pull/2/files).\n\nThere is no `stable` branch in `psvm` repo or anything so using the\ndefault branch.",
          "timestamp": "2024-04-22T16:34:29Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/3380e21cd92690c2066f686164a954ba7cd17244"
        },
        "date": 1713807753741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.46,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.115701152709936,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.713580235960006,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0335909815501774,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bd9287f766bded2022036a63d12fb86a2f7174a0",
          "message": "wasm-builder: Make it easier to build a WASM binary (#4177)\n\nBasically combines all the recommended calls into one\n`build_using_defaults()` call or `init_with_defaults()` when there are\nsome custom changes required.",
          "timestamp": "2024-04-22T19:28:27Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/bd9287f766bded2022036a63d12fb86a2f7174a0"
        },
        "date": 1713819780244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63542.530000000006,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.09999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.7648006330202373,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.260694753859994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.841950453610078,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Adrian Catangiu",
            "username": "acatangiu",
            "email": "adrian@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "84c294c3821baf8b81693ce6e5615b9e157b5303",
          "message": "[testnets] remove XCM SafeCallFilter for chains using Weights::v3 (#4199)\n\nWeights::v3 also accounts for PoV weight so we no longer need the\nSafeCallFilter. All calls are allowed as long as they \"fit in the\nblock\".",
          "timestamp": "2024-04-22T22:10:07Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/84c294c3821baf8b81693ce6e5615b9e157b5303"
        },
        "date": 1713828841439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63553.490000000005,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52945.40000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.973300304849985,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.903687700000238,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.496413773119922,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7f1646eb3837bfa53fb1cb8eabd7a0e1026469b8",
          "message": "Add `validate_xcm_nesting` to the `ParentAsUmp` and `ChildParachainRouter` (#4236)\n\nThis PR:\n- moves `validate_xcm_nesting` from `XcmpQueue` into the `VersionedXcm`\n- adds `validate_xcm_nesting` to the `ParentAsUmp`\n- adds `validate_xcm_nesting` to the `ChildParachainRouter`\n\n\nBased on discussion\n[here](https://github.com/paritytech/polkadot-sdk/pull/4186#discussion_r1571344270)\nand/or\n[here](https://github.com/paritytech/polkadot-sdk/pull/4186#discussion_r1572076666)\nand/or [here]()\n\n## Question/TODO\n\n- [x] To the\n[comment](https://github.com/paritytech/polkadot-sdk/pull/4186#discussion_r1572072295)\n- Why was `validate_xcm_nesting` added just to the `XcmpQueue` router\nand nowhere else? What kind of problem `MAX_XCM_DECODE_DEPTH` is\nsolving? (see\n[comment](https://github.com/paritytech/polkadot-sdk/pull/4236#discussion_r1574605191))",
          "timestamp": "2024-04-23T08:38:20Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7f1646eb3837bfa53fb1cb8eabd7a0e1026469b8"
        },
        "date": 1713867196476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.780000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.292572380559976,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.902055862849888,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.148137250190042,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "118cd6f922acc9c4b3938645cd34098275d41c93",
          "message": "Ensure outbound XCMs are decodable with limits + add `EnsureDecodableXcm` router (for testing purposes) (#4186)\n\nThis PR:\n- adds `EnsureDecodableXcm` (testing) router that attempts to *encode*\nand *decode* passed XCM `message` to ensure that the receiving side will\nbe able to decode, at least with the same XCM version.\n- fixes `pallet_xcm` / `pallet_xcm_benchmarks` assets data generation\n\nRelates to investigation of\nhttps://substrate.stackexchange.com/questions/11288 and missing fix\nhttps://github.com/paritytech/polkadot-sdk/pull/2129 which did not get\ninto the fellows 1.1.X release.\n\n## Questions/TODOs\n\n- [x] fix XCM benchmarks, which produces undecodable data - new router\ncatched at least two cases\n  - `BoundedVec exceeds its limit`\n  - `Fungible asset of zero amount is not allowed`  \n- [x] do we need to add `sort` to the `prepend_with` as we did for\nreanchor [here](https://github.com/paritytech/polkadot-sdk/pull/2129)?\n@serban300 (**created separate/follow-up PR**:\nhttps://github.com/paritytech/polkadot-sdk/pull/4235)\n- [x] We added decoding check to `XcmpQueue` -> `validate_xcm_nesting`,\nwhy not to added to the `ParentAsUmp` or `ChildParachainRouter`?\n@franciscoaguirre (**created separate/follow-up PR**:\nhttps://github.com/paritytech/polkadot-sdk/pull/4236)\n- [ ] `SendController::send_blob` replace `VersionedXcm::<()>::decode(`\nwith `VersionedXcm::<()>::decode_with_depth_limit(MAX_XCM_DECODE_DEPTH,\ndata)` ?\n\n---------\n\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2024-04-23T11:40:05Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/118cd6f922acc9c4b3938645cd34098275d41c93"
        },
        "date": 1713877568236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.259999999995,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.460571035949991,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.99426986811998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.982703402650149,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "joe petrowski",
            "username": "joepetrowski",
            "email": "25483142+joepetrowski@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eda5e5c31f9bffafd6afd6d14fb95001a10dba9a",
          "message": "Fix Stuck Collator Funds (#4229)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/4206\n\nIn #1340 one of the storage types was changed from `Candidates` to\n`CandidateList`. Since the actual key includes the hash of this value,\nall of the candidates stored here are (a) \"missing\" and (b) unable to\nunreserve their candidacy bond.\n\nThis migration kills the storage values and refunds the deposit held for\neach candidate.\n\n---------\n\nSigned-off-by: georgepisaltu <george.pisaltu@parity.io>\nCo-authored-by: georgepisaltu <52418509+georgepisaltu@users.noreply.github.com>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: georgepisaltu <george.pisaltu@parity.io>",
          "timestamp": "2024-04-23T12:53:20Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/eda5e5c31f9bffafd6afd6d14fb95001a10dba9a"
        },
        "date": 1713882048731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.55,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.171994607919993,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.915962875349962,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0689954355900957,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ffbce2a817ec2e7c8b7ce49f7ed6794584f19667",
          "message": "pallet_broker: Let `start_sales` calculate and request the correct core count (#4221)",
          "timestamp": "2024-04-23T15:37:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ffbce2a817ec2e7c8b7ce49f7ed6794584f19667"
        },
        "date": 1713892035366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.10000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.949043325160032,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.407199724850006,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9184529612400936,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Gheorghe",
            "username": "alexggh",
            "email": "49718502+alexggh@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a0049d0da59b8b842f64fae441b34dba3408430",
          "message": "Plumbing to increase pvf workers configuration based on chain id (#4252)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/4126 we want\nto safely increase the execute_workers_max_num gradually from chain to\nchain and assess if there are any negative impacts.\n\nThis PR performs the necessary plumbing to be able to increase it based\non the chain id, it increase the number of execution workers from 2 to 4\non test network but lives kusama and polkadot unchanged until we gather\nmore data.\n\n---------\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>",
          "timestamp": "2024-04-24T06:15:39Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9a0049d0da59b8b842f64fae441b34dba3408430"
        },
        "date": 1713944341225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.89,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1493058733800927,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.276675537590025,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.805114786339908,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Kalankhodzhaev",
            "username": "kalaninja",
            "email": "kalansoft@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c594b10a803e218f63c1bd97d2b27454efb4e852",
          "message": "Remove unnecessary cloning (#4263)\n\nSeems like Externalities already [return a\nvector](https://github.com/paritytech/polkadot-sdk/blob/ffbce2a817ec2e7c8b7ce49f7ed6794584f19667/substrate/primitives/externalities/src/lib.rs#L86),\nso calling `to_vec` on a vector just results in an unneeded copying.\n\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>",
          "timestamp": "2024-04-24T09:30:47Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c594b10a803e218f63c1bd97d2b27454efb4e852"
        },
        "date": 1713953792965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63549.409999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.7,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.8353009554801347,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.856177245070033,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.397069171060004,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Kalankhodzhaev",
            "username": "kalaninja",
            "email": "kalansoft@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c594b10a803e218f63c1bd97d2b27454efb4e852",
          "message": "Remove unnecessary cloning (#4263)\n\nSeems like Externalities already [return a\nvector](https://github.com/paritytech/polkadot-sdk/blob/ffbce2a817ec2e7c8b7ce49f7ed6794584f19667/substrate/primitives/externalities/src/lib.rs#L86),\nso calling `to_vec` on a vector just results in an unneeded copying.\n\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>",
          "timestamp": "2024-04-24T09:30:47Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c594b10a803e218f63c1bd97d2b27454efb4e852"
        },
        "date": 1713956713508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.829999999994,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.995785177580109,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.020310992390042,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.48648768921989,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre",
            "email": "franciscoaguirreperez@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4f3d43a0c4e75caf73c1034a85590f81a9ae3809",
          "message": "Revert `execute_blob` and `send_blob` (#4266)\n\nRevert \"pallet-xcm: Deprecate `execute` and `send` in favor of\n`execute_blob` and `send_blob` (#3749)\"\n\nThis reverts commit feee773d15d5237765b520b03854d46652181de5.\n\n---------\n\nCo-authored-by: Adrian Catangiu <adrian@parity.io>\nCo-authored-by: Javier Bullrich <javier@bullrich.dev>",
          "timestamp": "2024-04-24T15:49:33Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4f3d43a0c4e75caf73c1034a85590f81a9ae3809"
        },
        "date": 1713975617529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63541.6,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.8124763528901857,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.321571008640008,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.776342704840073,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a633e954f3b88697aa797d9792e8a5b5cf310b7e",
          "message": "Bridge: make some headers submissions free (#4102)\n\nsupersedes https://github.com/paritytech/parity-bridges-common/pull/2873\n\nDraft because of couple of TODOs:\n- [x] fix remaining TODOs;\n- [x] double check that all changes from\nhttps://github.com/paritytech/parity-bridges-common/pull/2873 are\ncorrectly ported;\n- [x] create a separate PR (on top of that one or a follow up?) for\nhttps://github.com/paritytech/polkadot-sdk/tree/sv-try-new-bridge-fees;\n- [x] fix compilation issues (haven't checked, but there should be\nmany).\n\n---------\n\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2024-04-25T05:26:16Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a633e954f3b88697aa797d9792e8a5b5cf310b7e"
        },
        "date": 1714028234524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.42,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.952581344790132,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.005963712880008,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.558739944510005,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7e68b2b8da9caf634ff4f6c6d96d2d7914c44fb7",
          "message": "Bridge: added free headers submission support to the substrate-relay (#4157)\n\nOriginal PR:\nhttps://github.com/paritytech/parity-bridges-common/pull/2884. Since\nchain-specific code lives in the `parity-bridges-common` repo, some\nparts of original PR will require another PR\n\n---------\n\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2024-04-25T07:20:17Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7e68b2b8da9caf634ff4f6c6d96d2d7914c44fb7"
        },
        "date": 1714034875340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63550.37000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.681745372810052,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.0874637672599565,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0183881767801024,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "077041788070eddc6f3c1043b9cb6146585b1469",
          "message": "[XCM] Treat recursion limit error as transient in the MQ (#4202)\n\nChanges:\n- Add new error variant `ProcessMessageError::StackLimitReached` and\ntreat XCM error `ExceedsStackLimit` as such.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2024-04-25T09:01:21Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/077041788070eddc6f3c1043b9cb6146585b1469"
        },
        "date": 1714041097066,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.030000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.029960095840012,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9907601420701004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.597790111489985,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Liam Aharon",
            "username": "liamaharon",
            "email": "liam.aharon@hotmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff2b178206f9952c3337638659450c67fd700e7e",
          "message": "remote-externalities: retry get child keys query (#4280)",
          "timestamp": "2024-04-25T12:01:05Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ff2b178206f9952c3337638659450c67fd700e7e"
        },
        "date": 1714052022179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.95,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.984516114180022,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6014633912001477,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.608732732140043,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alin Dima",
            "username": "alindima",
            "email": "alin@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c9923cd7feb9e7c6337f0942abd3279468df5559",
          "message": "rename fragment_tree folder to fragment_chain (#4294)\n\nMakes https://github.com/paritytech/polkadot-sdk/pull/4035 easier to\nreview",
          "timestamp": "2024-04-25T13:52:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c9923cd7feb9e7c6337f0942abd3279468df5559"
        },
        "date": 1714058632489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63554.06999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.151423785680008,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.747454451830055,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.11348499832016,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Eres",
            "username": "AndreiEres",
            "email": "eresav@me.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd5b06e622c6c5c301a1554286ec1f4995c7daca",
          "message": "[subsystem-benchmarks] Log standart deviation for subsystem-benchmarks (#4285)\n\nShould help us to understand more what's happening between individual\nruns and possibly adjust the number of runs",
          "timestamp": "2024-04-25T15:06:37Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/dd5b06e622c6c5c301a1554286ec1f4995c7daca"
        },
        "date": 1714062819511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63551.020000000004,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.851173004009993,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.458606011900036,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.498016354730205,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Noah Jelich",
            "username": "njelich",
            "email": "12912633+njelich@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8f8c49deffe56567ba5cde0e1047de15b660bb0e",
          "message": "Fix bad links (#4231)\n\nThe solochain template links to parachain template instead of solochain.",
          "timestamp": "2024-04-26T07:03:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/8f8c49deffe56567ba5cde0e1047de15b660bb0e"
        },
        "date": 1714118784396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52936.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.170000000006,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.083771634440125,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.072660863429943,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.883378100330038,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e8f7c81db66abb40802c582c22041aa63c78ddff",
          "message": "[balances] Safeguard against consumer ref underflow (#3865)\n\nThere are some accounts that do not have a consumer ref while having a\nreserve.\nThis adds a fail-safe mechanism to trigger in the case that\n`does_consume` is true, but the assumption of `consumer>0` is not.\n\nThis should prevent those accounts from loosing balance and the TI from\ngetting messed up even more, but is not an \"ideal\" fix. TBH an ideal fix\nis not possible, since on-chain data is in an invalid state.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-04-26T08:16:03Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e8f7c81db66abb40802c582c22041aa63c78ddff"
        },
        "date": 1714124623493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.4,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3101875874600886,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.4809040582500455,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.033078273380081,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c66d8a84687f5d68c0192122aa513b4b340794ca",
          "message": "Bump bridges relay version + uncomment bridges zombeinet tests (#4289)\n\nTODOs:\n- [x] wait and see if test `1` works;\n- [x] ~think of whether we need remaining tests.~ I think we should keep\nit - will try to revive and update it",
          "timestamp": "2024-04-26T09:24:42Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c66d8a84687f5d68c0192122aa513b4b340794ca"
        },
        "date": 1714129052884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.29,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.912297464300147,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2215600110300797,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.343937647910001,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gui",
            "username": "thiolliere",
            "email": "gui.thiolliere@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97f74253387ee43e30c25fd970b5ae4cc1a722d7",
          "message": "Try state: log errors instead of loggin the number of error and discarding them (#4265)\n\nCurrently we discard errors content\nWe should at least log it.\n\nCode now is more similar to what is written in try_on_runtime_upgrade.\n\nlabel should be R0\n\n---------\n\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>\nCo-authored-by: Javier Bullrich <javier@bullrich.dev>",
          "timestamp": "2024-04-26T12:27:14Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/97f74253387ee43e30c25fd970b5ae4cc1a722d7"
        },
        "date": 1714139638695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52945.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.43999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1441507093600807,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.235885624789934,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.77721540583996,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tsvetomir Dimitrov",
            "username": "tdimitrov",
            "email": "tsvetomir@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "988e30f102b155ab68d664d62ac5c73da171659a",
          "message": "Implementation of the new validator disabling strategy (#2226)\n\nCloses https://github.com/paritytech/polkadot-sdk/issues/1966,\nhttps://github.com/paritytech/polkadot-sdk/issues/1963 and\nhttps://github.com/paritytech/polkadot-sdk/issues/1962.\n\nDisabling strategy specification\n[here](https://github.com/paritytech/polkadot-sdk/pull/2955). (Updated\n13/02/2024)\n\nImplements:\n* validator disabling for a whole era instead of just a session\n* no more than 1/3 of the validators in the active set are disabled\nRemoves:\n* `DisableStrategy` enum - now each validator committing an offence is\ndisabled.\n* New era is not forced if too many validators are disabled.\n\nBefore this PR not all offenders were disabled. A decision was made\nbased on [`enum\nDisableStrategy`](https://github.com/paritytech/polkadot-sdk/blob/bbb6631641f9adba30c0ee6f4d11023a424dd362/substrate/primitives/staking/src/offence.rs#L54).\nSome offenders were disabled for a whole era, some just for a session,\nsome were not disabled at all.\n\nThis PR changes the disabling behaviour. Now a validator committing an\noffense is disabled immediately till the end of the current era.\n\nSome implementation notes:\n* `OffendingValidators` in pallet session keeps all offenders (this is\nnot changed). However its type is changed from `Vec<(u32, bool)>` to\n`Vec<u32>`. The reason is simple - each offender is getting disabled so\nthe bool doesn't make sense anymore.\n* When a validator is disabled it is first added to\n`OffendingValidators` and then to `DisabledValidators`. This is done in\n[`add_offending_validator`](https://github.com/paritytech/polkadot-sdk/blob/bbb6631641f9adba30c0ee6f4d11023a424dd362/substrate/frame/staking/src/slashing.rs#L325)\nfrom staking pallet.\n* In\n[`rotate_session`](https://github.com/paritytech/polkadot-sdk/blob/bdbe98297032e21a553bf191c530690b1d591405/substrate/frame/session/src/lib.rs#L623)\nthe `end_session` also calls\n[`end_era`](https://github.com/paritytech/polkadot-sdk/blob/bbb6631641f9adba30c0ee6f4d11023a424dd362/substrate/frame/staking/src/pallet/impls.rs#L490)\nwhen an era ends. In this case `OffendingValidators` are cleared\n**(1)**.\n* Then in\n[`rotate_session`](https://github.com/paritytech/polkadot-sdk/blob/bdbe98297032e21a553bf191c530690b1d591405/substrate/frame/session/src/lib.rs#L623)\n`DisabledValidators` are cleared **(2)**\n* And finally (still in `rotate_session`) a call to\n[`start_session`](https://github.com/paritytech/polkadot-sdk/blob/bbb6631641f9adba30c0ee6f4d11023a424dd362/substrate/frame/staking/src/pallet/impls.rs#L430)\nrepopulates the disabled validators **(3)**.\n* The reason for this complication is that session pallet knows nothing\nabut eras. To overcome this on each new session the disabled list is\nrepopulated (points 2 and 3). Staking pallet knows when a new era starts\nso with point 1 it ensures that the offenders list is cleared.\n\n---------\n\nCo-authored-by: ordian <noreply@reusable.software>\nCo-authored-by: ordian <write@reusable.software>\nCo-authored-by: Maciej <maciej.zyszkiewicz@parity.io>\nCo-authored-by: Gonçalo Pestana <g6pestana@gmail.com>\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>\nCo-authored-by: command-bot <>\nCo-authored-by: Ankan <10196091+Ank4n@users.noreply.github.com>",
          "timestamp": "2024-04-26T13:28:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/988e30f102b155ab68d664d62ac5c73da171659a"
        },
        "date": 1714143970510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.969999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.517011993659924,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.952060624670001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9219918873501807,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "antiyro",
            "username": "antiyro",
            "email": "74653697+antiyro@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a497d297575947b613fe0f3bbac9273a48fd6b0",
          "message": "fix(seal): shameless fix on sealing typo (#4304)",
          "timestamp": "2024-04-26T16:23:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2a497d297575947b613fe0f3bbac9273a48fd6b0"
        },
        "date": 1714151706848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.969999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.517011993659924,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.952060624670001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9219918873501807,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "antiyro",
            "username": "antiyro",
            "email": "74653697+antiyro@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2a497d297575947b613fe0f3bbac9273a48fd6b0",
          "message": "fix(seal): shameless fix on sealing typo (#4304)",
          "timestamp": "2024-04-26T16:23:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2a497d297575947b613fe0f3bbac9273a48fd6b0"
        },
        "date": 1714153799713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63554.759999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.8,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.3914274698899955,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.932334918190048,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.1972823707301616,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ankan",
            "username": "Ank4n",
            "email": "10196091+Ank4n@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "73b9a8391fa0b18308fa35f905e31cec77f5618f",
          "message": "[Staking] Runtime api if era rewards are pending to be claimed (#4301)\n\ncloses https://github.com/paritytech/polkadot-sdk/issues/426.\nrelated to https://github.com/paritytech/polkadot-sdk/pull/1189.\n\nWould help offchain programs to query if there are unclaimed pages of\nrewards for a given era.\n\nThe logic could look like below\n\n```js\n// loop as long as all era pages are claimed.\nwhile (api.call.stakingApi.pendingRewards(era, validator_stash)) {\n  api.tx.staking.payout_stakers(validator_stash, era)\n}\n```",
          "timestamp": "2024-04-28T12:35:51Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/73b9a8391fa0b18308fa35f905e31cec77f5618f"
        },
        "date": 1714313471528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.81000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.917013953590134,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.296032320599975,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6498849975701217,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Squirrel",
            "username": "gilescope",
            "email": "gilescope@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "954150f3b5fdb7d07d1ed01b138e2025245bb227",
          "message": "remove unnessisary use statements due to 2021 core prelude (#4183)\n\nSome traits are already included in the 2021 prelude and so shouldn't be\nneeded to use explicitly:\n\nuse `convert::TryFrom`, `convert::TryInto`, and `iter::FromIterator` are\nremoved.\n\n( https://doc.rust-lang.org/core/prelude/rust_2021/ )\n\nNo breaking changes or change of functionality, so I think no PR doc is\nneeded in this case.\n\n(Motivation: Removes some references to `sp-std`)",
          "timestamp": "2024-04-28T15:29:21Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/954150f3b5fdb7d07d1ed01b138e2025245bb227"
        },
        "date": 1714323513319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.02999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.8,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.573588295469973,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.191013673789955,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.359205705610195,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "92a348f57deed44789511df73d3fbbbcb58d98cb",
          "message": "Bump snow from 0.9.3 to 0.9.6 (#4061)\n\nBumps [snow](https://github.com/mcginty/snow) from 0.9.3 to 0.9.6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mcginty/snow/releases\">snow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.9.6</h2>\n<ul>\n<li>Validate invalid PSK positions when building a Noise protocol.</li>\n<li>Raise errors in various typos/mistakes in Noise patterns when\nparsing.</li>\n<li>Deprecate the <code>sodiumoxide</code> backend, as that crate is no\nlonger maintained. We may eventually migrate it to a maintaned version\nof the crate, but for now it's best to warn users.</li>\n<li>Set a hard limit in <code>read_message()</code> in transport mode to\n65535 to be fully compliant with the Noise specification.</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/mcginty/snow/compare/v0.9.5...v0.9.6\">https://github.com/mcginty/snow/compare/v0.9.5...v0.9.6</a></p>\n<h2>v0.9.5</h2>\n<p>This is a security release that fixes a logic flaw in decryption in\n<code>TransportState</code> (i.e. the stateful one), where the nonce\ncould increase even when decryption failed, which can cause a desync\nbetween the sender and receiver, opening this up as a denial of service\nvector if the attacker has the ability to inject packets in the channel\nNoise is talking over.</p>\n<p>More details can be found in the advisory: <a\nhref=\"https://github.com/mcginty/snow/security/advisories/GHSA-7g9j-g5jg-3vv3\">https://github.com/mcginty/snow/security/advisories/GHSA-7g9j-g5jg-3vv3</a></p>\n<p>All users are encouraged to update.</p>\n<h2>v0.9.4</h2>\n<p>This is a dependency version bump release because a couple of\nimportant dependencies released new versions that needed a\n<code>Cargo.toml</code> bump:</p>\n<ul>\n<li><code>ring</code> 0.17</li>\n<li><code>pqcrypto-kyber</code> 0.8</li>\n<li><code>aes-gcm</code> 0.10</li>\n<li><code>chacha20poly1305</code> 0.10</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/a4be73faa042c5967f39662aa66919f774831a9a\"><code>a4be73f</code></a>\nmeta: v0.9.6 release</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/9e53dcf5bbea869b5e3e9ed26866d683906bc848\"><code>9e53dcf</code></a>\nTransportState: limit read_message size to 65535</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/faf05609e19f4106cd47b78123415dfeb9330861\"><code>faf0560</code></a>\nDeprecate sodiumoxide resolver</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/308a24d23da13cb01a173f0ec23f140898801fb9\"><code>308a24d</code></a>\nAdd warnings about multiple calls to same method in Builder</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/f280991ae408685d72e098545314f2be160e57f9\"><code>f280991</code></a>\nError when extraneous parameters are included in string to parse</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/dbdcc4803aae6e5d9910163a7d52e0df8def4310\"><code>dbdcc48</code></a>\nError on duplicate modifiers in parameter string</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/8b1a819c93ceae98f9ba0a1be192fa61fdec78c2\"><code>8b1a819</code></a>\nValidate PSK index in pattern to avoid panic</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/74e30cf591d6d89c8a1670ee713ecc4e9607e38f\"><code>74e30cf</code></a>\nmeta: v0.9.5 release</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/12e8ae55547ae297d5f70599e5c884ea891303eb\"><code>12e8ae5</code></a>\nStateful nonce desync fix</li>\n<li><a\nhref=\"https://github.com/mcginty/snow/commit/02c26b7551cb7e221792a9d3d3a94730e6a34e8a\"><code>02c26b7</code></a>\nRemove clap from simple example</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/mcginty/snow/compare/v0.9.3...v0.9.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=snow&package-manager=cargo&previous-version=0.9.3&new-version=0.9.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/paritytech/polkadot-sdk/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-28T16:36:25Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/92a348f57deed44789511df73d3fbbbcb58d98cb"
        },
        "date": 1714327359091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52936.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63541.27,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.602611301369866,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.044108083460036,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9723941646101464,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tin Chung",
            "username": "chungquantin",
            "email": "56880684+chungquantin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f34d8e3cf033e2a22a41b505c437972a5dc83d78",
          "message": "Remove hard-coded indices from pallet-xcm tests (#4248)\n\n# ISSUE\n- Link to issue: https://github.com/paritytech/polkadot-sdk/issues/4237\n\n# DESCRIPTION\nRemove all ModuleError with hard-coded indices to pallet Error. For\nexample:\n```rs\nErr(DispatchError::Module(ModuleError {\n\tindex: 4,\n\terror: [2, 0, 0, 0],\n\tmessage: Some(\"Filtered\")\n}))\n```\nTo \n```rs\nlet expected_result = Err(crate::Error::<Test>::Filtered.into());\nassert_eq!(result, expected_result);\n```\n# TEST OUTCOME\n```\ntest result: ok. 74 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s\n```\n\n---------\n\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-04-29T07:13:01Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f34d8e3cf033e2a22a41b505c437972a5dc83d78"
        },
        "date": 1714380483675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.65000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.09999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.225093080390157,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.384155654220022,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.977357872389947,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ankan",
            "username": "Ank4n",
            "email": "10196091+Ank4n@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0031d49d1ec083c62a4e2b5bf594b7f45f84ab0d",
          "message": "[Staking] Not allow reap stash for virtual stakers (#4311)\n\nRelated to https://github.com/paritytech/polkadot-sdk/pull/3905.\n\nSince virtual stakers does not have a real balance, they should not be\nallowed to be reaped.\n\nThe proper reaping for agents slashed will be done in a separate PR.",
          "timestamp": "2024-04-29T15:55:45Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0031d49d1ec083c62a4e2b5bf594b7f45f84ab0d"
        },
        "date": 1714411492071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63557.02999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.464848092050062,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.8619582053599455,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.511399431040174,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shawn Tabrizi",
            "username": "shawntabrizi",
            "email": "shawntabrizi@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4875ea11aeef4f3fc7d724940e5ffb703830619b",
          "message": "Refactor XCM Simulator Example (#4220)\n\nThis PR does a \"developer experience\" refactor of the XCM Simulator\nExample.\n\nI was looking for existing code / documentation where developers could\nbetter learn about working with and configuring XCM.\n\nThe XCM Simulator was a natural starting point due to the fact that it\ncan emulate end to end XCM scenarios, without needing to spawn multiple\nreal chains.\n\nHowever, the XCM Simulator Example was just 3 giant files with a ton of\nconfigurations, runtime, pallets, and tests mashed together.\n\nThis PR breaks down the XCM Simulator Example in a way that I believe is\nmore approachable by a new developer who is looking to navigate the\nvarious components of the end to end example, and modify it themselves.\n\nThe basic structure is:\n\n- xcm simulator example\n    - lib (tries to only use the xcm simulator macros)\n    - tests\n    - relay-chain\n        - mod (basic runtime that developers should be familiar with)\n        - xcm-config\n            - mod (contains the `XcmConfig` type\n            - various files for each custom configuration  \n    - parachain\n        - mock_msg_queue (custom pallet for simulator example)\n        - mod (basic runtime that developers should be familiar with)\n        - xcm-config\n            - mod (contains the `XcmConfig` type\n            - various files for each custom configuration\n\nI would like to add more documentation to this too, but I think this is\na first step to be accepted which will affect how documentation is added\nto the example\n\n---------\n\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>",
          "timestamp": "2024-04-29T21:22:23Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4875ea11aeef4f3fc7d724940e5ffb703830619b"
        },
        "date": 1714431076131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63541.07000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.790374835590022,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.318418332620022,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.7899848660101525,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "31dc8bb1de9a73c57863c4698ea23559ef729f67",
          "message": "Improvements in minimal template (#4119)\n\nThis PR makes a few improvements in the docs for the minimal template.\n\n---------\n\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>",
          "timestamp": "2024-04-30T05:39:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/31dc8bb1de9a73c57863c4698ea23559ef729f67"
        },
        "date": 1714458844257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63543.29,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.010989594540124,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3309497785101003,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.4801723087899985,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "PG Herveou",
            "username": "pgherveou",
            "email": "pgherveou@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c973fe86f8c668462186c95655a58fda04508e9a",
          "message": "Contracts: revert reverted changes from 4266 (#4277)\n\nrevert some reverted changes from #4266",
          "timestamp": "2024-04-30T14:29:14Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c973fe86f8c668462186c95655a58fda04508e9a"
        },
        "date": 1714492540637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.72000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.248916427840134,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.3258713197000755,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.639183161030006,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej",
            "username": "Overkillus",
            "email": "maciej.zyszkiewicz@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6d392c7eea496e0874a9ea37f4a8ea447ebc330e",
          "message": "Statement Distribution Per Peer Rate Limit (#3444)\n\n- [x] Drop requests from a PeerID that is already being served by us.\n- [x] Don't sent requests to a PeerID if we already are requesting\nsomething from them at that moment (prioritise other requests or wait).\n- [x] Tests\n- [ ] ~~Add a small rep update for unsolicited requests (same peer\nrequest)~~ not included in original PR due to potential issues with\nnodes slowly updating\n- [x] Add a metric to track the amount of dropped requests due to peer\nrate limiting\n- [x] Add a metric to track how many time a node reaches the max\nparallel requests limit in v2+\n\nHelps with but does not close yet:\nhttps://github.com/paritytech-secops/srlabs_findings/issues/303",
          "timestamp": "2024-05-01T17:17:55Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6d392c7eea496e0874a9ea37f4a8ea447ebc330e"
        },
        "date": 1714589132553,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.420000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.589795507319994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.116679865599979,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.309011316340095,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e5a93fbcd4a6acec7ab83865708e5c5df3534a7b",
          "message": "HRMP - set `DefaultChannelSizeAndCapacityWithSystem` with dynamic values according to the `ActiveConfig` (#4332)\n\n## Summary\nThis PR enhances the capability to set\n`DefaultChannelSizeAndCapacityWithSystem` for HRMP. Currently, all\ntestnets (Rococo, Westend) have a hard-coded value set as 'half of the\nmaximum' determined by the live `ActiveConfig`. While this approach\nappears satisfactory, potential issues could arise if the live\n`ActiveConfig` are adjusted below these hard-coded values, necessitating\na new runtime release with updated values. Additionally, hard-coded\nvalues have consequences, such as Rococo's benchmarks not functioning:\nhttps://gitlab.parity.io/parity/mirrors/polkadot-sdk/-/jobs/6082656.\n\n## Solution\nThe proposed solution here is to utilize\n`ActiveConfigHrmpChannelSizeAndCapacityRatio`, which reads the current\n`ActiveConfig` and calculates `DefaultChannelSizeAndCapacityWithSystem`,\nfor example, \"half of the maximum\" based on live data. This way,\nwhenever `ActiveConfig` is modified,\n`ActiveConfigHrmpChannelSizeAndCapacityRatio` automatically returns\nadjusted values with the appropriate ratio. Thus, manual adjustments and\nnew runtime releases become unnecessary.\n\n\nRelates to a comment/discussion:\nhttps://github.com/paritytech/polkadot-sdk/pull/3721/files#r1541001420\nRelates to a comment/discussion:\nhttps://github.com/paritytech/polkadot-sdk/pull/3721/files#r1549291588\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-01T20:01:55Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e5a93fbcd4a6acec7ab83865708e5c5df3534a7b"
        },
        "date": 1714598868859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63540.84000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.09999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1158913670701347,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.218438773569974,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.799201386750028,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "14c4afc5382dcb18095af5c090e2aa1af65ecae6",
          "message": "[Backport] Version bumps and reorg prdocs from 1.11.0 (#4336)\n\nThis PR backports version bumps and reorganization of the `prdocs` from\n`1.11.0` release branch back to master",
          "timestamp": "2024-05-02T07:21:11Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/14c4afc5382dcb18095af5c090e2aa1af65ecae6"
        },
        "date": 1714639868568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.78999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.3,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.6460106499399405,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.25104776159003,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3935174199001787,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "171bedc2b319e18d51a7b510d8bd4cfd2e645c31",
          "message": "Bridge: ignore client errors when calling recently added `*_free_headers_interval` methods (#4350)\n\nsee https://github.com/paritytech/parity-bridges-common/issues/2974 : we\nstill need to support unupgraded chains (BHK and BHP) in relay\n\nWe may need to revert this change when all chains are upgraded",
          "timestamp": "2024-05-02T10:02:59Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/171bedc2b319e18d51a7b510d8bd4cfd2e645c31"
        },
        "date": 1714647360193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63539.619999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52933.5,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3350431958601434,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.528457082589954,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.155113249340108,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Vasile",
            "username": "lexnv",
            "email": "60601340+lexnv@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "877617c44629e84ee36ac7194f4fe00fe3fa0b71",
          "message": "cargo: Update experimental litep2p to latest version (#4344)\n\nThis PR updates the litep2p crate to the latest version.\n\nThis fixes the build for developers that want to perform `cargo update`\non all their dependencies:\nhttps://github.com/paritytech/polkadot-sdk/pull/4343, by porting the\nlatest changes.\n\nThe peer records were introduced to litep2p to be able to distinguish\nand update peers with outdated records.\nIt is going to be properly used in substrate via:\nhttps://github.com/paritytech/polkadot-sdk/pull/3786, however that is\npending the commit to merge on litep2p master:\nhttps://github.com/paritytech/litep2p/pull/96.\n\nCloses: https://github.com/paritytech/polkadot-sdk/pull/4343\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2024-05-02T10:54:57Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/877617c44629e84ee36ac7194f4fe00fe3fa0b71"
        },
        "date": 1714653078538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63549.36,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.750741698809943,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.146267871579989,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7203813428501618,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qinxuan Chen",
            "username": "koushiro",
            "email": "koushiro.cqx@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4e0b3abbd696c809aebd8d5e64a671abf843087f",
          "message": "deps: update jsonrpsee to v0.22.5 (#4330)\n\nuse `server-core` feature instead of `server` feature when defining the\nrpc api",
          "timestamp": "2024-05-02T12:25:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4e0b3abbd696c809aebd8d5e64a671abf843087f"
        },
        "date": 1714657991672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63551.1,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.141575628700015,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.813329087629892,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0584330719201267,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "30a1972ee5608afa22cd5b72339acb59bb51b0f3",
          "message": "More `xcm::v4` cleanup and `xcm_fee_payment_runtime_api::XcmPaymentApi` nits (#4355)\n\nThis PR:\n- changes `xcm::v4` to `xcm::prelude` imports for coretime stuff\n- changes `query_acceptable_payment_assets` /\n`query_weight_to_asset_fee` implementations to be more resilient to the\nXCM version change\n- adds `xcm_fee_payment_runtime_api::XcmPaymentApi` to the\nAssetHubRococo/Westend exposing a native token as acceptable payment\nasset\n\nContinuation of: https://github.com/paritytech/polkadot-sdk/pull/3607\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/4297\n\n## Possible follow-ups\n\n- [ ] add all sufficient assets (`Assets`, `ForeignAssets`) as\nacceptable payment assets ?",
          "timestamp": "2024-05-02T14:08:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/30a1972ee5608afa22cd5b72339acb59bb51b0f3"
        },
        "date": 1714664111724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63540.909999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.507767096989978,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.18690846672989,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3372831581402367,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6580101ef3d5c36e1d84a820136fb87f398b04a3",
          "message": "Deprecate `NativeElseWasmExecutor` (#4329)\n\nThe native executor is deprecated and downstream users should stop using\nit.",
          "timestamp": "2024-05-02T15:19:38Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6580101ef3d5c36e1d84a820136fb87f398b04a3"
        },
        "date": 1714668637461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63553.030000000006,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.352515512110115,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.737282359900052,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.481066659380165,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kris Bitney",
            "username": "krisbitney",
            "email": "kris@dorg.tech"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a9aeabe923dae63ab76ab290951cb9183c51f59c",
          "message": "Allow for 0 existential deposit in benchmarks for `pallet_staking`, `pallet_session`, and `pallet_balances` (#4346)\n\nThis PR ensures non-zero values are available in benchmarks for\n`pallet_staking`, `pallet_session`, and `pallet_balances` where required\nfor them to run.\n\nThis small change makes it possible to run the benchmarks for\n`pallet_staking`, `pallet_session`, and `pallet_balances` in a runtime\nfor which existential deposit is set to 0.\n\nThe benchmarks for `pallet_staking` and `pallet_session` will still fail\nin runtimes that use `U128CurrencyToVote`, but that is easy to work\naround by creating a new `CurrencyToVote` implementation for\nbenchmarking.\n\nThe changes are implemented by checking if existential deposit equals 0\nand using 1 if so.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-02T20:16:19Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a9aeabe923dae63ab76ab290951cb9183c51f59c"
        },
        "date": 1714686037084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63553.030000000006,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.352515512110115,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.737282359900052,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.481066659380165,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kris Bitney",
            "username": "krisbitney",
            "email": "kris@dorg.tech"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a9aeabe923dae63ab76ab290951cb9183c51f59c",
          "message": "Allow for 0 existential deposit in benchmarks for `pallet_staking`, `pallet_session`, and `pallet_balances` (#4346)\n\nThis PR ensures non-zero values are available in benchmarks for\n`pallet_staking`, `pallet_session`, and `pallet_balances` where required\nfor them to run.\n\nThis small change makes it possible to run the benchmarks for\n`pallet_staking`, `pallet_session`, and `pallet_balances` in a runtime\nfor which existential deposit is set to 0.\n\nThe benchmarks for `pallet_staking` and `pallet_session` will still fail\nin runtimes that use `U128CurrencyToVote`, but that is easy to work\naround by creating a new `CurrencyToVote` implementation for\nbenchmarking.\n\nThe changes are implemented by checking if existential deposit equals 0\nand using 1 if so.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-02T20:16:19Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a9aeabe923dae63ab76ab290951cb9183c51f59c"
        },
        "date": 1714688133154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.869999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.238943065889993,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4086536865300965,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.65474114762001,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ad72cd8d481008ddc38bdd67a3ca3434901dd795",
          "message": "[WIP][CI] Add more GHA jobs (#4270)\n\ncc https://github.com/paritytech/ci_cd/issues/939",
          "timestamp": "2024-05-03T10:43:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ad72cd8d481008ddc38bdd67a3ca3434901dd795"
        },
        "date": 1714738238499,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63549.31,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.7,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.433170125599913,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.996437076970114,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.251428405340177,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kris Bitney",
            "username": "krisbitney",
            "email": "kris@dorg.tech"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "519862334feec5c72709afbf595ed61ddfb2298a",
          "message": "Fix: dust unbonded for zero existential deposit (#4364)\n\nWhen a staker unbonds and withdraws, it is possible that their stash\nwill contain less currency than the existential deposit. If that\nhappens, their stash is reaped. But if the existential deposit is zero,\nthe reap is not triggered. This PR adjusts `pallet_staking` to reap a\nstash in the special case that the stash value is zero and the\nexistential deposit is zero.\n\nThis change is important for blockchains built on substrate that require\nan existential deposit of zero, becuase it conserves valued storage\nspace.\n\nThere are two places in which ledgers are checked to determine if their\nvalue is less than the existential deposit and they should be reaped: in\nthe methods `do_withdraw_unbonded` and `reap_stash`. When the check is\nmade, the condition `ledger_total == 0` is also checked. If\n`ledger_total` is zero, then it must be below any existential deposit\ngreater than zero and equal to an existential deposit of 0.\n\nI added a new test for each method to confirm the change behaves as\nexpected.\n\nCloses https://github.com/paritytech/polkadot-sdk/issues/4340\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-03T12:31:45Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/519862334feec5c72709afbf595ed61ddfb2298a"
        },
        "date": 1714744731427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63539.8,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.115136607060132,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.712722248160047,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.027563684640188,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cheme",
            "username": "cheme",
            "email": "emericchevalier.pro@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c09a0631334c3e021a30aa49a503815aa047b29",
          "message": "State trie migration on asset-hub westend and collectives westend (#4185)",
          "timestamp": "2024-05-03T14:04:04Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4c09a0631334c3e021a30aa49a503815aa047b29"
        },
        "date": 1714750291333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.48,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.947577491499999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.428531070030215,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.6140283230100065,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lulu",
            "username": "Morganamilo",
            "email": "morgan@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f45847b8b10db9cea664d0ce90083947c3843b10",
          "message": "Add validate field to prdoc (#4368)",
          "timestamp": "2024-05-03T15:07:35Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f45847b8b10db9cea664d0ce90083947c3843b10"
        },
        "date": 1714756323992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.079999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.3,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.9777332244200965,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.962579782649982,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.551998903559989,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c0234becc185f88445dd63105b6f363c9e5990ce",
          "message": "Publish `polkadot-sdk-frame`  crate (#4370)",
          "timestamp": "2024-05-04T05:36:19Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c0234becc185f88445dd63105b6f363c9e5990ce"
        },
        "date": 1714806231111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.069999999985,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.032233782080004,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2852326877801703,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.403643804229962,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "73c89d308fefcedfc3619f0273e13b6623766b81",
          "message": "Introduces `TypeWithDefault<T, D: Get<T>>` (#4034)\n\nNeeded for: https://github.com/polkadot-fellows/runtimes/issues/248\n\nThis PR introduces a new type `TypeWithDefault<T, D: Get<T>>` to be able\nto provide a custom default for any type. This can, then, be used to\nprovide the nonce type that returns the current block number as the\ndefault, to avoid replay of immortal transactions.\n\n---------\n\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-05-06T03:59:20Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/73c89d308fefcedfc3619f0273e13b6623766b81"
        },
        "date": 1714973910563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.06000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 8.080053513599918,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.632035481910163,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.501562840889955,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jun Jiang",
            "username": "jasl",
            "email": "jasl9187@hotmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6e3059a873b78c7a4e2da18b4c298847713140ee",
          "message": "Upgrade a few deps (#4381)\n\nSplit from #4374\n\nThis PR helps to reduce dependencies and align versions, which would\nhelp to move them to workspace dep",
          "timestamp": "2024-05-06T11:49:14Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6e3059a873b78c7a4e2da18b4c298847713140ee"
        },
        "date": 1715001877714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.79,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.90000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.180909964369988,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.621565220630034,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4189322805300955,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e434176e0867d17336301388b46a6796b366a976",
          "message": "Improve Create release draft workflow + templates for the free notes and docker images sections in the notes (#4371)\n\nThis PR has the following changes:\n\n- New templates for the free notes and docker images sections in the\nrelease notes. There is going to be a section for the manual additions\nto the release notes + a section with the links to the docker images for\n`polkadot` and `polkadot-parachain` binaries at the end of the release\ndraft.\n- Fix for matrix section in the Create release draft flow (adds the\nrelease environment variable)\n- Reduction of the message which is posted to the announcement chats, as\nthe current one with the full release notes text is too big.",
          "timestamp": "2024-05-06T14:39:43Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e434176e0867d17336301388b46a6796b366a976"
        },
        "date": 1715011732310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63554.66000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3336728504301254,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.5705820393000405,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.087911451330054,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b709dccd063507d468db3e10f491bb60cd80ac64",
          "message": "Add support for versioned notification for HRMP pallet (#4281)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/4003 (please\nsee for the problem description)\n\n## TODO\n- [x] add more tests covering `WrapVersion` corner cases (e.g. para has\nlower version, ...)\n- [x] regenerate benchmarks `runtime_parachains::hrmp` (fix for Rococo\nis here: https://github.com/paritytech/polkadot-sdk/pull/4332)\n\n## Questions / possible improvements\n- [ ] A `WrapVersion` implementation for `pallet_xcm` initiates version\ndiscovery with\n[note_unknown_version](https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/xcm/pallet-xcm/src/lib.rs#L2527C5-L2527C25),\nthere is possibility to avoid this overhead in this HRMP case to create\nnew `WrapVersion` adapter for `pallet_xcm` which would not use\n`note_unknown_version`. Is it worth to do it or not?\n- [ ] There's a possibility to decouple XCM functionality from the HRMP\npallet, allowing any relay chain to generate its own notifications. This\napproach wouldn't restrict notifications solely to the XCM. However,\nit's uncertain whether it's worthwhile or desirable to do so? It means\nmaking HRMP pallet more generic. E.g. hiding HRMP notifications behind\nsome trait:\n\t```\n\ttrait HrmpNotifications {\n\n\t\tfn on_channel_open_request(\n\t\t\tsender: ParaId,\n\t\t\tproposed_max_capacity: u32,\n\t\t\tproposed_max_message_size: u32) -> primitives::DownwardMessage;\n\nfn on_channel_accepted(recipient: ParaId) ->\nprimitives::DownwardMessage;\n\nfn on_channel_closing(initiator: ParaId, sender: ParaId, recipient:\nParaId) -> primitives::DownwardMessage;\n\t}\n\t```\nand then we could have whatever adapter, `impl HrmpNotifications for\nVersionedXcmHrmpNotifications {...}`,\n\t```\n\timpl parachains_hrmp::Config for Runtime {\n\t..\n\t\ttype HrmpNotifications = VersionedXcmHrmpNotifications;\n\t..\n\t}\n\t```\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-07T08:33:32Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b709dccd063507d468db3e10f491bb60cd80ac64"
        },
        "date": 1715076245838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63550.86,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 8.022393158519925,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.723369890899981,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6416040401402165,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jimdssd",
            "username": "jimdssd",
            "email": "wqq1479791@163.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "29c8130bab0ed8216f48e47a78c602e7f0c5c1f2",
          "message": "chore: fix typos (#4395)",
          "timestamp": "2024-05-07T10:23:27Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/29c8130bab0ed8216f48e47a78c602e7f0c5c1f2"
        },
        "date": 1715082867280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63549.91000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.8422964905701624,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.281030101940011,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.787595838069935,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Evgeny Snitko",
            "username": "AndWeHaveAPlan",
            "email": "evgeny@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1c8595adb89b7b6ac443e9a1caf0b20a6e1231a5",
          "message": "Code coverage preparations (#4387)\n\nAdded manual jobs for code coverage (triggered via `codecov-start` job):\n - **codecov-start** - initialize Codecov report for commit/pr\n- **test-linux-stable-codecov** - perform `nextest run` and upload\ncoverage data parts\n- **codecov-finish** - finalize uploading of data parts and generate\nCodecov report\n\nCoverage requires code to be built with `-C instrument-coverage` which\ncauses build errors (e .g. ```error[E0275]: overflow evaluating the\nrequirement `<mock::Test as pallet::Config>::KeyOwnerProof == _\\` ```,\nseems like related to\n[2641](https://github.com/paritytech/polkadot-sdk/issues/2641)) and\nunstable tests behavior\n([example](https://gitlab.parity.io/parity/mirrors/polkadot-sdk/-/jobs/6004731)).\nThis is where we'll nee the developers assistance\n\nclosing [[polkadot-sdk] Add code coverage\n#902](https://github.com/paritytech/ci_cd/issues/902)",
          "timestamp": "2024-05-07T15:14:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/1c8595adb89b7b6ac443e9a1caf0b20a6e1231a5"
        },
        "date": 1715096716627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.57000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.5,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.819302342120174,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.345501352530052,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.770008094350001,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tsvetomir Dimitrov",
            "username": "tdimitrov",
            "email": "tsvetomir@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b6dcd1b65436a6f7c087ad659617a9caf29a233a",
          "message": "Update prdoc for 2226 (#4401)\n\nMention that offenders are no longer chilled and suggest node operators\nand nominators to monitor their nodes/nominees closely.\n\n---------\n\nCo-authored-by: Maciej <maciej.zyszkiewicz@parity.io>",
          "timestamp": "2024-05-07T19:18:09Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b6dcd1b65436a6f7c087ad659617a9caf29a233a"
        },
        "date": 1715114773510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.05,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.751099255790104,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.244758526120053,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.45252866074019,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c91c13b9c1d6eaf12d89dbf088c1e16b25261822",
          "message": "Generate XCM weights for coretimes (#4396)\n\nAddressing comment:\nhttps://github.com/paritytech/polkadot-sdk/pull/3455#issuecomment-2094829076\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-07T21:50:32Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c91c13b9c1d6eaf12d89dbf088c1e16b25261822"
        },
        "date": 1715121365215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.67999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.255527307599957,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.820853044140153,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.793941075689942,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c91c13b9c1d6eaf12d89dbf088c1e16b25261822",
          "message": "Generate XCM weights for coretimes (#4396)\n\nAddressing comment:\nhttps://github.com/paritytech/polkadot-sdk/pull/3455#issuecomment-2094829076\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-07T21:50:32Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c91c13b9c1d6eaf12d89dbf088c1e16b25261822"
        },
        "date": 1715123875379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.62000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.263894010299913,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.8759899162901195,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.874875719489987,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17b56fae2d976a3df87f34076875de8c26da0355",
          "message": "Bridge: check bridge GRANDPA pallet call limits from signed extension (#4385)\n\nsilent, because it'll be deployed with the\nhttps://github.com/paritytech/polkadot-sdk/pull/4102, where this code\nhas been introduced\n\nI've planned originally to avoid doing that check in the runtime code,\nbecause it **may be** checked offchain. But actually, the check is quite\ncheap and we could do that onchain too.",
          "timestamp": "2024-05-08T08:26:57Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/17b56fae2d976a3df87f34076875de8c26da0355"
        },
        "date": 1715159218774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.95,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.802010429180001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.284466665599918,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.850940871960126,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17b56fae2d976a3df87f34076875de8c26da0355",
          "message": "Bridge: check bridge GRANDPA pallet call limits from signed extension (#4385)\n\nsilent, because it'll be deployed with the\nhttps://github.com/paritytech/polkadot-sdk/pull/4102, where this code\nhas been introduced\n\nI've planned originally to avoid doing that check in the runtime code,\nbecause it **may be** checked offchain. But actually, the check is quite\ncheap and we could do that onchain too.",
          "timestamp": "2024-05-08T08:26:57Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/17b56fae2d976a3df87f34076875de8c26da0355"
        },
        "date": 1715161958887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.590000000004,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.284690175330036,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.814637812119976,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.8629673604801598,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "37b1544b51aeba183350d4c8d76987c32e6c9ca7",
          "message": "Adds benchmarking and try-runtime support in frame crate (#4406)",
          "timestamp": "2024-05-08T11:50:23Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/37b1544b51aeba183350d4c8d76987c32e6c9ca7"
        },
        "date": 1715174948896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63552.96000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 11.50274803591998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.01244826689031,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.68367593888994,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lulu",
            "username": "Morganamilo",
            "email": "morgan@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6fdb522ded3813f43a539964af78d5fc6d9f1e97",
          "message": "Add semver CI check  (#4279)\n\nThis checks changed files against API surface changes against what the\nprdoc says.\n\nIt will error if the detected semver change is greater than the one\nlisted in the prdoc. It will also error if any crates were touched but\nnot mentioned in the prdoc.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-05-08T16:17:09Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6fdb522ded3813f43a539964af78d5fc6d9f1e97"
        },
        "date": 1715190662482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.94,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.963092178420013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.236361867680031,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6726475538101853,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d37719da022879b4e2ef7947f5c9d2187f666ae7",
          "message": "rpc: add option to `whitelist ips` in rate limiting (#3701)\n\nThis PR adds two new CLI options to disable rate limiting for certain ip\naddresses and whether to trust \"proxy header\".\nAfter going back in forth I decided to use ip addr instead host because\nwe don't want rely on the host header which can be spoofed but another\nsolution is to resolve the ip addr from the socket to host name.\n\nExample:\n\n```bash\n$ polkadot --rpc-rate-limit 10 --rpc-rate-limit-whitelisted-ips 127.0.0.1/8 --rpc-rate-limit-trust-proxy-headers\n```\n\nThe ip addr is read from the HTTP proxy headers `Forwarded`,\n`X-Forwarded-For` `X-Real-IP` if `--rpc-rate-limit-trust-proxy-headers`\nis enabled if that is not enabled or the headers are not found then the\nip address is read from the socket.\n\n//cc @BulatSaif can you test this and give some feedback on it?",
          "timestamp": "2024-05-09T07:23:59Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d37719da022879b4e2ef7947f5c9d2187f666ae7"
        },
        "date": 1715245028558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63555.380000000005,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52947.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.691800476000141,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.295124224940112,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.903209441329993,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "657df04cd901559cc6e33a8dfe70395bddb079f2",
          "message": "Fixes `frame-support` reference in `try_decode_entire_state` (#4425)",
          "timestamp": "2024-05-10T09:19:43Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/657df04cd901559cc6e33a8dfe70395bddb079f2"
        },
        "date": 1715338359729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.95,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.62155968260004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.117522617739997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6434177220401884,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej",
            "username": "Overkillus",
            "email": "maciej.zyszkiewicz@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "00440779d42b754292783612fc0f7e99d7cde2d2",
          "message": "Disabling Strategy Implementers Guide (#2955)\n\nCloses #1961",
          "timestamp": "2024-05-10T12:31:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/00440779d42b754292783612fc0f7e99d7cde2d2"
        },
        "date": 1715347669796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.95,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.62155968260004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.117522617739997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6434177220401884,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej",
            "username": "Overkillus",
            "email": "maciej.zyszkiewicz@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "00440779d42b754292783612fc0f7e99d7cde2d2",
          "message": "Disabling Strategy Implementers Guide (#2955)\n\nCloses #1961",
          "timestamp": "2024-05-10T12:31:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/00440779d42b754292783612fc0f7e99d7cde2d2"
        },
        "date": 1715349417780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.95,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.62155968260004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.117522617739997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6434177220401884,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dónal Murray",
            "username": "seadanda",
            "email": "donal.murray@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a993513c9c54313bc3c7093563d2f4ff6fe42ae2",
          "message": "Add docs to request_core_count (#4423)\n\nThe fact that this takes two sessions to come into effect is not\nobvious. Just added some docs to explain that.\n\nAlso tidied up uses of \"broker chain\" -> \"coretime chain\"",
          "timestamp": "2024-05-10T19:41:02Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a993513c9c54313bc3c7093563d2f4ff6fe42ae2"
        },
        "date": 1715375380269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63552.12000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1985245119301036,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.96179448921998,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.384794801320022,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polka.dom",
            "username": "PolkadotDom",
            "email": "polkadotdom@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "32deb605a09adf28ba30319b06a4197a2d048ef7",
          "message": "Remove `pallet::getter` usage from authority-discovery pallet (#4091)\n\nAs per #3326, removes pallet::getter usage from the pallet\nauthority-discovery. The syntax `StorageItem::<T, I>::get()` should be\nused instead.\n\ncc @muraca\n\n---------\n\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-10T21:28:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/32deb605a09adf28ba30319b06a4197a2d048ef7"
        },
        "date": 1715381942699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.81999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.09999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.764223260750265,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 11.036223898689968,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.299465111939956,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e0e5fcd0a814ab30d15b3f8920c8d9ab3970e11",
          "message": "xcm-emlator: Use `BlockNumberFor` instead of `parachains_common::BlockNumber=u32` (#4434)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/4428",
          "timestamp": "2024-05-12T15:16:23Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9e0e5fcd0a814ab30d15b3f8920c8d9ab3970e11"
        },
        "date": 1715534384622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.999999999985,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.3,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.904712378400082,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.905309556839994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.53526453698008,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dastan",
            "username": "dastansam",
            "email": "88332432+dastansam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "efc2132fa2ece419d36af03c935b3c2c60440eb5",
          "message": "migrations: `take()`should consume read and write operation weight (#4302)\n\n#### Problem\n`take()` consumes only 1 read worth of weight in\n`single-block-migrations` example, while `take()`\n[is](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/support/src/storage/unhashed.rs#L63)\n`get() + kill()`, i.e should be 1 read + 1 write. I think this could\nmislead developers who follow this example to write their migrations\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-12T22:35:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/efc2132fa2ece419d36af03c935b3c2c60440eb5"
        },
        "date": 1715555914802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.78999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.623665051299954,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.253141216560081,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4393584506501176,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dastan",
            "username": "dastansam",
            "email": "88332432+dastansam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "efc2132fa2ece419d36af03c935b3c2c60440eb5",
          "message": "migrations: `take()`should consume read and write operation weight (#4302)\n\n#### Problem\n`take()` consumes only 1 read worth of weight in\n`single-block-migrations` example, while `take()`\n[is](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/support/src/storage/unhashed.rs#L63)\n`get() + kill()`, i.e should be 1 read + 1 write. I think this could\nmislead developers who follow this example to write their migrations\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-12T22:35:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/efc2132fa2ece419d36af03c935b3c2c60440eb5"
        },
        "date": 1715558748528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63539.7,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.53407298781997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.234906157319992,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3119468829001333,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "477a120893ecd35f5e4f808cba10525424b5711d",
          "message": "[ci] Add forklift to GHA ARC (#4372)\n\nPR adds forklift settings and forklift to test-github-actions\n\ncc https://github.com/paritytech/ci_cd/issues/939",
          "timestamp": "2024-05-13T09:54:32Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/477a120893ecd35f5e4f808cba10525424b5711d"
        },
        "date": 1715596503300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52945.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63549.69,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.55501807833011,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.5006567842001592,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.855586049150079,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tsvetomir Dimitrov",
            "username": "tdimitrov",
            "email": "tsvetomir@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fb7362f67e3ac345073b203e029bcb561822f09c",
          "message": "Bump `proc-macro-crate` to the latest version (#4409)\n\nThis PR bumps `proc-macro-crate` to the latest version.\n\nIn order to test a runtime from\nhttps://github.com/polkadot-fellows/runtimes/ with the latest version of\npolkadot-sdk one needs to use `cargo vendor` to extract all runtime\ndependencies, patch them by hand and then build the runtime.\n\nHowever at the moment 'vendored' builds fail due to\nhttps://github.com/bkchr/proc-macro-crate/issues/48. To fix this\n`proc-macro-crate` should be updated to version `3.0.1` or higher.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-13T14:58:02Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/fb7362f67e3ac345073b203e029bcb561822f09c"
        },
        "date": 1715619065137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63551.02999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.8,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.799721153960038,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.372491497599954,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.495429803080202,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Éloïs",
            "username": "librelois",
            "email": "c@elo.tf"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "594c3ed5750bc7ab97f82fb8387f82661eca1cc4",
          "message": " improve MockValidationDataInherentDataProvider to support async backing (#4442)\n\nSupport async backing in `--dev` mode\n\nThis PR improve the relay mock `MockValidationDataInherentDataProvider`\nto mach expectations of async backing runtimes.\n\n* Add para_head in the mock relay proof\n* Add relay slot in the mock relay proof \n\nfix https://github.com/paritytech/polkadot-sdk/issues/4437",
          "timestamp": "2024-05-13T22:03:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/594c3ed5750bc7ab97f82fb8387f82661eca1cc4"
        },
        "date": 1715645065334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63543.55,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.0999899565601146,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.163690392279949,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.899207171680029,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "115c2477eb287df55107cd95594100ba395ed239",
          "message": "Bridge: use *-uri CLI arguments when starting relayer (#4451)\n\n`*-host` and `*-port` are obsolete and we'll hopefully remove them in\nthe future (already WIP for Rococo <> Westend relayer)",
          "timestamp": "2024-05-14T08:34:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/115c2477eb287df55107cd95594100ba395ed239"
        },
        "date": 1715682911659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.240000000005,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 12.615147477179944,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 9.82655496778997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.57723289372031,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polka.dom",
            "username": "PolkadotDom",
            "email": "polkadotdom@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6487ac1ede14b5785be1429655ed8c387d82be9a",
          "message": "Remove pallet::getter usage from the bounties and child-bounties pallets (#4392)\n\nAs per #3326, removes pallet::getter usage from the bounties and\nchild-bounties pallets. The syntax `StorageItem::<T, I>::get()` should\nbe used instead.\n\nChanges to one pallet involved changes in the other, so I figured it'd\nbe best to combine these two.\n\ncc @muraca\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-16T09:01:29Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6487ac1ede14b5785be1429655ed8c387d82be9a"
        },
        "date": 1715855466563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52945.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63551.340000000004,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.916470267209914,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.8684474593001164,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.531943889440084,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4adfa37d14c0d81f09071687afb270ecdd5c2076",
          "message": "[Runtime] Bound XCMP queue (#3952)\n\nRe-applying #2302 after increasing the `MaxPageSize`.  \n\nRemove `without_storage_info` from the XCMP queue pallet. Part of\nhttps://github.com/paritytech/polkadot-sdk/issues/323\n\nChanges:\n- Limit the number of messages and signals a HRMP channel can have at\nmost.\n- Limit the number of HRML channels.\n\nA No-OP migration is put in place to ensure that all `BoundedVec`s still\ndecode and not truncate after upgrade. The storage version is thereby\nbumped to 5 to have our tooling remind us to deploy that migration.\n\n## Integration\n\nIf you see this error in your try-runtime-cli:  \n```pre\nMax message size for channel is too large. This means that the V5 migration can be front-run and an\nattacker could place a large message just right before the migration to make other messages un-decodable.\nPlease either increase `MaxPageSize` or decrease the `max_message_size` for this channel. Channel max:\n102400, MaxPageSize: 65535\n```\n\nThen increase the `MaxPageSize` of the `cumulus_pallet_xcmp_queue` to\nsomething like this:\n```rust\ntype MaxPageSize = ConstU32<{ 103 * 1024 }>;\n```\n\nThere is currently no easy way for on-chain governance to adjust the\nHRMP max message size of all channels, but it could be done:\nhttps://github.com/paritytech/polkadot-sdk/issues/3145.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>",
          "timestamp": "2024-05-16T10:43:56Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4adfa37d14c0d81f09071687afb270ecdd5c2076"
        },
        "date": 1715861452235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.95000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.883740833400016,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.8430086689601333,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.534753632750014,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polka.dom",
            "username": "PolkadotDom",
            "email": "polkadotdom@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "04f88f5b03038acbdeb7475f543baf6b06d64f74",
          "message": "Remove pallet::getter usage from the democracy pallet (#4472)\n\nAs per #3326, removes usage of the pallet::getter macro from the\ndemocracy pallet. The syntax `StorageItem::<T, I>::get()` should be used\ninstead.\n\ncc @muraca",
          "timestamp": "2024-05-16T13:53:36Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/04f88f5b03038acbdeb7475f543baf6b06d64f74"
        },
        "date": 1715869162783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.380000000005,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.9512555055800798,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.679352646599984,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.015975438669988,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Clara van Staden",
            "username": "claravanstaden",
            "email": "claravanstaden64@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "943eb46ed54c2fcd9fab693b86ef59ce18c0f792",
          "message": "Snowbridge - Ethereum Client - Reject finalized updates without a sync committee in next store period (#4478)\n\nWhile syncing Ethereum consensus updates to the Snowbridge Ethereum\nlight client, the syncing process stalled due to error\n`InvalidSyncCommitteeUpdate` when importing the next sync committee for\nperiod `1087`.\n\nThis bug manifested specifically because our light client checkpoint is\na few weeks old (submitted to governance weeks ago) and had to catchup\nuntil a recent block. Since then, we have done thorough testing of the\ncatchup sync process.\n\n### Symptoms\n- Import next sync committee for period `1086` (essentially period\n`1087`). Light client store period = `1086`.\n- Import header in period `1087`. Light client store period = `1087`.\nThe current and next sync committee is not updated, and is now in an\noutdated state. (current sync committee = `1086` and current sync\ncommittee = `1087`, where it should be current sync committee = `1087`\nand current sync committee = `None`)\n- Import next sync committee for period `1087` (essentially period\n`1088`) fails because the expected next sync committee's roots don't\nmatch.\n\n### Bug\nThe bug here is that the current and next sync committee's didn't\nhandover when an update in the next period was received.\n\n### Fix\nThere are two possible fixes here:\n1. Correctly handover sync committees when a header in the next period\nis received.\n2. Reject updates in the next period until the next sync committee\nperiod is known.\n\nWe opted for solution 2, which is more conservative and requires less\nchanges.\n\n### Polkadot-sdk versions\nThis fix should be backported in polkadot-sdk versions 1.7 and up.\n\nSnowfork PR: https://github.com/Snowfork/polkadot-sdk/pull/145\n\n---------\n\nCo-authored-by: Vincent Geddes <117534+vgeddes@users.noreply.github.com>",
          "timestamp": "2024-05-16T13:54:28Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/943eb46ed54c2fcd9fab693b86ef59ce18c0f792"
        },
        "date": 1715873180565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63540.95,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52935.7,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.0448210039900285,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.015152266050129,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.693810640819994,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jesse Chejieh",
            "username": "Doordashcon",
            "email": "jesse.chejieh@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d5fe478e4fe2d62b0800888ae77b00ff0ba28b28",
          "message": "Adds `MaxRank` Config in `pallet-core-fellowship` (#3393)\n\nresolves #3315\n\n---------\n\nCo-authored-by: doordashcon <jessechejieh@doordashcon.local>\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-16T16:22:29Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d5fe478e4fe2d62b0800888ae77b00ff0ba28b28"
        },
        "date": 1715882135216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.619999999995,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.693737322719967,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.5704612115601386,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.102180436060063,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "PG Herveou",
            "username": "pgherveou",
            "email": "pgherveou@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f86f2131fe0066cf9009cb909e843da664b3df98",
          "message": "Contracts: remove kitchensink dynamic parameters (#4489)\n\nUsing Dynamic Parameters for contracts seems like a bad idea for now.\n\nGiven that we have benchmarks for each host function (in addition to our\nextrinsics), parameter storage reads will be counted multiple times. We\nwill work on updates to the benchmarking framework to mitigate this\nissue in future iterations.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-17T05:52:19Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f86f2131fe0066cf9009cb909e843da664b3df98"
        },
        "date": 1715930376264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.079999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.8,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.0425426843700105,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.648408949679999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0101022399201094,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2c48b9ddb0a5de4499d4ed699b79eacc354f016a",
          "message": "Bridge: fixed relayer version metric value (#4492)\n\nBefore relayer crates have been moved + merged, the `MetricsParams` type\nhas been created from a `substrate-relay` crate (binary) and hence it\nhas been setting the `substrate_relay_build_info` metic value properly -\nto the binary version. Now it is created from the\n`substrate-relay-helper` crate, which has the fixed (it isn't published)\nversion `0.1.0`, so our relay provides incorrect metric value. This\n'breaks' our monitoring tools - we see that all relayers have that\nincorrect version, which is not cool.\n\nThe idea is to have a global static variable (shame on me) that is\ninitialized by the binary during initialization like we do with the\nlogger initialization already. Was considering some alternative options:\n- adding a separate argument to every relayer subcommand and propagating\nit to the `MetricsParams::new()` causes a lot of changes and introduces\neven more noise to the binary code, which is supposed to be as small as\npossible in the new design. But I could do that if team thinks it is\nbetter;\n- adding a `structopt(skip) pub relayer_version: RelayerVersion`\nargument to all subcommand params won't work, because it will be\ninitialized by default and `RelayerVersion` needs to reside in some util\ncrate (not the binary), so it'll have the wrong value again.",
          "timestamp": "2024-05-17T08:00:39Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2c48b9ddb0a5de4499d4ed699b79eacc354f016a"
        },
        "date": 1715938417392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63539.14,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.17742462257996,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.323629257230145,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.544828279240034,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ankan",
            "username": "Ank4n",
            "email": "10196091+Ank4n@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2e36f571e5c9486819b85561d12fa4001018e953",
          "message": "Allow pool to be destroyed with an extra (erroneous) consumer reference on the pool account (#4503)\n\naddresses https://github.com/paritytech/polkadot-sdk/issues/4440 (will\nclose once we have this in prod runtimes).\nrelated: https://github.com/paritytech/polkadot-sdk/issues/2037.\n\nAn extra consumer reference is preventing pools to be destroyed. When a\npool is ready to be destroyed, we\ncan safely clear the consumer references if any. Notably, I only check\nfor one extra consumer reference since that is a known bug. Anything\nmore indicates possibly another issue and we probably don't want to\nsilently absorb those errors as well.\n\nAfter this change, pools with extra consumer reference should be able to\ndestroy normally.",
          "timestamp": "2024-05-17T12:09:00Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2e36f571e5c9486819b85561d12fa4001018e953"
        },
        "date": 1715952964943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.920000000006,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.8,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.769997565739951,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.086218854210026,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0088377940700957,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "PG Herveou",
            "username": "pgherveou",
            "email": "pgherveou@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a90d324d5b3252033e00a96d9f9f4890b1cfc982",
          "message": "Contracts: Remove topics for internal events (#4510)",
          "timestamp": "2024-05-17T13:47:01Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a90d324d5b3252033e00a96d9f9f4890b1cfc982"
        },
        "date": 1715960534836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.579999999994,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.046118530730043,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.597563301780033,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9756738932400904,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jimwfs",
            "username": "jimwfs",
            "email": "wqq1479787@163.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "247358a86f874bfa109575dd086a6478dbc96eb4",
          "message": "chore: fix typos (#4515)\n\nCo-authored-by: jimwfs <169986508+jimwfs@users.noreply.github.com>",
          "timestamp": "2024-05-19T15:31:02Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/247358a86f874bfa109575dd086a6478dbc96eb4"
        },
        "date": 1716137999707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.85,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.089215772390016,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.164442324029972,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.293660103249934,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Liam Aharon",
            "username": "liamaharon",
            "email": "liam.aharon@hotmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e7b6d7dffd6459174f02598bd8b84fe4b1cb6e72",
          "message": "`remote-externalities`: `rpc_child_get_keys` to use paged scraping (#4512)\n\nReplace usage of deprecated\n`substrate_rpc_client::ChildStateApi::storage_keys` with\n`substrate_rpc_client::ChildStateApi::storage_keys_paged`.\n\nRequired for successful scraping of Aleph Zero state.",
          "timestamp": "2024-05-19T17:53:12Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e7b6d7dffd6459174f02598bd8b84fe4b1cb6e72"
        },
        "date": 1716146707452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.42,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.0756305048901917,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.22913772824999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.808103166350001,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polka.dom",
            "username": "PolkadotDom",
            "email": "polkadotdom@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "313fe0f9a277f27a4228634f0fb15a1c3fa21271",
          "message": "Remove usage of the pallet::getter macro from pallet-fast-unstake (#4514)\n\nAs per #3326, removes pallet::getter macro usage from\npallet-fast-unstake. The syntax `StorageItem::<T, I>::get()` should be\nused instead.\n\ncc @muraca\n\n---------\n\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>",
          "timestamp": "2024-05-20T06:36:48Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/313fe0f9a277f27a4228634f0fb15a1c3fa21271"
        },
        "date": 1716192326386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.829999999994,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.547934758850094,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4239887044501196,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.857821811039999,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alin Dima",
            "username": "alindima",
            "email": "alin@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "278486f9bf7db06c174203f098eec2f91839757a",
          "message": "Remove the prospective-parachains subsystem from collators (#4471)\n\nImplements https://github.com/paritytech/polkadot-sdk/issues/4429\n\nCollators only need to maintain the implicit view for the paraid they\nare collating on.\nIn this case, bypass prospective-parachains entirely. It's still useful\nto use the GetMinimumRelayParents message from prospective-parachains\nfor validators, because the data is already present there.\n\nThis enables us to entirely remove the subsystem from collators, which\nconsumed resources needlessly\n\nAims to resolve https://github.com/paritytech/polkadot-sdk/issues/4167 \n\nTODO:\n- [x] fix unit tests",
          "timestamp": "2024-05-21T08:14:42Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/278486f9bf7db06c174203f098eec2f91839757a"
        },
        "date": 1716284635180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63540.590000000004,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3545758959401804,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.299857497449985,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.616803574690006,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d54feeb101b3779422323224c8e1ac43d3a1fafa",
          "message": "Fixed RPC subscriptions leak when subscription stream is finished (#4533)\n\ncloses https://github.com/paritytech/parity-bridges-common/issues/3000\n\nRecently we've changed our bridge configuration for Rococo <> Westend\nand our new relayer has started to submit transactions every ~ `30`\nseconds. Eventually, it switches itself into limbo state, where it can't\nsubmit more transactions - all `author_submitAndWatchExtrinsic` calls\nare failing with the following error: `ERROR bridge Failed to send\ntransaction to BridgeHubRococo node: Call(ErrorObject { code:\nServerError(-32006), message: \"Too many subscriptions on the\nconnection\", data: Some(RawValue(\"Exceeded max limit of 1024\")) })`.\n\nSome links for those who want to explore:\n- server side (node) has a strict limit on a number of active\nsubscriptions. It fails to open a new subscription if this limit is hit:\nhttps://github.com/paritytech/jsonrpsee/blob/a4533966b997e83632509ad97eea010fc7c3efc0/server/src/middleware/rpc/layer/rpc_service.rs#L122-L132.\nThe limit is set to `1024` by default;\n- internally this limit is a semaphore with `limit` permits:\nhttps://github.com/paritytech/jsonrpsee/blob/a4533966b997e83632509ad97eea010fc7c3efc0/core/src/server/subscription.rs#L461-L485;\n- semaphore permit is acquired in the first link;\n- the permit is \"returned\" when the `SubscriptionSink` is dropped:\nhttps://github.com/paritytech/jsonrpsee/blob/a4533966b997e83632509ad97eea010fc7c3efc0/core/src/server/subscription.rs#L310-L325;\n- the `SubscriptionSink` is dropped when [this `polkadot-sdk`\nfunction](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L58-L94)\nreturns. In other words - when the connection is closed, the stream is\nfinished or internal subscription buffer limit is hit;\n- the subscription has the internal buffer, so sending an item contains\nof two steps: [reading an item from the underlying\nstream](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L125-L141)\nand [sending it over the\nconnection](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L111-L116);\n- when the underlying stream is finished, the `inner_pipe_from_stream`\nwants to ensure that all items are sent to the subscriber. So it: [waits\nuntil the current send operation\ncompletes](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L146-L148)\nand then [send all remaining items from the internal\nbuffer](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L150-L155).\nOnce it is done, the function returns, the `SubscriptionSink` is\ndropped, semaphore permit is dropped and we are ready to accept new\nsubscriptions;\n- unfortunately, the code just calls the `pending_fut.await.is_err()` to\nensure that [the current send operation\ncompletes](https://github.com/paritytech/polkadot-sdk/blob/278486f9bf7db06c174203f098eec2f91839757a/substrate/client/rpc/src/utils.rs#L146-L148).\nBut if there are no current send operation (which is normal), then the\n`pending_fut` is set to terminated future and the `await` never\ncompletes. Hence, no return from the function, no drop of\n`SubscriptionSink`, no drop of semaphore permit, no new subscriptions\nallowed (once number of susbcriptions hits the limit.\n\nI've illustrated the issue with small test - you may ensure that if e.g.\nthe stream is initially empty, the\n`subscription_is_dropped_when_stream_is_empty` will hang because\n`pipe_from_stream` never exits.",
          "timestamp": "2024-05-21T10:41:49Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d54feeb101b3779422323224c8e1ac43d3a1fafa"
        },
        "date": 1716294903886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63553.780000000006,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.8,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 11.071536160509979,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.693405060809855,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.926619192420109,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Svyatoslav Nikolsky",
            "username": "svyatonik",
            "email": "svyatonik@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e0e1f2d6278885d1ffebe3263315089e48572a26",
          "message": "Bridge: added force_set_pallet_state call to pallet-bridge-grandpa (#4465)\n\ncloses https://github.com/paritytech/parity-bridges-common/issues/2963\n\nSee issue above for rationale\nI've been thinking about adding similar calls to other pallets, but:\n- for parachains pallet I haven't been able to think of a case when we\nwill need that given how long referendum takes. I.e. if storage proof\nformat changes and we want to unstuck the bridge, it'll take a large a\nfew weeks to sync a single parachain header, then another weeks for\nanother and etc.\n- for messages pallet I've made the similar call initially, but it just\nchanges a storage key (`OutboundLanes` and/or `InboundLanes`), so\nthere's no any logic here and it may be simply done using\n`system.set_storage`.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-21T13:46:06Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e0e1f2d6278885d1ffebe3263315089e48572a26"
        },
        "date": 1716306175823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.52999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.928453114420087,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.995840572450031,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.537354433450137,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dmitry Markin",
            "username": "dmitry-markin",
            "email": "dmitry@markin.tech"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d05786ffb5523c334f10d16870c2e73674661a52",
          "message": "Replace `Multiaddr` & related types with substrate-specific types (#4198)\n\nThis PR introduces custom types / substrate wrappers for `Multiaddr`,\n`multiaddr::Protocol`, `Multihash`, `ed25519::*` and supplementary types\nlike errors and iterators.\n\nThis is needed to unblock `libp2p` upgrade PR\nhttps://github.com/paritytech/polkadot-sdk/pull/1631 after\nhttps://github.com/paritytech/polkadot-sdk/pull/2944 was merged.\n`libp2p` and `litep2p` currently depend on different versions of\n`multiaddr` crate, and introduction of this \"common ground\" types is\nneeded to support independent version upgrades of `multiaddr` and\ndependent crates in `libp2p` & `litep2p`.\n\nWhile being just convenient to not tie versions of `libp2p` & `litep2p`\ndependencies together, it's currently not even possible to keep `libp2p`\n& `litep2p` dependencies updated to the same versions as `multiaddr` in\n`libp2p` depends on `libp2p-identity` that we can't include as a\ndependency of `litep2p`, which has it's own `PeerId` type. In the\nfuture, to keep things updated on `litep2p` side, we will likely need to\nfork `multiaddr` and make it use `litep2p` `PeerId` as a payload of\n`/p2p/...` protocol.\n\nWith these changes, common code in substrate uses these custom types,\nand `litep2p` & `libp2p` backends use corresponding libraries types.",
          "timestamp": "2024-05-21T16:10:10Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d05786ffb5523c334f10d16870c2e73674661a52"
        },
        "date": 1716313867064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.22000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.90000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1532320208801203,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.245917500669933,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.114284166720072,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Javier Viola",
            "username": "pepoviola",
            "email": "363911+pepoviola@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ec46106c33f2220d16a9dc7ad604d564d42ee009",
          "message": "chore: bump zombienet version (#4535)\n\nThis version includes the latest release of pjs/api\n(https://github.com/polkadot-js/api/releases/tag/v11.1.1).\nThx!",
          "timestamp": "2024-05-21T21:33:18Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ec46106c33f2220d16a9dc7ad604d564d42ee009"
        },
        "date": 1716332496659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.240000000005,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.637186603939912,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.290151388159984,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.380804310180065,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "joe petrowski",
            "username": "joepetrowski",
            "email": "25483142+joepetrowski@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c7cb1f25d1f8bb1a922d466e39ee935f5f027266",
          "message": "Add Extra Check in Primary Username Setter (#4534)",
          "timestamp": "2024-05-22T07:21:12Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c7cb1f25d1f8bb1a922d466e39ee935f5f027266"
        },
        "date": 1716368108343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63537.97000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.8140629319002803,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.88439057956005,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.111667285029984,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b06306c42c969eaa0b828413dd03dc3b7a844976",
          "message": "[Backport] Version bumps and prdocs reordering from 1.12.0 (#4538)\n\nThis PR backports version bumps and reorganisation of the prdoc files\nfrom the `1.12.0` release branch back to `master`",
          "timestamp": "2024-05-22T11:29:44Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b06306c42c969eaa0b828413dd03dc3b7a844976"
        },
        "date": 1716378862093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.06,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.9311402595700615,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.582094827230055,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.942705505540021,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Riko",
            "username": "fasteater",
            "email": "49999458+fasteater@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ad54bc36c1b2ce9517d023f2df9d6bdec9ca64e1",
          "message": "fixed link (#4539)",
          "timestamp": "2024-05-22T11:55:14Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ad54bc36c1b2ce9517d023f2df9d6bdec9ca64e1"
        },
        "date": 1716384313369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.18000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.59999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.094307171400074,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.1784341272500045,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.616803602759903,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ankan",
            "username": "Ank4n",
            "email": "10196091+Ank4n@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8949856d840c7f97c0c0c58a3786ccce5519a8fe",
          "message": "Refactor Nomination Pool to support multiple staking strategies (#3905)\n\nThird and final PR in the set, closes\nhttps://github.com/paritytech/polkadot-sdk/issues/454.\n\nOriginal PR: https://github.com/paritytech/polkadot-sdk/pull/2680\n\n## Precursors:\n- https://github.com/paritytech/polkadot-sdk/pull/3889.\n- https://github.com/paritytech/polkadot-sdk/pull/3904.\n\n## Follow up issues/improvements\n- https://github.com/paritytech/polkadot-sdk/issues/4404\n\nOverall changes are documented here (lot more visual 😍):\nhttps://hackmd.io/@ak0n/454-np-governance\n\n## Summary of various roles 🤯\n### Pallet Staking\n**Nominator**: An account that directly stakes on `pallet-staking` and\nnominates a set of validators.\n**Stakers**: Common term for nominators and validators.\nVirtual Stakers: Same as stakers, but they are keyless accounts and\ntheir locks are managed by a pallet external to `pallet-staking`.\n\n### Pallet Delegated Staking\n**Agent**: An account that receives delegation from other accounts\n(delegators) and stakes on their behalf. They are also Virtual Stakers\nin `pallet-staking` where `pallet-delegated-staking` manages its locks.\n**Delegator**: An account that delegates some funds to an agent.\n\n### Pallet Nomination Pools\n**Pool account**: Keyless account of a pool where funds are pooled.\nMembers pledge their funds towards the pools. These are going to become\n`Agent` accounts in `pallet-delegated-staking`.\n**Pool Members**: They are individual members of the pool who\ncontributed funds to it. They are also `Delegator` in\n`pallet-delegated-staking`.\n\n## Changes\n### Multiple Stake strategies\n\n**TransferStake**: The current nomination pool logic can be considered a\nstaking strategy where delegators transfer funds to pool and stake. In\nthis scenario, funds are locked in pool account, and users lose the\ncontrol of their funds.\n\n**DelegateStake**: With this PR, we introduce a new staking strategy\nwhere individual delegators delegate fund to pool. `Delegate` implies\nfunds are locked in delegator account itself. Important thing to note\nis, pool does not have funds of its own, but it has authorization from\nits members to use these funds for staking.\n\nWe extract out all the interaction of pool with staking interface into a\nnew trait `StakeStrategy`. This is the logic that varies between the\nabove two staking strategies. We use the trait `StakeStrategy` to\nimplement above two strategies: `TransferStake` and `DelegateStake`.\n\n### NominationPool\nConsumes an implementation of `StakeStrategy` instead of\n`StakingInterface`. I have renamed it from `Staking` to `StakeAdapter`\nto clarify the difference from the earlier used trait.\n\nTo enable delegation based staking in pool, Nomination pool can be\nconfigured as:\n```\ntype StakeAdapter = pallet_nomination_pools::adapter::DelegateStake<Self, DelegatedStaking>;\n```\n\nNote that with the following configuration, the changes in the PR are\nno-op.\n```\ntype StakeAdapter = pallet_nomination_pools::adapter::TransferStake<Self, Staking>;\n```\n\n## Deployment roadmap\nPlan to enable this only in Westend. In production runtimes, we can keep\npool to use `TransferStake` which will be no functional change.\n\nOnce we have a full audit, we can enable this in Kusama followed by\nPolkadot.\n\n## TODO\n- [x] Runtime level (Westend) migration for existing nomination pools.\n- [x] Permissionless call/ pallet::tasks for claiming delegator funds.\n- [x] Add/update benches.\n- [x] Migration tests.\n- [x] Storage flag to mark `DelegateStake` migration and integrity\nchecks to not allow `TransferStake` for migrated runtimes.\n\n---------\n\nSigned-off-by: Matteo Muraca <mmuraca247@gmail.com>\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>\nSigned-off-by: Andrei Sandu <andrei-mihail@parity.io>\nSigned-off-by: Adrian Catangiu <adrian@parity.io>\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nSigned-off-by: divdeploy <chenguangxue@outlook.com>\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: hongkuang <liurenhong@outlook.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: gemini132 <164285545+gemini132@users.noreply.github.com>\nCo-authored-by: Matteo Muraca <56828990+muraca@users.noreply.github.com>\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>\nCo-authored-by: Alexandru Gheorghe <49718502+alexggh@users.noreply.github.com>\nCo-authored-by: Alessandro Siniscalchi <asiniscalchi@gmail.com>\nCo-authored-by: Andrei Sandu <54316454+sandreim@users.noreply.github.com>\nCo-authored-by: Ross Bulat <ross@parity.io>\nCo-authored-by: Serban Iorga <serban@parity.io>\nCo-authored-by: s0me0ne-unkn0wn <48632512+s0me0ne-unkn0wn@users.noreply.github.com>\nCo-authored-by: Sam Johnson <sam@durosoft.com>\nCo-authored-by: Adrian Catangiu <adrian@parity.io>\nCo-authored-by: Javier Viola <363911+pepoviola@users.noreply.github.com>\nCo-authored-by: Alexandru Vasile <60601340+lexnv@users.noreply.github.com>\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\nCo-authored-by: Dastan <88332432+dastansam@users.noreply.github.com>\nCo-authored-by: Clara van Staden <claravanstaden64@gmail.com>\nCo-authored-by: Ron <yrong1997@gmail.com>\nCo-authored-by: Vincent Geddes <vincent@snowfork.com>\nCo-authored-by: Svyatoslav Nikolsky <svyatonik@gmail.com>\nCo-authored-by: Michal Kucharczyk <1728078+michalkucharczyk@users.noreply.github.com>\nCo-authored-by: Dino Pačandi <3002868+Dinonard@users.noreply.github.com>\nCo-authored-by: Andrei Eres <eresav@me.com>\nCo-authored-by: Alin Dima <alin@parity.io>\nCo-authored-by: Andrei Sandu <andrei-mihail@parity.io>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Bastian Köcher <info@kchr.de>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>\nCo-authored-by: gupnik <nikhilgupta.iitk@gmail.com>\nCo-authored-by: Vladimir Istyufeev <vladimir@parity.io>\nCo-authored-by: Lulu <morgan@parity.io>\nCo-authored-by: Juan Girini <juangirini@gmail.com>\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>\nCo-authored-by: Dónal Murray <donal.murray@parity.io>\nCo-authored-by: Shawn Tabrizi <shawntabrizi@gmail.com>\nCo-authored-by: Kutsal Kaan Bilgin <kutsalbilgin@gmail.com>\nCo-authored-by: Ermal Kaleci <ermalkaleci@gmail.com>\nCo-authored-by: ordian <write@reusable.software>\nCo-authored-by: divdeploy <166095818+divdeploy@users.noreply.github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Sergej Sakac <73715684+Szegoo@users.noreply.github.com>\nCo-authored-by: Squirrel <gilescope@gmail.com>\nCo-authored-by: HongKuang <166261675+HongKuang@users.noreply.github.com>\nCo-authored-by: Tsvetomir Dimitrov <tsvetomir@parity.io>\nCo-authored-by: Egor_P <egor@parity.io>\nCo-authored-by: Aaro Altonen <48052676+altonen@users.noreply.github.com>\nCo-authored-by: Dmitry Markin <dmitry@markin.tech>\nCo-authored-by: Alexandru Vasile <alexandru.vasile@parity.io>\nCo-authored-by: Léa Narzis <78718413+lean-apple@users.noreply.github.com>\nCo-authored-by: Gonçalo Pestana <g6pestana@gmail.com>\nCo-authored-by: georgepisaltu <52418509+georgepisaltu@users.noreply.github.com>\nCo-authored-by: command-bot <>\nCo-authored-by: PG Herveou <pgherveou@gmail.com>\nCo-authored-by: jimwfs <wqq1479787@163.com>\nCo-authored-by: jimwfs <169986508+jimwfs@users.noreply.github.com>\nCo-authored-by: polka.dom <polkadotdom@gmail.com>",
          "timestamp": "2024-05-22T19:26:33Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/8949856d840c7f97c0c0c58a3786ccce5519a8fe"
        },
        "date": 1716412020021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63549.580000000016,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.7,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.479979130130054,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.108544063310095,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.861040778459952,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fd161917108a14e791c1444ea1c767e9f6134bdf",
          "message": "Fix README.md Logo URL (#4546)\n\nThis one also works and it is easier.",
          "timestamp": "2024-05-23T08:03:14Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/fd161917108a14e791c1444ea1c767e9f6134bdf"
        },
        "date": 1716456929999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63550.630000000005,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.063409805489913,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.555947471349903,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3171491323201314,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "PG Herveou",
            "username": "pgherveou",
            "email": "pgherveou@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "493ba5e2a144140d5018647b25744b0aac854ffd",
          "message": "Contracts: Rework host fn benchmarks (#4233)\n\nfix https://github.com/paritytech/polkadot-sdk/issues/4163\n\nThis PR does the following:\nUpdate to pallet-contracts-proc-macro: \n- Parse #[cfg] so we can add a dummy noop host function for benchmark.\n- Generate BenchEnv::<host_fn> so we can call host functions directly in\nthe benchmark.\n- Add the weight of the noop host function before calling the host\nfunction itself\n\nUpdate benchmarks:\n- Update all host function benchmark, a host function benchmark now\nsimply call the host function, instead of invoking the function n times\nfrom within a contract.\n- Refactor RuntimeCosts & Schedule, for most host functions, we can now\nuse the generated weight function directly instead of computing the diff\nwith the cost! macro\n\n```rust\n// Before\n#[benchmark(pov_mode = Measured)]\nfn seal_input(r: Linear<0, API_BENCHMARK_RUNS>) {\n    let code = WasmModule::<T>::from(ModuleDefinition {\n        memory: Some(ImportedMemory::max::<T>()),\n        imported_functions: vec![ImportedFunction {\n            module: \"seal0\",\n            name: \"seal_input\",\n            params: vec![ValueType::I32, ValueType::I32],\n            return_type: None,\n        }],\n        data_segments: vec![DataSegment { offset: 0, value: 0u32.to_le_bytes().to_vec() }],\n        call_body: Some(body::repeated(\n            r,\n            &[\n                Instruction::I32Const(4), // ptr where to store output\n                Instruction::I32Const(0), // ptr to length\n                Instruction::Call(0),\n            ],\n        )),\n        ..Default::default()\n    });\n\n    call_builder!(func, code);\n\n    let res;\n    #[block]\n    {\n        res = func.call();\n    }\n    assert_eq!(res.did_revert(), false);\n}\n```\n\n```rust\n// After\nfn seal_input(n: Linear<0, { code::max_pages::<T>() * 64 * 1024 - 4 }>) {\n    let mut setup = CallSetup::<T>::default();\n    let (mut ext, _) = setup.ext();\n    let mut runtime = crate::wasm::Runtime::new(&mut ext, vec![42u8; n as usize]);\n    let mut memory = memory!(n.to_le_bytes(), vec![0u8; n as usize],);\n    let result;\n    #[block]\n    {\n        result = BenchEnv::seal0_input(&mut runtime, &mut memory, 4, 0)\n    }\n    assert_ok!(result);\n    assert_eq!(&memory[4..], &vec![42u8; n as usize]);\n}\n``` \n\n[Weights\ncompare](https://weights.tasty.limo/compare?unit=weight&ignore_errors=true&threshold=10&method=asymptotic&repo=polkadot-sdk&old=master&new=pg%2Frework-host-benchs&path_pattern=substrate%2Fframe%2Fcontracts%2Fsrc%2Fweights.rs%2Cpolkadot%2Fruntime%2F*%2Fsrc%2Fweights%2F**%2F*.rs%2Cpolkadot%2Fbridges%2Fmodules%2F*%2Fsrc%2Fweights.rs%2Ccumulus%2F**%2Fweights%2F*.rs%2Ccumulus%2F**%2Fweights%2Fxcm%2F*.rs%2Ccumulus%2F**%2Fsrc%2Fweights.rs)\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2024-05-23T11:17:09Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/493ba5e2a144140d5018647b25744b0aac854ffd"
        },
        "date": 1716464310909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.14999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.917019355370109,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.907696877509972,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.37850907923002,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Serban Iorga",
            "username": "serban300",
            "email": "serban@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "03bbc17e92d1d04b6b4b9aef7669c403d08bc28c",
          "message": "Define `OpaqueValue` (#4550)\n\nDefine `OpaqueValue` and use it instead of\n`grandpa::OpaqueKeyOwnershipProof` and `beefy:OpaqueKeyOwnershipProof`\n\nRelated to\nhttps://github.com/paritytech/polkadot-sdk/pull/4522#discussion_r1608278279\n\nWe'll need to introduce a runtime API method that calls the\n`report_fork_voting_unsigned()` extrinsic. This method will need to\nreceive the ancestry proof as a paramater. I'm still not sure, but there\nis a chance that we'll send the ancestry proof as an opaque type.\n\nSo let's introduce this `OpaqueValue`. We can already use it to replace\n`grandpa::OpaqueKeyOwnershipProof` and `beefy:OpaqueKeyOwnershipProof`\nand maybe we'll need it for the ancestry proof as well.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-23T12:38:31Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/03bbc17e92d1d04b6b4b9aef7669c403d08bc28c"
        },
        "date": 1716473233605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.27,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.787258560450051,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.407313604100002,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.795471634730151,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre",
            "email": "franciscoaguirreperez@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48d4f654612a67787426de426e462bd40f6f70f6",
          "message": "Mention new XCM docs in sdk docs (#4558)\n\nThe XCM docs were pretty much moved to the new rust docs format in\nhttps://github.com/paritytech/polkadot-sdk/pull/2633, with the addition\nof the XCM cookbook, which I plan to add more examples to shortly.\n\nThese docs were not mentioned in the polkadot-sdk rust docs, this PR\njust mentions them there, so people can actually find them.",
          "timestamp": "2024-05-23T21:04:41Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/48d4f654612a67787426de426e462bd40f6f70f6"
        },
        "date": 1716503335473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63551.17999999998,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.59999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.8321321595801514,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.853666724259945,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.400572957699922,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Serban Iorga",
            "username": "serban300",
            "email": "serban@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "700d5910580fdc17a0737925d4fe2472eb265f82",
          "message": "Use polkadot-ckb-merkle-mountain-range dependency (#4562)\n\nWe need to use the `polkadot-ckb-merkle-mountain-range` dependency\npublished on `crates.io` in order to unblock the release of the\n`sp-mmr-primitives` crate",
          "timestamp": "2024-05-24T07:43:02Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/700d5910580fdc17a0737925d4fe2472eb265f82"
        },
        "date": 1716542019623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.2,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.230676135610021,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.955009803420065,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0941640435500823,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ef144b1a88c6478e5d6dac945ffe12053f05d96a",
          "message": "Attempt to avoid specifying `BlockHashCount` for different `mocking::{MockBlock, MockBlockU32, MockBlockU128}` (#4543)\n\nWhile doing some migration/rebase I came in to the situation, where I\nneeded to change `mocking::MockBlock` to `mocking::MockBlockU32`:\n```\n#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]\nimpl frame_system::Config for TestRuntime {\n\ttype Block = frame_system::mocking::MockBlockU32<TestRuntime>;\n\ttype AccountData = pallet_balances::AccountData<ThisChainBalance>;\n}\n```\nBut actual `TestDefaultConfig` for `frame_system` is using `ConstU64`\nfor `type BlockHashCount = frame_support::traits::ConstU64<10>;`\n[here](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/system/src/lib.rs#L303).\nBecause of this, it force me to specify and add override for `type\nBlockHashCount = ConstU32<10>`.\n\nThis PR tries to fix this with `TestBlockHashCount` implementation for\n`TestDefaultConfig` which supports `u32`, `u64` and `u128` as a\n`BlockNumber`.\n\n### How to simulate error\nJust by removing `type BlockHashCount = ConstU32<250>;`\n[here](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/multisig/src/tests.rs#L44)\n```\n:~/parity/olkadot-sdk$ cargo test -p pallet-multisig\n   Compiling pallet-multisig v28.0.0 (/home/bparity/parity/aaa/polkadot-sdk/substrate/frame/multisig)\nerror[E0277]: the trait bound `ConstU64<10>: frame_support::traits::Get<u32>` is not satisfied\n   --> substrate/frame/multisig/src/tests.rs:41:1\n    |\n41  | #[derive_impl(frame_system::config_preludes::TestDefaultConfig)]\n    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `frame_support::traits::Get<u32>` is not implemented for `ConstU64<10>`\n    |\n    = help: the following other types implement trait `frame_support::traits::Get<T>`:\n              <ConstU64<T> as frame_support::traits::Get<u64>>\n              <ConstU64<T> as frame_support::traits::Get<std::option::Option<u64>>>\nnote: required by a bound in `frame_system::Config::BlockHashCount`\n   --> /home/bparity/parity/aaa/polkadot-sdk/substrate/frame/system/src/lib.rs:535:24\n    |\n535 |         type BlockHashCount: Get<BlockNumberFor<Self>>;\n    |                              ^^^^^^^^^^^^^^^^^^^^^^^^^ required by this bound in `Config::BlockHashCount`\n    = note: this error originates in the attribute macro `derive_impl` which comes from the expansion of the macro `frame_support::macro_magic::forward_tokens_verbatim` (in Nightly builds, run with -Z macro-backtrace for more info)\n\nFor more information about this error, try `rustc --explain E0277`.\nerror: could not compile `pallet-multisig` (lib test) due to 1 previous error \n```\n\n\n\n\n## For reviewers:\n\n(If there is a better solution, please let me know!)\n\nThe first commit contains actual attempt to fix the problem:\nhttps://github.com/paritytech/polkadot-sdk/commit/3c5499e539f2218503fbd6ce9be085b03c31ee13.\nThe second commit is just removal of `BlockHashCount` from all other\nplaces where not needed by default.\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/1657\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-24T10:01:10Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ef144b1a88c6478e5d6dac945ffe12053f05d96a"
        },
        "date": 1716551086315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.719999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.40000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.614414799830021,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.317904105969944,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.325840641310068,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "49bd6a6e94b8b6f4ef3497e930cfb493b8ec0fd0",
          "message": "Remove litep2p git dependency (#4560)\n\n@serban300 could you please do the same for the MMR crate? Am not sure\nwhat commit was released since there are no release tags in the repo.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-05-24T11:55:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/49bd6a6e94b8b6f4ef3497e930cfb493b8ec0fd0"
        },
        "date": 1716557186936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63540.68000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.40000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.053455031159954,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.394019798470196,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.591572782869983,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Sandu",
            "username": "sandreim",
            "email": "54316454+sandreim@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f469fbfb0a44c4e223488b07ec641ca02b2fb8f1",
          "message": "availability-recovery: bump chunk fetch threshold to 1MB for Polkadot and 4MB for Kusama + testnets (#4399)\n\nDoing this change ensures that we minimize the CPU usage we spend in\nreed-solomon by only doing the re-encoding into chunks if PoV size is\nless than 4MB (which means all PoVs right now)\n \nBased on susbystem benchmark results we concluded that it is safe to\nbump this number higher. At worst case scenario the network pressure for\na backing group of 5 is around 25% of the network bandwidth in hw specs.\n\nAssuming 6s block times (max_candidate_depth 3) and needed_approvals 30\nthe amount of bandwidth usage of a backing group used would hover above\n`30 * 4 * 3 = 360MB` per relay chain block. Given a backing group of 5\nthat gives 72MB per block per validator -> 12 MB/s.\n\n<details>\n<summary>Reality check on Kusama PoV sizes (click for chart)</summary>\n<br>\n<img width=\"697\" alt=\"Screenshot 2024-05-07 at 14 30 38\"\nsrc=\"https://github.com/paritytech/polkadot-sdk/assets/54316454/bfed32d4-8623-48b0-9ec0-8b95dd2a9d8c\">\n</details>\n\n---------\n\nSigned-off-by: Andrei Sandu <andrei-mihail@parity.io>",
          "timestamp": "2024-05-24T14:14:44Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f469fbfb0a44c4e223488b07ec641ca02b2fb8f1"
        },
        "date": 1716562383773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.30000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1797398424300054,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.393357452410045,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.129949339759937,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e192b764971f99975e876380f9ebbf2c08f0c17d",
          "message": "Avoid using `xcm::v4` and use latest instead for AssetHub benchmarks (#4567)",
          "timestamp": "2024-05-24T20:59:12Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e192b764971f99975e876380f9ebbf2c08f0c17d"
        },
        "date": 1716589582995,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.15,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.62145459936006,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.994705851280081,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.056886001400048,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre",
            "email": "franciscoaguirreperez@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9201f9abbe0b63abbeabc1f6e6799cca030c8c46",
          "message": "Deprecate XCMv2 (#4131)\n\nMarked XCMv2 as deprecated now that we have XCMv4.\nIt will be removed sometime around June 2024.\n\n---------\n\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2024-05-27T06:12:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9201f9abbe0b63abbeabc1f6e6799cca030c8c46"
        },
        "date": 1716795776808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.04,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52945.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.849268507330008,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.157376561160122,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.363124233650007,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Przemek Rzad",
            "username": "rzadp",
            "email": "przemek@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e0edb062e55e80cf21490fb140e4bbc3b7d7c89d",
          "message": "Add release version to commits and branch names of template synchronization job (#4353)\n\nJust to have some information what is the release number that was used\nto push a particular commit or PR in the templates repositories.",
          "timestamp": "2024-05-27T08:42:51Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e0edb062e55e80cf21490fb140e4bbc3b7d7c89d"
        },
        "date": 1716801361179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.52999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.956743409090064,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.377071841110026,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2348093536701086,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sebastian Kunert",
            "username": "skunert",
            "email": "skunert49@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2352982717edc8976b55525274b1f9c9aa01aadd",
          "message": "Make markdown lint CI job pass (#4593)\n\nWas constantly failing, so here a fix.",
          "timestamp": "2024-05-27T09:39:56Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2352982717edc8976b55525274b1f9c9aa01aadd"
        },
        "date": 1716810432720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.76000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.9301640552101595,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.0080454660000076,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.637758977209918,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Vasile",
            "username": "lexnv",
            "email": "60601340+lexnv@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ce3e9b7c7099034e8ee30e4c7c912e3ed068bf8a",
          "message": "network: Update litep2p to v0.5.0 (#4570)\n\n## [0.5.0] - 2023-05-24\n\nThis is a small patch release that makes the `FindNode` command a bit\nmore robst:\n\n- The `FindNode` command now retains the K (replication factor) best\nresults.\n- The `FindNode` command has been updated to handle errors and\nunexpected states without panicking.\n\n### Changed\n\n- kad: Refactor FindNode query, keep K best results and add tests\n([#114](https://github.com/paritytech/litep2p/pull/114))\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2024-05-27T13:55:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ce3e9b7c7099034e8ee30e4c7c912e3ed068bf8a"
        },
        "date": 1716824135577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.64,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.924206964580189,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.456111503100015,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 11.120952072129963,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sebastian Kunert",
            "username": "skunert",
            "email": "skunert49@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "70dd67a5d129745da6a05bce958824504a4c9d83",
          "message": "check-weight: Disable total pov size check for mandatory extrinsics (#4571)\n\nSo in some pallets we like\n[here](https://github.com/paritytech/polkadot-sdk/blob/5dc522d02fe0b53be1517f8b8979176e489a388b/substrate/frame/session/src/lib.rs#L556)\nwe use `max_block` as return value for `on_initialize` (ideally we would\nnot).\n\nThis means the block is already full when we try to apply the inherents,\nwhich lead to the error seen in #4559 because we are unable to include\nthe required inherents. This was not erroring before #4326 because we\nwere running into this branch:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/e4b89cc50c8d17868d6c8b122f2e156d678c7525/substrate/frame/system/src/extensions/check_weight.rs#L222-L224\n\nThe inherents are of `DispatchClass::Mandatory` and therefore have a\n`reserved` value of `None` in all runtimes I have inspected. So they\nwill always pass the normal check.\n\nSo in this PR I adjust the `check_combined_proof_size` to return an\nearly `Ok(())` for mandatory extrinsics.\n\nIf we agree on this PR I will backport it to the 1.12.0 branch.\n\ncloses #4559\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-05-27T17:12:46Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/70dd67a5d129745da6a05bce958824504a4c9d83"
        },
        "date": 1716835364126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.06000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.101972947849985,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.799852743510039,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.080497561800088,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Eres",
            "username": "AndreiEres",
            "email": "eresav@me.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a7097681b76bdaef21dcde9aec8c33205f480e44",
          "message": "[subsystem-benchmarks] Add statement-distribution benchmarks (#3863)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/3748\n\nAdds a subsystem benchmark for statements-distribution subsystem.\n\nResults in CI (reference hw):\n```\n$ cargo bench -p polkadot-statement-distribution --bench statement-distribution-regression-bench --features subsystem-benchmarks\n\n[Sent to peers] standart_deviation 0.07%\n[Received from peers] standart_deviation 0.00%\n[statement-distribution] standart_deviation 0.97%\n[test-environment] standart_deviation 1.03%\n\nNetwork usage, KiB                     total   per block\nReceived from peers                1088.0000    108.8000\nSent to peers                      1238.1800    123.8180\n\nCPU usage, seconds                     total   per block\nstatement-distribution                0.3897      0.0390\ntest-environment                      0.4715      0.0472\n```",
          "timestamp": "2024-05-27T19:23:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a7097681b76bdaef21dcde9aec8c33205f480e44"
        },
        "date": 1716843498474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.619999999995,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.90519452377008,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.98492819191019,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.199175188529946,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk",
            "email": "1728078+michalkucharczyk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2d3a6932de35fc53da4e4b6bc195b1cc69550300",
          "message": "`sc-chain-spec`: deprecated code removed (#4410)\n\nThis PR removes deprecated code:\n- The `RuntimeGenesisConfig` generic type parameter in\n`GenericChainSpec` struct.\n- `ChainSpec::from_genesis` method allowing to create chain-spec using\nclosure providing runtime genesis struct\n- `GenesisSource::Factory` variant together with no longer needed\n`GenesisSource`'s generic parameter `G` (which was intended to be a\nruntime genesis struct).\n\n\nhttps://github.com/paritytech/polkadot-sdk/blob/17b56fae2d976a3df87f34076875de8c26da0355/substrate/client/chain-spec/src/chain_spec.rs#L559-L563",
          "timestamp": "2024-05-27T21:29:50Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2d3a6932de35fc53da4e4b6bc195b1cc69550300"
        },
        "date": 1716850837344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63551.55,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.214670852160019,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.788088199590057,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.287202355520223,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alin Dima",
            "username": "alindima",
            "email": "alin@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "523e62560eb5d9a36ea75851f2fb15b9d7993f01",
          "message": "Add availability-recovery from systematic chunks (#1644)\n\n**Don't look at the commit history, it's confusing, as this branch is\nbased on another branch that was merged**\n\nFixes #598 \nAlso implements [RFC\n#47](https://github.com/polkadot-fellows/RFCs/pull/47)\n\n## Description\n\n- Availability-recovery now first attempts to request the systematic\nchunks for large POVs (which are the first ~n/3 chunks, which can\nrecover the full data without doing the costly reed-solomon decoding\nprocess). This has a fallback of recovering from all chunks, if for some\nreason the process fails. Additionally, backers are also used as a\nbackup for requesting the systematic chunks if the assigned validator is\nnot offering the chunk (each backer is only used for one systematic\nchunk, to not overload them).\n- Quite obviously, recovering from systematic chunks is much faster than\nrecovering from regular chunks (4000% faster as measured on my apple M2\nPro).\n- Introduces a `ValidatorIndex` -> `ChunkIndex` mapping which is\ndifferent for every core, in order to avoid only querying the first n/3\nvalidators over and over again in the same session. The mapping is the\none described in RFC 47.\n- The mapping is feature-gated by the [NodeFeatures runtime\nAPI](https://github.com/paritytech/polkadot-sdk/pull/2177) so that it\ncan only be enabled via a governance call once a sufficient majority of\nvalidators have upgraded their client. If the feature is not enabled,\nthe mapping will be the identity mapping and backwards-compatibility\nwill be preserved.\n- Adds a new chunk request protocol version (v2), which adds the\nChunkIndex to the response. This may or may not be checked against the\nexpected chunk index. For av-distribution and systematic recovery, this\nwill be checked, but for regular recovery, no. This is backwards\ncompatible. First, a v2 request is attempted. If that fails during\nprotocol negotiation, v1 is used.\n- Systematic recovery is only attempted during approval-voting, where we\nhave easy access to the core_index. For disputes and collator\npov_recovery, regular chunk requests are used, just as before.\n\n## Performance results\n\nSome results from subsystem-bench:\n\nwith regular chunk recovery: CPU usage per block 39.82s\nwith recovery from backers: CPU usage per block 16.03s\nwith systematic recovery: CPU usage per block 19.07s\n\nEnd-to-end results here:\nhttps://github.com/paritytech/polkadot-sdk/issues/598#issuecomment-1792007099\n\n#### TODO:\n\n- [x] [RFC #47](https://github.com/polkadot-fellows/RFCs/pull/47)\n- [x] merge https://github.com/paritytech/polkadot-sdk/pull/2177 and\nrebase on top of those changes\n- [x] merge https://github.com/paritytech/polkadot-sdk/pull/2771 and\nrebase\n- [x] add tests\n- [x] preliminary performance measure on Versi: see\nhttps://github.com/paritytech/polkadot-sdk/issues/598#issuecomment-1792007099\n- [x] Rewrite the implementer's guide documentation\n- [x] https://github.com/paritytech/polkadot-sdk/pull/3065 \n- [x] https://github.com/paritytech/zombienet/issues/1705 and fix\nzombienet tests\n- [x] security audit\n- [x] final versi test and performance measure\n\n---------\n\nSigned-off-by: alindima <alin@parity.io>\nCo-authored-by: Javier Viola <javier@parity.io>",
          "timestamp": "2024-05-28T08:15:50Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/523e62560eb5d9a36ea75851f2fb15b9d7993f01"
        },
        "date": 1716887622288,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.47000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.30752719854011,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.824472529999935,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.641507654750183,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6ed020037f4c2b6a6b542be6e5a15e86b0b7587b",
          "message": "[CI] Deny adding git deps (#4572)\n\nAdds a small CI check to match the existing Git deps agains a known-bad\nlist.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-05-28T11:23:42Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6ed020037f4c2b6a6b542be6e5a15e86b0b7587b"
        },
        "date": 1716900925347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.46,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.282869301339998,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.764633096330009,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.5715553056102465,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bolaji Ahmad",
            "username": "bolajahmad",
            "email": "56865496+bolajahmad@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "650b124fd81f4a438c212cb010cc0a730bac5c2d",
          "message": "Improve On_demand_assigner events (#4339)\n\ntitle: Improving `on_demand_assigner` emitted events\n\ndoc:\n  - audience: Rutime User\ndescription: OnDemandOrderPlaced event that is useful for indexers to\nsave data related to on demand orders. Check [discussion\nhere](https://substrate.stackexchange.com/questions/11366/ondemandassignmentprovider-ondemandorderplaced-event-was-removed/11389#11389).\n\nCloses #4254 \n\ncrates: [ 'runtime-parachain]\n\n---------\n\nCo-authored-by: Maciej <maciej.zyszkiewicz@parity.io>",
          "timestamp": "2024-05-28T14:44:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/650b124fd81f4a438c212cb010cc0a730bac5c2d"
        },
        "date": 1716912182038,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63552.659999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.7,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.714736212550081,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.368842663190083,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.894941225920233,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2b1c606a338c80c5220c502c56a4b489f6d51488",
          "message": "parachain-inherent: Make `para_id` more prominent (#4555)\n\nThis should make it more obvious that at instantiation of the\n`MockValidationDataInherentDataProvider` the `para_id` needs to be\npassed.",
          "timestamp": "2024-05-28T16:08:31Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2b1c606a338c80c5220c502c56a4b489f6d51488"
        },
        "date": 1716918905127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.68000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.721262702840079,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.20890958172,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.1903572560101097,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Przemek Rzad",
            "username": "rzadp",
            "email": "przemek@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6cf147c1bda601e811bf5813b0d46ca1c8ad9b9",
          "message": "Filter workspace dependencies in the templates (#4599)\n\nThis detaches the templates from monorepo's workspace dependencies.\n\nCurrently the templates [re-use the monorepo's\ndependencies](https://github.com/paritytech/polkadot-sdk-minimal-template/blob/bd8afe66ec566d61f36b0e3d731145741a9e9e19/Cargo.toml#L45-L58),\nmost of which are not needed.\n\nThe simplest approach is to specify versions directly and not use\nworkspace dependencies in the templates.\n\nAnother approach would be to programmatically filter dependencies that\nare actually needed - but not sure if it's worth it, given that it would\ncomplicate the synchronization job.\n\ncc @kianenigma @gupnik",
          "timestamp": "2024-05-28T17:57:43Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d6cf147c1bda601e811bf5813b0d46ca1c8ad9b9"
        },
        "date": 1716924572455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.06000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.56989565830003,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.662920402650277,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.939336311630119,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5f68c93039fce08d7f711025eddc5343b0272111",
          "message": "Moves runtime macro out of experimental flag (#4249)\n\nStep in https://github.com/paritytech/polkadot-sdk/issues/3688\n\nNow that the `runtime` macro (Construct Runtime V2) has been\nsuccessfully deployed on Westend, this PR moves it out of the\nexperimental feature flag and makes it generally available for runtime\ndevs.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>",
          "timestamp": "2024-05-29T03:41:47Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5f68c93039fce08d7f711025eddc5343b0272111"
        },
        "date": 1716959370014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.9,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.315381373699834,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.088963145210085,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.010867965479934,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89604daa0f4244bc83782bd489918cfecb81a7d0",
          "message": "Add omni bencher & chain-spec-builder bins to release (#4557)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/4354\n\nThis PR adds the steps to build and attach `frame-omni-bencher` and\n`chain-spec-builder` binaries to the release draft\n\n## TODO\n- [x] add also chain-spec-builder binary\n- [ ] ~~check/investigate Kian's comment: `chain spec builder. Ideally I\nwant it to match the version of the sp-genesis-builder crate`~~ see\n[comment](https://github.com/paritytech/polkadot-sdk/pull/4518#issuecomment-2134731355)\n- [ ] Backport to `polkadot-sdk@1.11` release, so we can use it for next\nfellows release: https://github.com/polkadot-fellows/runtimes/pull/324\n- [ ] Backport to `polkadot-sdk@1.12` release\n\n---------\n\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2024-05-29T05:50:04Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/89604daa0f4244bc83782bd489918cfecb81a7d0"
        },
        "date": 1716967337494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.11,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.771492682640057,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.021292192630169,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.541920819439959,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dfcfa4ab37819fddb4278eaac306adc0f194fd27",
          "message": "Publish `chain-spec-builder` (#4518)\n\nmarking it as release-able, attaching the same version number that is\nattached to other binaries such as `polkadot` and `polkadot-parachain`.\n\nI have more thoughts about the version number, though. The chain-spec\nbuilder is mainly a user of the `sp-genesis-builder` api. So the\nversioning should be such that it helps users know give a version of\n`sp-genesis-builder` in their runtime, which version of\n`chain-spec-builder` should they use?\n\nWith this, we can possibly alter the version number to always match\n`sp-genesis-builder`.\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/4352\n\n- [x] Add to release artifacts ~~similar to\nhttps://github.com/paritytech/polkadot-sdk/pull/4405~~ done here:\nhttps://github.com/paritytech/polkadot-sdk/pull/4557\n\n---------\n\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2024-05-29T08:34:42Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/dfcfa4ab37819fddb4278eaac306adc0f194fd27"
        },
        "date": 1716977160708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63551.079999999994,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.230803501570014,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.258283207810135,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.698717999579893,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joshua Cheong",
            "username": "joshuacheong",
            "email": "jrc96@cantab.ac.uk"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa32faaebf64426becb2feeede347740eb7a3908",
          "message": "Update README.md (#4623)\n\nMinor edit to a broken link for Rust Docs on the README.md\n\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>",
          "timestamp": "2024-05-29T10:11:16Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/aa32faaebf64426becb2feeede347740eb7a3908"
        },
        "date": 1716983196665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.2157152798201984,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.1885301086699815,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.468995513410032,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre",
            "email": "franciscoaguirreperez@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d5053ac4161b6e3f634a3ffb6df07637058e9f55",
          "message": "Change `XcmDryRunApi::dry_run_extrinsic` to take a call instead (#4621)\n\nFollow-up to the new `XcmDryRunApi` runtime API introduced in\nhttps://github.com/paritytech/polkadot-sdk/pull/3872.\n\nTaking an extrinsic means the frontend has to sign first to dry-run and\nonce again to submit.\nThis is bad UX which is solved by taking an `origin` and a `call`.\nThis also has the benefit of being able to dry-run as any account, since\nit needs no signature.\n\nThis is a breaking change since I changed `dry_run_extrinsic` to\n`dry_run_call`, however, this API is still only on testnets.\nThe crates are bumped accordingly.\n\nAs a part of this PR, I changed the name of the API from `XcmDryRunApi`\nto just `DryRunApi`, since it can be used for general dry-running :)\n\nStep towards https://github.com/paritytech/polkadot-sdk/issues/690.\n\nExample of calling the API with PAPI, not the best code, just testing :)\n\n```ts\n// We just build a call, the arguments make it look very big though.\nconst call = localApi.tx.XcmPallet.transfer_assets({\n  dest: XcmVersionedLocation.V4({ parents: 0, interior: XcmV4Junctions.X1(XcmV4Junction.Parachain(1000)) }),\n  beneficiary: XcmVersionedLocation.V4({ parents: 0, interior: XcmV4Junctions.X1(XcmV4Junction.AccountId32({ network: undefined, id: Binary.fromBytes(encodeAccount(account.address)) })) }),\n  weight_limit: XcmV3WeightLimit.Unlimited(),\n  assets: XcmVersionedAssets.V4([{\n    id: { parents: 0, interior: XcmV4Junctions.Here() },\n    fun: XcmV3MultiassetFungibility.Fungible(1_000_000_000_000n) }\n  ]),\n  fee_asset_item: 0,\n});\n// We call the API passing in a signed origin \nconst result = await localApi.apis.XcmDryRunApi.dry_run_call(\n  WestendRuntimeOriginCaller.system(DispatchRawOrigin.Signed(account.address)),\n  call.decodedCall\n);\nif (result.success && result.value.execution_result.success) {\n  // We find the forwarded XCM we want. The first one going to AssetHub in this case.\n  const xcmsToAssetHub = result.value.forwarded_xcms.find(([location, _]) => (\n    location.type === \"V4\" &&\n      location.value.parents === 0 &&\n      location.value.interior.type === \"X1\"\n      && location.value.interior.value.type === \"Parachain\"\n      && location.value.interior.value.value === 1000\n  ))!;\n\n  // We can even find the delivery fees for that forwarded XCM.\n  const deliveryFeesQuery = await localApi.apis.XcmPaymentApi.query_delivery_fees(xcmsToAssetHub[0], xcmsToAssetHub[1][0]);\n\n  if (deliveryFeesQuery.success) {\n    const amount = deliveryFeesQuery.value.type === \"V4\" && deliveryFeesQuery.value.value[0].fun.type === \"Fungible\" && deliveryFeesQuery.value.value[0].fun.value.valueOf() || 0n;\n    // We store them in state somewhere.\n    setDeliveryFees(formatAmount(BigInt(amount)));\n  }\n}\n```\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-29T19:57:17Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d5053ac4161b6e3f634a3ffb6df07637058e9f55"
        },
        "date": 1717018213933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63554.53999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.127901098799928,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.61366667835996,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4876330171001824,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ab078d6754147ce731523292dd1882f8a7b5775",
          "message": "pallet-staking: Put tests behind `cfg(debug_assertions)` (#4620)\n\nOtherwise these tests are failing if you don't run with\n`debug_assertions` enabled, which happens if you run tests locally in\nrelease mode.",
          "timestamp": "2024-05-29T21:23:27Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4ab078d6754147ce731523292dd1882f8a7b5775"
        },
        "date": 1717023212223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.409999999996,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.693484378820008,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.171930262580127,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.189827579339986,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "drskalman",
            "username": "drskalman",
            "email": "35698397+drskalman@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "bcab07a8c63687a148f19883688c50a9fa603091",
          "message": "Beefy client generic on aduthority Id (#1816)\n\nRevived version of https://github.com/paritytech/substrate/pull/13311 .\nExcept Signature is not generic and is dictated by AuthorityId.\n\n---------\n\nCo-authored-by: Davide Galassi <davxy@datawok.net>\nCo-authored-by: Robert Hambrock <roberthambrock@gmail.com>\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2024-05-30T09:31:39Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/bcab07a8c63687a148f19883688c50a9fa603091"
        },
        "date": 1717067589249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63540.16000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3139209798701486,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.383507485549979,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.960458793990032,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "78c24ec9e24ea04b2f8513b53a8d1246ff6b35ed",
          "message": "Adds ability to specify chain type in chain-spec-builder (#4542)\n\nCurrently, `chain-spec-builder` only creates a spec with `Live` chain\ntype. This PR adds the ability to specify it while keeping the same\ndefault.\n\n---------\n\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>",
          "timestamp": "2024-05-31T02:09:12Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/78c24ec9e24ea04b2f8513b53a8d1246ff6b35ed"
        },
        "date": 1717126591136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.3,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.959758548790157,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.208205212680014,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.904960204020003,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "71f4f5a80bb9ef00d651c62a58c6e8192d4d9707",
          "message": "Update `runtime_type` ref doc with the new \"Associated Type Bounds\" (#4624)\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-31T04:58:05Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/71f4f5a80bb9ef00d651c62a58c6e8192d4d9707"
        },
        "date": 1717137096257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63551.29,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.922651667429987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.283268073970016,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.99362123320011,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Sandu",
            "username": "sandreim",
            "email": "54316454+sandreim@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0ae721970909efc3b2a049632c9c904d9fa4fed1",
          "message": "collator-protocol: remove `elastic-scaling-experimental` feature (#4595)\n\nValidators already have been upgraded so they could already receive the\nnew `CollationWithParentHeadData` response when fetching collation.\nHowever this is only sent by collators when the parachain has more than\n1 core is assigned.\n\nTODO:\n- [x] PRDoc\n\n---------\n\nSigned-off-by: Andrei Sandu <andrei-mihail@parity.io>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-05-31T06:34:43Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0ae721970909efc3b2a049632c9c904d9fa4fed1"
        },
        "date": 1717142779539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.679317829949907,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.192351853430073,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.1723129015200624,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Przemek Rzad",
            "username": "rzadp",
            "email": "przemek@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8d8c0e13a7dc8d067367ac55fb142b12ac8a6d13",
          "message": "Use Unlicense for templates (#4628)\n\nAddresses\n[this](https://github.com/paritytech/polkadot-sdk/issues/3155#issuecomment-2134411391).",
          "timestamp": "2024-05-31T10:15:48Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/8d8c0e13a7dc8d067367ac55fb142b12ac8a6d13"
        },
        "date": 1717156299614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.08999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 8.038045056569993,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.348325275789893,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.844264029350183,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre",
            "email": "franciscoaguirreperez@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fc6c31829fc2e24e11a02b6a2adec27bc5d8918f",
          "message": "Implement `XcmPaymentApi` and `DryRunApi` on all system parachains (#4634)\n\nDepends on https://github.com/paritytech/polkadot-sdk/pull/4621.\n\nImplemented the\n[`XcmPaymentApi`](https://github.com/paritytech/polkadot-sdk/pull/3607)\nand [`DryRunApi`](https://github.com/paritytech/polkadot-sdk/pull/3872)\non all system parachains.\n\nMore scenarios can be tested on both rococo and westend if all system\nparachains implement this APIs.\nThe objective is for all XCM-enabled runtimes to implement them.\nAfter demonstrating fee estimation in a UI on the testnets, come the\nfellowship runtimes.\n\nStep towards https://github.com/paritytech/polkadot-sdk/issues/690.",
          "timestamp": "2024-05-31T15:38:56Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/fc6c31829fc2e24e11a02b6a2adec27bc5d8918f"
        },
        "date": 1717175484487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.8,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 8.054261614340039,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6903176934502717,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.606826697999894,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "gupnik",
            "username": "gupnik",
            "email": "nikhilgupta.iitk@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f81751e0ce56b0ef50b3a0b5aa0ff4fb16c9ea37",
          "message": "Better error for missing index in CRV2 (#4643)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/4552\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <info@kchr.de>",
          "timestamp": "2024-06-02T18:39:47Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f81751e0ce56b0ef50b3a0b5aa0ff4fb16c9ea37"
        },
        "date": 1717360587146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63541.61,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.7,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.876313380980187,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.809050838639948,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.337600516870129,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "tugy",
            "username": "tugytur",
            "email": "33746108+tugytur@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5779ec5b775f86fb86be02783ab5c02efbf307ca",
          "message": "update amforc westend and its parachain bootnodes (#4641)\n\nTested each bootnode with `--reserved-only --reserved-nodes`",
          "timestamp": "2024-06-02T20:11:23Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5779ec5b775f86fb86be02783ab5c02efbf307ca"
        },
        "date": 1717364608470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63547.04,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.934420523650077,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.191018483569914,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.6323600010301353,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f66e693a6befef0956a3129254fbe568247c9c57",
          "message": "Add chain-spec-builder docker image (#4655)\n\nThis PR adds possibility to publish container images for the\n`chain-spec-builder` binary on the regular basis.\nRelated to: https://github.com/paritytech/release-engineering/issues/190",
          "timestamp": "2024-06-03T08:30:36Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f66e693a6befef0956a3129254fbe568247c9c57"
        },
        "date": 1717409271306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63554.17999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.9018704276302065,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.854449073079984,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.247959443749998,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "73ac7375a5421bbc142bef232ab23d221ead64c2",
          "message": "Fix umbrella CI check and fix the C&P message (#4670)",
          "timestamp": "2024-06-03T11:04:29Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/73ac7375a5421bbc142bef232ab23d221ead64c2"
        },
        "date": 1717418697715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63549.219999999994,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.822866798620051,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.351183175950036,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.291119199760076,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbe45121c9a7bb956101bf28e6bb23f0efd3cbbf",
          "message": "[ci] Increase timeout for check-runtime-migration workflow (#4674)\n\n`[check-runtime-migration` now takes more than 30 minutes. Quick fix\nwith increased timeout.",
          "timestamp": "2024-06-03T13:42:55Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cbe45121c9a7bb956101bf28e6bb23f0efd3cbbf"
        },
        "date": 1717427732838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.15,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.362536065780023,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.74139156273,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.309956572010175,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "09de7f157e30f3b9fa2880d298144cb251dd5958",
          "message": "Format the README.md files (#4688)\n\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-06-04T07:45:53Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/09de7f157e30f3b9fa2880d298144cb251dd5958"
        },
        "date": 1717488763949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63543.08,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.531541389369995,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.1140137705500814,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.062571443189954,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Gheorghe",
            "username": "alexggh",
            "email": "49718502+alexggh@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a09ec64d149b400de16f144ca02f0fa958d2bb13",
          "message": "Forward put_record requests to authorithy-discovery (#4683)\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>",
          "timestamp": "2024-06-04T10:05:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a09ec64d149b400de16f144ca02f0fa958d2bb13"
        },
        "date": 1717500927755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63543.71000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.417209189649824,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.973542470919945,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.031371674170141,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sebastian Kunert",
            "username": "skunert",
            "email": "skunert49@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9b76492302f7184ff00bd6141c9b4163611e9d45",
          "message": "Use `parachain_info` in cumulus-test-runtime (#4672)\n\nThis allows to use custom para_ids with cumulus-test-runtime. \n\nZombienet is patching the genesis entries for `ParachainInfo`. This did\nnot work with `test-parachain` because it was using the `test_pallet`\nfor historic reasons I guess.",
          "timestamp": "2024-06-04T13:32:27Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9b76492302f7184ff00bd6141c9b4163611e9d45"
        },
        "date": 1717513226398,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.479999999996,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.218046809720012,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.707519350640036,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2672337660501554,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk",
            "email": "1728078+michalkucharczyk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "42ddb5b06578f6c2b2fc469de5161035b04fc79a",
          "message": "`chain-spec`/presets reference docs added (#4678)\n\nAdded reference doc about:\n- the pallet genesis config and genesis build, \n- runtime `genesis-builder` API,\n- presets,\n- interacting with the `chain-spec-builder` tool\n\nI've added [minimal\nruntime](https://github.com/paritytech/polkadot-sdk/tree/mku-chain-spec-guide/docs/sdk/src/reference_docs/chain_spec_runtime)\nto demonstrate above topics.\n\nI also sneaked in some little improvement to `chain-spec-builder` which\nallows to parse output of the `list-presets` command.\n\n---------\n\nCo-authored-by: Alexandru Vasile <60601340+lexnv@users.noreply.github.com>\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>",
          "timestamp": "2024-06-04T18:04:51Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/42ddb5b06578f6c2b2fc469de5161035b04fc79a"
        },
        "date": 1717529828281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.02,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.40000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.299292141040168,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.734819543859954,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.288513080389859,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "georgepisaltu",
            "username": "georgepisaltu",
            "email": "52418509+georgepisaltu@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3977f389cce4a00fd7100f95262e0563622b9aa4",
          "message": "[Identity] Remove double encoding username signature payload (#4646)\n\nIn order to receive a username in `pallet-identity`, users have to,\namong other things, provide a signature of the desired username. Right\nnow, there is an [extra encoding\nstep](https://github.com/paritytech/polkadot-sdk/blob/4ab078d6754147ce731523292dd1882f8a7b5775/substrate/frame/identity/src/lib.rs#L1119)\nwhen generating the payload to sign.\n\nEncoding a `Vec` adds extra bytes related to the length, which changes\nthe payload. This is unnecessary and confusing as users expect the\npayload to sign to be just the username bytes. This PR fixes this issue\nby validating the signature directly against the username bytes.\n\n---------\n\nSigned-off-by: georgepisaltu <george.pisaltu@parity.io>",
          "timestamp": "2024-06-05T07:38:01Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/3977f389cce4a00fd7100f95262e0563622b9aa4"
        },
        "date": 1717578686068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.33,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.3,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.0527278344899385,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0941771376700773,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.471448659539963,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Przemek Rzad",
            "username": "rzadp",
            "email": "przemek@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8ffe22903a37f4dab2aa1b15ec899f2c38439f60",
          "message": "Update the `polkadot_builder` Dockerfile (#4638)\n\nThis Dockerfile seems outdated - it currently fails to build (on my\nmachine).\nI don't see it being built anywhere on CI.\n\nI did a couple of tweaks to make it build.\n\n---------\n\nCo-authored-by: Alexander Samusev <41779041+alvicsam@users.noreply.github.com>",
          "timestamp": "2024-06-05T09:55:40Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/8ffe22903a37f4dab2aa1b15ec899f2c38439f60"
        },
        "date": 1717586845392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.543783748959896,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.29719559575022,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.279748065420044,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk",
            "email": "1728078+michalkucharczyk@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f65beb7f7a66a79f4afd0a308bece2bd5c8ba780",
          "message": "chain-spec-doc: some minor fixes (#4700)\n\nsome minor text fixes.",
          "timestamp": "2024-06-05T11:52:02Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f65beb7f7a66a79f4afd0a308bece2bd5c8ba780"
        },
        "date": 1717593833328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.52,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.252302674100088,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.952537704200036,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0270463027301315,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d2fd53645654d3b8e12cbf735b67b93078d70113",
          "message": "Unify dependency aliases (#4633)\n\nInherited workspace dependencies cannot be renamed by the crate using\nthem (see [1](https://github.com/rust-lang/cargo/issues/12546),\n[2](https://stackoverflow.com/questions/76792343/can-inherited-dependencies-in-rust-be-aliased-in-the-cargo-toml-file)).\nSince we want to use inherited workspace dependencies everywhere, we\nfirst need to unify all aliases that we use for a dependency throughout\nthe workspace.\nThe umbrella crate is currently excluded from this procedure, since it\nshould be able to export the crates by their original name without much\nhassle.\n\nFor example: one crate may alias `parity-scale-codec` to `codec`, while\nanother crate does not alias it at all. After this change, all crates\nhave to use `codec` as name. The problematic combinations were:\n- conflicting aliases: most crates aliases as `A` but some use `B`.\n- missing alias: most of the crates alias a dep but some dont.\n- superfluous alias: most crates dont alias a dep but some do.\n\nThe script that i used first determines whether most crates opted to\nalias a dependency or not. From that info it decides whether to use an\nalias or not. If it decided to use an alias, the most common one is used\neverywhere.\n\nTo reproduce, i used\n[this](https://github.com/ggwpez/substrate-scripts/blob/master/uniform-crate-alias.py)\npython script in combination with\n[this](https://github.com/ggwpez/zepter/blob/38ad10585fe98a5a86c1d2369738bc763a77057b/renames.json)\nerror output from Zepter.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-05T13:54:37Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d2fd53645654d3b8e12cbf735b67b93078d70113"
        },
        "date": 1717603981720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.54,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.830785874930056,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.330266330239999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.342014902300138,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Adrian Catangiu",
            "username": "acatangiu",
            "email": "adrian@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2460cddf57660a88844d201f769eb17a7accce5a",
          "message": "fix build on MacOS: bump secp256k1 and secp256k1-sys to patched versions (#4709)\n\n`secp256k1 v0.28.0` and `secp256k1-sys v0.9.0` were yanked because\nbuilding them fails for `aarch64-apple-darwin` targets.\n\nUse the `secp256k1 v0.28.2` and `secp256k1-sys v0.9.2` patched versions\nthat build fine on ARM chipset MacOS.",
          "timestamp": "2024-06-05T18:14:16Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2460cddf57660a88844d201f769eb17a7accce5a"
        },
        "date": 1717617146560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63549.17,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.1586879473401157,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.161637523669978,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.717921984570115,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5fb4c40a3ea24ae3ab2bdfefb3f3a40badc2a583",
          "message": "[CI] Delete cargo-deny config (#4677)\n\nNobody seems to maintain this and the job is disabled since months. I\nthink unless the Security team wants to pick this up we delete it for\nnow.\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-06-06T14:48:23Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5fb4c40a3ea24ae3ab2bdfefb3f3a40badc2a583"
        },
        "date": 1717691314609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.4988494454702446,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.548063181189974,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.890217099679903,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Eres",
            "username": "AndreiEres",
            "email": "eresav@me.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "494448b7fed02e098fbf38bad517d9245b056d1d",
          "message": "Cleanup PVF artifact by cache limit and stale time (#4662)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/4324\nWe don't change but extend the existing cleanup strategy. \n- We still don't touch artifacts being stale less than 24h\n- First time we attempt pruning only when we hit cache limit (10 GB)\n- If somehow happened that after we hit 10 GB and least used artifact is\nstale less than 24h we don't remove it.\n\n---------\n\nCo-authored-by: s0me0ne-unkn0wn <48632512+s0me0ne-unkn0wn@users.noreply.github.com>\nCo-authored-by: Andrei Sandu <54316454+sandreim@users.noreply.github.com>",
          "timestamp": "2024-06-06T19:22:22Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/494448b7fed02e098fbf38bad517d9245b056d1d"
        },
        "date": 1717704689661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63539.340000000004,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.0147633474300837,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.924857882679956,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.241718071089954,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "batman",
            "username": "iammasterbrucewayne",
            "email": "iammasterbrucewayne@protonmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "426956f87cc91f94ce71e2ed74ca34d88766e1d8",
          "message": "Update the README to include a link to the Polkadot SDK Version Manager (#4718)\n\nAdds a link to the [Polkadot SDK Version\nManager](https://github.com/paritytech/psvm) since this tool is not well\nknown, but very useful for developers using the Polkadot SDK.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-06T20:06:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/426956f87cc91f94ce71e2ed74ca34d88766e1d8"
        },
        "date": 1717707268105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.83,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.232204521820007,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.578427781110125,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2468090918501202,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "batman",
            "username": "iammasterbrucewayne",
            "email": "iammasterbrucewayne@protonmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "426956f87cc91f94ce71e2ed74ca34d88766e1d8",
          "message": "Update the README to include a link to the Polkadot SDK Version Manager (#4718)\n\nAdds a link to the [Polkadot SDK Version\nManager](https://github.com/paritytech/psvm) since this tool is not well\nknown, but very useful for developers using the Polkadot SDK.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-06T20:06:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/426956f87cc91f94ce71e2ed74ca34d88766e1d8"
        },
        "date": 1717709933493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.65,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.157378245189986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.504827208150042,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.2073581635202695,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eskimor",
            "username": "eskimor",
            "email": "eskimor@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9dfe0fee74ce1e4b7f99c1a5122b635aa43a1e5f",
          "message": "Fix occupied core handling (#4691)\n\nCo-authored-by: eskimor <eskimor@no-such-url.com>\nCo-authored-by: Andrei Sandu <54316454+sandreim@users.noreply.github.com>",
          "timestamp": "2024-06-07T10:50:30Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9dfe0fee74ce1e4b7f99c1a5122b635aa43a1e5f"
        },
        "date": 1717759026321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.45,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.5550583428701747,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.07676580231996,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.739985368550002,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d783ca9d9bfb42ae938f8d4ce9899b6aa3cc00c6",
          "message": "New reference doc for Custom RPC V2 (#4654)\n\nThanks for @xlc for the original seed info, I've just fixed it up a bit\nand added example links.\n\nI've moved the comparison between eth-rpc-api and frontier outside, as\nit is opinionation. I think the content there was good but should live\nin the README of the corresponding repos. No strong opinion, happy\neither way.\n\n---------\n\nCo-authored-by: Bryan Chen <xlchen1291@gmail.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Gonçalo Pestana <g6pestana@gmail.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2024-06-07T11:26:52Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d783ca9d9bfb42ae938f8d4ce9899b6aa3cc00c6"
        },
        "date": 1717766136214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52945.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.5,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.968444493780028,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.375475116179963,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0435649992801803,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "PG Herveou",
            "username": "pgherveou",
            "email": "pgherveou@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48d875d0e60c6d5e4c0c901582cc8edfb76f2f42",
          "message": "Contracts:  update wasmi to 0.32 (#3679)\n\ntake over #2941 \n[Weights\ncompare](https://weights.tasty.limo/compare?unit=weight&ignore_errors=true&threshold=10&method=asymptotic&repo=polkadot-sdk&old=master&new=pg%2Fwasmi-to-v0.32.0-beta.7&path_pattern=substrate%2Fframe%2F**%2Fsrc%2Fweights.rs%2Cpolkadot%2Fruntime%2F*%2Fsrc%2Fweights%2F**%2F*.rs%2Cpolkadot%2Fbridges%2Fmodules%2F*%2Fsrc%2Fweights.rs%2Ccumulus%2F**%2Fweights%2F*.rs%2Ccumulus%2F**%2Fweights%2Fxcm%2F*.rs%2Ccumulus%2F**%2Fsrc%2Fweights.rs)\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2024-06-07T14:40:10Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/48d875d0e60c6d5e4c0c901582cc8edfb76f2f42"
        },
        "date": 1717777087538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.759999999995,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.011561057319993,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.375985634040159,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.408637095880056,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Vasile",
            "username": "lexnv",
            "email": "60601340+lexnv@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "07cfcf0b3c9df971c673162b9d16cb5c17fbe97d",
          "message": "frame/proc-macro: Refactor code for better readability (#4712)\n\nSmall refactoring PR to improve the readability of the proc macros.\n- small improvement in docs\n- use new `let Some(..) else` expression\n- removed extra indentations by early returns\n\nDiscovered during metadata v16 poc, extracted from:\nhttps://github.com/paritytech/polkadot-sdk/pull/4358\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: command-bot <>\nCo-authored-by: gupnik <mail.guptanikhil@gmail.com>",
          "timestamp": "2024-06-08T07:48:42Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/07cfcf0b3c9df971c673162b9d16cb5c17fbe97d"
        },
        "date": 1717838307587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63552.37000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.323517483519922,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.993900192190175,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.930093513160021,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "batman",
            "username": "iammasterbrucewayne",
            "email": "iammasterbrucewayne@protonmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cdb297b15ad9c1d952c0501afaf6b764e5fd147c",
          "message": "Update README.md to move the PSVM link under a \"Tooling\" section under the \"Releases\" section (#4734)\n\nThis update implements the suggestion from @kianenigma mentioned in\nhttps://github.com/paritytech/polkadot-sdk/pull/4718#issuecomment-2153777367\n\nReplaces the \"Other useful resources and tooling\" section at the bottom\nwith a new (nicer) \"Tooling\" section just under the \"Releases\" section.",
          "timestamp": "2024-06-08T11:37:20Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cdb297b15ad9c1d952c0501afaf6b764e5fd147c"
        },
        "date": 1717852135152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63545.96,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.28747961285996,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.876859750159946,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.9370818035402304,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Gheorghe",
            "username": "alexggh",
            "email": "49718502+alexggh@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2869fd6aba61f429ea2c006c2aae8dd5405dc5aa",
          "message": "approval-voting: Add no shows debug information (#4726)\n\nAdd some debug logs to be able to identify the validators and parachains\nthat have most no-shows, this metric is valuable because it will help us\nidentify validators and parachains that regularly have this problem.\n\nFrom the validator_index we can then query the on-chain information and\nidentify the exact validator that is causing the no-shows.\n\n---------\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>",
          "timestamp": "2024-06-10T09:44:58Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2869fd6aba61f429ea2c006c2aae8dd5405dc5aa"
        },
        "date": 1718017943100,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63549.420000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.198643846029954,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.651033059570064,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.212166007400122,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Gheorghe",
            "username": "alexggh",
            "email": "49718502+alexggh@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b65313e81465dd730e48d4ce00deb76922618375",
          "message": "Remove unncessary call remove_from_peers_set (#4742)\n\n... this is superfluous because set_reserved_peers implementation\nalready calls this method here:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/cdb297b15ad9c1d952c0501afaf6b764e5fd147c/substrate/client/network/src/protocol_controller.rs#L571,\nso the call just ends producing this warnings whenever we manipulate the\npeers set.\n\n```\nTrying to remove unknown reserved node 12D3KooWRCePWvHoBbz9PSkw4aogtdVqkVDhiwpcHZCqh4hdPTXC from SetId(3)\npeerset warnings (from different peers)\n```\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>",
          "timestamp": "2024-06-10T12:54:22Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b65313e81465dd730e48d4ce00deb76922618375"
        },
        "date": 1718029478099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.659999999996,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 2.963621416450162,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.292298246970091,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.857725576589925,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sebastian Kunert",
            "username": "skunert",
            "email": "skunert49@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "96ab6869bafb06352b282576a6395aec8e9f2705",
          "message": "finalization: Skip tree route calculation if no forks present (#4721)\n\n## Issue\n\nCurrently, syncing parachains from scratch can lead to a very long\nfinalization time once they reach the tip of the chain. The problem is\nthat we try to finalize everything from 0 to the tip, which can be\nthousands or even millions of blocks.\n\nWe finalize sequentially and try to compute displaced branches during\nfinalization. So for every block on the way, we compute an expensive\ntree route.\n\n## Proposed Improvements\n\nIn this PR, I propose improvements that solve this situation:\n\n- **Skip tree route calculation if `leaves().len() == 1`:** This should\nbe enough for 90% of cases where there is only one leaf after sync.\n- **Optimize finalization for long distances:** It can happen that the\nparachain has imported some leaf and then receives a relay chain\nnotification with the finalized block. In that case, the previous\noptimization will not trigger. A second mechanism should ensure that we\ndo not need to compute the full tree route. If the finalization distance\nis long, we check the lowest common ancestor of all the leaves. If it is\nabove the to-be-finalized block, we know that there are no displaced\nleaves. This is fast because forks are short and close to the tip, so we\ncan leverage the header cache.\n\n## Alternative Approach\n\n- The problem was introduced in #3962. Reverting that PR is another\npossible strategy.\n- We could store for every fork where it begins, however sounds a bit\nmore involved to me.\n\n\nfixes #4614",
          "timestamp": "2024-06-11T13:02:11Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/96ab6869bafb06352b282576a6395aec8e9f2705"
        },
        "date": 1718116820033,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63548.32000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.539462959250038,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.091391929449873,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.444230754370083,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cheme",
            "username": "cheme",
            "email": "emericchevalier.pro@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ad8620922bd7c0477b25c7dfd6fc233641cb27ae",
          "message": "Append overlay optimization. (#1223)\n\nThis branch propose to avoid clones in append by storing offset and size\nin previous overlay depth.\nThat way on rollback we can just truncate and change size of existing\nvalue.\nTo avoid copy it also means that :\n\n- append on new overlay layer if there is an existing value: create a\nnew Append entry with previous offsets, and take memory of previous\noverlay value.\n- rollback on append: restore value by applying offsets and put it back\nin previous overlay value\n- commit on append: appended value overwrite previous value (is an empty\nvec as the memory was taken). offsets of commited layer are dropped, if\nthere is offset in previous overlay layer they are maintained.\n- set value (or remove) when append offsets are present: current\nappended value is moved back to previous overlay value with offset\napplied and current empty entry is overwrite (no offsets kept).\n\nThe modify mechanism is not needed anymore.\nThis branch lacks testing and break some existing genericity (bit of\nduplicated code), but good to have to check direction.\n\nGenerally I am not sure if it is worth or we just should favor\ndifferents directions (transients blob storage for instance), as the\ncurrent append mechanism is a bit tricky (having a variable length in\nfirst position means we sometime need to insert in front of a vector).\n\nFix #30.\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\nCo-authored-by: EgorPopelyaev <egor@parity.io>\nCo-authored-by: Alexandru Vasile <60601340+lexnv@users.noreply.github.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: joe petrowski <25483142+joepetrowski@users.noreply.github.com>\nCo-authored-by: Liam Aharon <liam.aharon@hotmail.com>\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>\nCo-authored-by: Bastian Köcher <info@kchr.de>\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>",
          "timestamp": "2024-06-11T22:15:05Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ad8620922bd7c0477b25c7dfd6fc233641cb27ae"
        },
        "date": 1718149634327,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63547.2,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.765494947829927,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.190097293810223,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.138671873559974,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c4aa2ab642419e6751400a6aabaf5df611a4ea37",
          "message": "Hide `tuplex` dependency and re-export by macro (#4774)\n\nAddressing comment:\nhttps://github.com/paritytech/polkadot-sdk/pull/4102/files#r1635502496\n\n---------\n\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-06-12T14:38:57Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c4aa2ab642419e6751400a6aabaf5df611a4ea37"
        },
        "date": 1718208521720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63546.65,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.90000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.407019395190151,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.5192890061,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.176769134619965,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "eca1052ea1eddeede91da8f9f7452ea8b57e7942",
          "message": "Update the pallet guide in `sdk-docs` (#4735)\n\nAfter using this tutorial in PBA, there was a few areas to improve it.\nMoreover, I have:\n\n- Improve `your_first_pallet`, link it in README, improve the parent\n`guide` section.\n- Updated the templates page, in light of recent efforts related to in\nhttps://github.com/paritytech/polkadot-sdk/issues/3155\n- Added small ref docs about metadata, completed the one about native\nruntime, added one about host functions.\n- Remove a lot of unfinished stuff from sdk-docs\n- update diagram for `Hooks`",
          "timestamp": "2024-06-13T02:36:22Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/eca1052ea1eddeede91da8f9f7452ea8b57e7942"
        },
        "date": 1718252775092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52934.59999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63539.96000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.898188210150001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.318749699889889,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.037390468950111,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "988103d7578ad515b13c69578da1237b28fa9f36",
          "message": "Use aggregated types for `RuntimeFreezeReason` and better examples of `MaxFreezes` (#4615)\n\nThis PR aligns the settings for `MaxFreezes`, `RuntimeFreezeReason`, and\n`FreezeIdentifier`.\n\n#### Future work and improvements\nhttps://github.com/paritytech/polkadot-sdk/issues/2997 (remove\n`MaxFreezes` and `FreezeIdentifier`)",
          "timestamp": "2024-06-13T08:44:05Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/988103d7578ad515b13c69578da1237b28fa9f36"
        },
        "date": 1718274153802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52936.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.21,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.001744056569985,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.109566849930148,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.360414324940006,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Egor_P",
            "username": "EgorPopelyaev",
            "email": "egor@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7b6b783cd1a3953ef5fa6e53f3965b1454e3efc8",
          "message": "[Backport] Version bumps and prdoc reorg from 1.13.0 (#4784)\n\nThis PR backports regular version bumps and prdocs reordering from the\nrelease branch back to master",
          "timestamp": "2024-06-13T16:27:51Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7b6b783cd1a3953ef5fa6e53f3965b1454e3efc8"
        },
        "date": 1718301569898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.02,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.2674886628901385,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.155648623550102,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.811336555650005,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Serban Iorga",
            "username": "serban300",
            "email": "serban@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7f7f5fa857502b6e3649081abb6b53c3512bfedb",
          "message": "`polkadot-parachain-bin`: small cosmetics and improvements (#4666)\n\nRelated to: https://github.com/paritytech/polkadot-sdk/issues/5\n\nA couple of cosmetics and improvements related to\n`polkadot-parachain-bin`:\n\n- Adding some convenience traits in order to avoid declaring long\nduplicate bounds\n- Specifically check if the runtime exposes `AuraApi` when executing\n`start_lookahead_aura_consensus()`\n- Some fixes for the `RelayChainCli`. Details in the commits description",
          "timestamp": "2024-06-14T06:29:04Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7f7f5fa857502b6e3649081abb6b53c3512bfedb"
        },
        "date": 1718352308466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52945,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63550.840000000004,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.349105097360183,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.935911757529917,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.380523744189955,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Branislav Kontur",
            "username": "bkontur",
            "email": "bkontur@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "977254ccb1afca975780987ff9f19f356e99378f",
          "message": "Bridges - changes for Bridges V2 - relay client part (#4494)\n\nContains mainly changes/nits/refactors related to the relayer code\n(`client-substrate` and `lib-substrate-relay`) migrated from the Bridges\nV2 [branch](https://github.com/paritytech/polkadot-sdk/pull/4427).\n\nRelates to:\nhttps://github.com/paritytech/parity-bridges-common/issues/2976\nCompanion: https://github.com/paritytech/parity-bridges-common/pull/2988\n\n\n## TODO\n- [x] fix comments\n\n## Questions\n- [x] Do we need more testing for client V2 stuff? If so, how/what is\nthe ultimate test? @svyatonik\n- [x] check\n[comment](https://github.com/paritytech/polkadot-sdk/pull/4494#issuecomment-2117181144)\nfor more testing\n\n---------\n\nCo-authored-by: Svyatoslav Nikolsky <svyatonik@gmail.com>\nCo-authored-by: Serban Iorga <serban@parity.io>",
          "timestamp": "2024-06-14T11:30:08Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/977254ccb1afca975780987ff9f19f356e99378f"
        },
        "date": 1718370217741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63554.609999999986,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.526871195140175,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.686127097840047,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.39121992768012,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Sandu",
            "username": "sandreim",
            "email": "54316454+sandreim@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ae0b3bf6733e7b9e18badb16128a6b25bef1923b",
          "message": "CheckWeight: account for extrinsic len as proof size (#4765)\n\nFix https://github.com/paritytech/polkadot-sdk/issues/4743 which allows\nus to remove the defensive limit on pov size in Cumulus after relay\nchain gets upgraded with these changes. Also add unit test to ensure\n`CheckWeight` - `StorageWeightReclaim` integration works.\n\nTODO:\n- [x] PRDoc\n- [x] Add a len to all the other tests in storage weight reclaim and\ncall `CheckWeight::pre_dispatch`\n\n---------\n\nSigned-off-by: Andrei Sandu <andrei-mihail@parity.io>",
          "timestamp": "2024-06-14T12:42:46Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ae0b3bf6733e7b9e18badb16128a6b25bef1923b"
        },
        "date": 1718374918214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.9,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.5818529633801846,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.78037923621992,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.213121540560044,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kian Paimani",
            "username": "kianenigma",
            "email": "5588131+kianenigma@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2f643816d79a76155aec790a35b9b72a5d8bb726",
          "message": "add ref doc for logging practices in FRAME (#4768)",
          "timestamp": "2024-06-17T03:31:15Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2f643816d79a76155aec790a35b9b72a5d8bb726"
        },
        "date": 1718600517277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63541.11000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.121080589649987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.617194020469928,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.1930408402001706,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ankan",
            "username": "Ank4n",
            "email": "10196091+Ank4n@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d91cbbd453c1d4553d7e3dc8753a2007fc4c5a67",
          "message": "Impl and use default config for pallet-staking in tests (#4797)",
          "timestamp": "2024-06-17T12:35:15Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d91cbbd453c1d4553d7e3dc8753a2007fc4c5a67"
        },
        "date": 1718630342208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.21000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52939.2,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.087246896820188,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.0411818510100135,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.556652814509956,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tom Mi",
            "username": "hitchhooker",
            "email": "tommi@niemi.lol"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6cb3bd23910ec48ab37a3c95a6b03286ff2979bf",
          "message": "Ibp bootnodes for Kusama People (#6) (#4741)\n\n* fix rotko's pcollectives bootnode\n* Update people-kusama.json\n* Add Dwellir People Kusama bootnode\n* add Gatotech bootnodes to `people-kusama`\n* Add Dwellir People Kusama bootnode\n* Update Amforc bootnodes for Kusama and Polkadot (#4668)\n\n---------\n\nCo-authored-by: RadiumBlock <info@radiumblock.com>\nCo-authored-by: Jonathan Udd <jonathan@dwellir.com>\nCo-authored-by: Milos Kriz <milos_kriz@hotmail.com>\nCo-authored-by: tugy <33746108+tugytur@users.noreply.github.com>\nCo-authored-by: Kutsal Kaan Bilgin <kutsalbilgin@gmail.com>\nCo-authored-by: Petr Mensik <petr.mensik1@gmail.com>\nCo-authored-by: Tommi <tommi@romeblockchain>",
          "timestamp": "2024-06-17T15:11:21Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6cb3bd23910ec48ab37a3c95a6b03286ff2979bf"
        },
        "date": 1718643137446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63552.409999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.5,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 8.097260994689977,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7968603961201937,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 10.714941321930064,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Florian Franzen",
            "username": "FlorianFranzen",
            "email": "Florian.Franzen@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5055294521021c0ffa1c449d6793ec9d264e5bd5",
          "message": "node-inspect: do not depend on rocksdb (#4783)\n\nThe crate `sc-cli` otherwise enables the `rocksdb` feature.",
          "timestamp": "2024-06-17T18:47:36Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5055294521021c0ffa1c449d6793ec9d264e5bd5"
        },
        "date": 1718655974207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63554.39,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.62921363210991,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.14774842490007,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.8046545736901636,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Kantapat chankasem",
            "username": "tesol2y090",
            "email": "gliese090@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "55a13abcd2f67e7fdfc8843f5c4a54798e26a9df",
          "message": "remove pallet::getter usage from pallet-timestamp (#3374)\n\nthis pr is a part of #3326\n\n---------\n\nCo-authored-by: Kian Paimani <5588131+kianenigma@users.noreply.github.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-17T22:30:13Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/55a13abcd2f67e7fdfc8843f5c4a54798e26a9df"
        },
        "date": 1718668988715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63546.81,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.238794083030057,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.289278355740054,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.826018924,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Andrei Sandu",
            "username": "sandreim",
            "email": "54316454+sandreim@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1dc68de8eec934b3c7f35a330f869d1172943da4",
          "message": "glutton: also increase parachain block length (#4728)\n\nGlutton currently is useful mostly for stress testing relay chain\nvalidators. It is unusable for testing the collator networking and block\nannouncement and import scenarios. This PR resolves that by improving\nglutton pallet to also buff up the blocks, up to the runtime configured\n`BlockLength`.\n\n### How it works\nIncludes an additional inherent in each parachain block. The `garbage`\nargument passed to the inherent is filled with trash data. It's size is\ncomputed by applying the newly introduced `block_length` percentage to\nthe maximum block length for mandatory dispatch class. After\nhttps://github.com/paritytech/polkadot-sdk/pull/4765 is merged, the\nlength of inherent extrinsic will be added to the total block proof\nsize.\n\nThe remaining weight is burnt in `on_idle` as configured by the\n`storage` percentage parameter.\n\n\nTODO:\n- [x] PRDoc\n- [x] Readme update\n- [x] Add tests\n\n---------\n\nSigned-off-by: Andrei Sandu <andrei-mihail@parity.io>",
          "timestamp": "2024-06-18T08:57:57Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/1dc68de8eec934b3c7f35a330f869d1172943da4"
        },
        "date": 1718703192132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52937.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.72000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.874306870289952,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.315425670490116,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.991006914380159,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Javier Bullrich",
            "username": "Bullrich",
            "email": "javier@bullrich.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6daa939bc7c3f26c693a876d5a4b7ea00c6b2d7f",
          "message": "Migrated commands to github actions (#4701)\n\nMigrated commands individually to work as GitHub actions with a\n[`workflow_dispatch`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)\nevent.\n\nThis will not disable the command-bot yet, but it's the first step\nbefore disabling it.\n\n### Commands migrated\n- [x] bench-all\n- [x] bench-overhead\n- [x] bench\n- [x] fmt\n- [x] update-ui\n\nAlso created an action that will inform users about the new\ndocumentation when they comment `bot`.\n\n### Created documentation \nCreated a detailed documentation on how to use this action. Found the\ndocumentation\n[here](https://github.com/paritytech/polkadot-sdk/blob/bullrich/cmd-action/.github/commands-readme.md).\n\n---------\n\nCo-authored-by: Alexander Samusev <41779041+alvicsam@users.noreply.github.com>\nCo-authored-by: Przemek Rzad <przemek@parity.io>",
          "timestamp": "2024-06-18T13:12:03Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6daa939bc7c3f26c693a876d5a4b7ea00c6b2d7f"
        },
        "date": 1718718520252,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63544.56999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.70097270847,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.201733687410012,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.21615149713017,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6c857609a9425902d6dfe5445afb16c6b23ad86c",
          "message": "rpc server: add `health/readiness endpoint` (#4802)\n\nPrevious attempt https://github.com/paritytech/substrate/pull/14314\n\nClose #4443 \n\nIdeally, we should move /health and /health/readiness to the prometheus\nserver but because it's was quite easy to implement on the RPC server\nand that RPC server already exposes /health.\n\nManual tests on a polkadot node syncing:\n\n```bash\n➜ polkadot-sdk (na-fix-4443) ✗ curl -v localhost:9944/health\n* Host localhost:9944 was resolved.\n* IPv6: ::1\n* IPv4: 127.0.0.1\n*   Trying [::1]:9944...\n* connect to ::1 port 9944 from ::1 port 55024 failed: Connection refused\n*   Trying 127.0.0.1:9944...\n* Connected to localhost (127.0.0.1) port 9944\n> GET /health HTTP/1.1\n> Host: localhost:9944\n> User-Agent: curl/8.5.0\n> Accept: */*\n>\n< HTTP/1.1 200 OK\n< content-type: application/json; charset=utf-8\n< content-length: 53\n< date: Fri, 14 Jun 2024 16:12:23 GMT\n<\n* Connection #0 to host localhost left intact\n{\"peers\":0,\"isSyncing\":false,\"shouldHavePeers\":false}%\n➜ polkadot-sdk (na-fix-4443) ✗ curl -v localhost:9944/health/readiness\n* Host localhost:9944 was resolved.\n* IPv6: ::1\n* IPv4: 127.0.0.1\n*   Trying [::1]:9944...\n* connect to ::1 port 9944 from ::1 port 54328 failed: Connection refused\n*   Trying 127.0.0.1:9944...\n* Connected to localhost (127.0.0.1) port 9944\n> GET /health/readiness HTTP/1.1\n> Host: localhost:9944\n> User-Agent: curl/8.5.0\n> Accept: */*\n>\n< HTTP/1.1 500 Internal Server Error\n< content-type: application/json; charset=utf-8\n< content-length: 0\n< date: Fri, 14 Jun 2024 16:12:36 GMT\n<\n* Connection #0 to host localhost left intact\n```\n\n//cc @BulatSaif you may be interested in this..\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-19T16:20:11Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6c857609a9425902d6dfe5445afb16c6b23ad86c"
        },
        "date": 1718815707011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63553.119999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.90000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.863898759150036,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 8.564267642539999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.110561763360249,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "74decbbdf22a7b109209448307563c6f3d62abac",
          "message": "Bump curve25519-dalek from 4.1.2 to 4.1.3 (#4824)\n\nBumps\n[curve25519-dalek](https://github.com/dalek-cryptography/curve25519-dalek)\nfrom 4.1.2 to 4.1.3.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/5312a0311ec40df95be953eacfa8a11b9a34bc54\"><code>5312a03</code></a>\ncurve: Bump version to 4.1.3 (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/660\">#660</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/b4f9e4df92a4689fb59e312a21f940ba06ba7013\"><code>b4f9e4d</code></a>\nSECURITY: fix timing variability in backend/serial/u32/scalar.rs (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/661\">#661</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/415892acf1cdf9161bd6a4c99bc2f4cb8fae5e6a\"><code>415892a</code></a>\nSECURITY: fix timing variability in backend/serial/u64/scalar.rs (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/659\">#659</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/56bf398d0caed63ef1d1edfbd35eb5335132aba2\"><code>56bf398</code></a>\nUpdates license field to valid SPDX format (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/647\">#647</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/9252fa5c0d09054fed4ac4d649e63c40fad7abaf\"><code>9252fa5</code></a>\nMitigate check-cfg until MSRV 1.77 (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/652\">#652</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/1efe6a93b176c4389b78e81e52b2cf85d728aac6\"><code>1efe6a9</code></a>\nFix a minor typo in signing.rs (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/649\">#649</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/cc3421a22fa7ee1f557cbe9243b450da53bbe962\"><code>cc3421a</code></a>\nIndicate that the rand_core feature is required (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/641\">#641</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/858c4ca8ae03d33fe8b71b4504c4d3f5ff5b45c0\"><code>858c4ca</code></a>\nAddress new nightly clippy unnecessary qualifications (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/639\">#639</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/31ccb6705067d68782cb135e23c79b640a6a06ee\"><code>31ccb67</code></a>\nRemove platforms in favor using CARGO_CFG_TARGET_POINTER_WIDTH (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/636\">#636</a>)</li>\n<li><a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/commit/19c7f4a5d5e577adc9cc65a837abef9ed7ebf0a4\"><code>19c7f4a</code></a>\nFix new nightly redundant import lint warns (<a\nhref=\"https://redirect.github.com/dalek-cryptography/curve25519-dalek/issues/638\">#638</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dalek-cryptography/curve25519-dalek/compare/curve25519-4.1.2...curve25519-4.1.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=curve25519-dalek&package-manager=cargo&previous-version=4.1.2&new-version=4.1.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/paritytech/polkadot-sdk/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-20T08:56:56Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/74decbbdf22a7b109209448307563c6f3d62abac"
        },
        "date": 1718879801649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63549.619999999995,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 7.110723864519997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.218383392750134,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.545777927650034,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a23abb17232107275089040a33ff38e6a801e648",
          "message": "Bump ws from 8.16.0 to 8.17.1 in /bridges/testing/framework/utils/generate_hex_encoded_call (#4825)\n\nBumps [ws](https://github.com/websockets/ws) from 8.16.0 to 8.17.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/websockets/ws/releases\">ws's\nreleases</a>.</em></p>\n<blockquote>\n<h2>8.17.1</h2>\n<h1>Bug fixes</h1>\n<ul>\n<li>Fixed a DoS vulnerability (<a\nhref=\"https://redirect.github.com/websockets/ws/issues/2231\">#2231</a>).</li>\n</ul>\n<p>A request with a number of headers exceeding\nthe[<code>server.maxHeadersCount</code>][]\nthreshold could be used to crash a ws server.</p>\n<pre lang=\"js\"><code>const http = require('http');\nconst WebSocket = require('ws');\n<p>const wss = new WebSocket.Server({ port: 0 }, function () {\nconst chars =\n&quot;!#$%&amp;'*+-.0123456789abcdefghijklmnopqrstuvwxyz^_`|~&quot;.split('');\nconst headers = {};\nlet count = 0;</p>\n<p>for (let i = 0; i &lt; chars.length; i++) {\nif (count === 2000) break;</p>\n<pre><code>for (let j = 0; j &amp;lt; chars.length; j++) {\n  const key = chars[i] + chars[j];\n  headers[key] = 'x';\n\n  if (++count === 2000) break;\n}\n</code></pre>\n<p>}</p>\n<p>headers.Connection = 'Upgrade';\nheaders.Upgrade = 'websocket';\nheaders['Sec-WebSocket-Key'] = 'dGhlIHNhbXBsZSBub25jZQ==';\nheaders['Sec-WebSocket-Version'] = '13';</p>\n<p>const request = http.request({\nheaders: headers,\nhost: '127.0.0.1',\nport: wss.address().port\n});</p>\n<p>request.end();\n});\n</code></pre></p>\n<p>The vulnerability was reported by <a\nhref=\"https://github.com/rrlapointe\">Ryan LaPointe</a> in <a\nhref=\"https://redirect.github.com/websockets/ws/issues/2230\">websockets/ws#2230</a>.</p>\n<p>In vulnerable versions of ws, the issue can be mitigated in the\nfollowing ways:</p>\n<ol>\n<li>Reduce the maximum allowed length of the request headers using the\n[<code>--max-http-header-size=size</code>][] and/or the\n[<code>maxHeaderSize</code>][] options so\nthat no more headers than the <code>server.maxHeadersCount</code> limit\ncan be sent.</li>\n</ol>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/3c56601092872f7d7566989f0e379271afd0e4a1\"><code>3c56601</code></a>\n[dist] 8.17.1</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/e55e5106f10fcbaac37cfa89759e4cc0d073a52c\"><code>e55e510</code></a>\n[security] Fix crash when the Upgrade header cannot be read (<a\nhref=\"https://redirect.github.com/websockets/ws/issues/2231\">#2231</a>)</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/6a00029edd924499f892aed8003cef1fa724cfe5\"><code>6a00029</code></a>\n[test] Increase code coverage</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/ddfe4a804d79e7788ab136290e609f91cf68423f\"><code>ddfe4a8</code></a>\n[perf] Reduce the amount of <code>crypto.randomFillSync()</code>\ncalls</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/b73b11828d166e9692a9bffe9c01a7e93bab04a8\"><code>b73b118</code></a>\n[dist] 8.17.0</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/29694a5905fa703e86667928e6bacac397469471\"><code>29694a5</code></a>\n[test] Use the <code>highWaterMark</code> variable</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/934c9d6b938b93c045cb13e5f7c19c27a8dd925a\"><code>934c9d6</code></a>\n[ci] Test on node 22</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/1817bac06e1204bfb578b8b3f4bafd0fa09623d0\"><code>1817bac</code></a>\n[ci] Do not test on node 21</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/96c9b3deddf56cacb2d756aaa918071e03cdbc42\"><code>96c9b3d</code></a>\n[major] Flip the default value of <code>allowSynchronousEvents</code>\n(<a\nhref=\"https://redirect.github.com/websockets/ws/issues/2221\">#2221</a>)</li>\n<li><a\nhref=\"https://github.com/websockets/ws/commit/e5f32c7e1e6d3d19cd4a1fdec84890e154db30c1\"><code>e5f32c7</code></a>\n[fix] Emit at most one event per event loop iteration (<a\nhref=\"https://redirect.github.com/websockets/ws/issues/2218\">#2218</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/websockets/ws/compare/8.16.0...8.17.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=ws&package-manager=npm_and_yarn&previous-version=8.16.0&new-version=8.17.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/paritytech/polkadot-sdk/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2024-06-21T07:23:19Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a23abb17232107275089040a33ff38e6a801e648"
        },
        "date": 1718960088522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.83999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.288932295959976,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 6.8361939580099875,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 2.996202384440138,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b301218db8785c6d425ca9a9ef90daa80780f2ce",
          "message": "[ci] Change storage type for forklift in GHA (#4850)\n\nPR changes forklift authentication to gcs\n\ncc https://github.com/paritytech/ci_cd/issues/987",
          "timestamp": "2024-06-21T09:33:33Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b301218db8785c6d425ca9a9ef90daa80780f2ce"
        },
        "date": 1718969766979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63543.93000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.2,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 10.501351819750123,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.695427293180238,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.753536444880015,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Dmitry Markin",
            "username": "dmitry-markin",
            "email": "dmitry@markin.tech"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b3a1d2b99512aa3bb52a2af6fe6adc8c63ac984",
          "message": "sc-network-types: implement `From<IpAddr> for Multiaddr` (#4855)\n\nAdd `From` implementation used by downstream project.\n\nRef.\nhttps://github.com/paritytech/polkadot-sdk/pull/4198#discussion_r1648676102\n\nCC @nazar-pc",
          "timestamp": "2024-06-21T14:38:22Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/3b3a1d2b99512aa3bb52a2af6fe6adc8c63ac984"
        },
        "date": 1718983166450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63545.54,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52936.8,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.241604231780078,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.187141284289983,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.718201077269976,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bastian Köcher",
            "username": "bkchr",
            "email": "git@kchr.de"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c4b3c1c6c6e492c4196e06fbba824a58e8119a3b",
          "message": "Bump time to fix compilation on latest nightly (#4862)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/4748",
          "timestamp": "2024-06-21T15:05:24Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c4b3c1c6c6e492c4196e06fbba824a58e8119a3b"
        },
        "date": 1718988888942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63552.770000000004,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.40000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 10.000618212120017,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 5.0319300388002794,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 12.500398158309943,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muharem",
            "username": "muharem",
            "email": "ismailov.m.h@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "812dbff17513cbd2aeb2ff9c41214711bd1c0004",
          "message": "Frame: `Consideration` trait generic over `Footprint` and indicates zero cost (#4596)\n\n`Consideration` trait generic over `Footprint` and indicates zero cost\nfor a give footprint.\n\n`Consideration` trait is generic over `Footprint` (currently defined\nover the type with the same name). This makes it possible to setup a\ncustom footprint (e.g. current number of proposals in the storage).\n\n`Consideration::new` and `Consideration::update` return an\n`Option<Self>` instead `Self`, this make it possible to indicate a no\ncost for a specific footprint (e.g. if current number of proposals in\nthe storage < max_proposal_count / 2 then no cost).\n\nThese cases need to be handled for\nhttps://github.com/paritytech/polkadot-sdk/pull/3151",
          "timestamp": "2024-06-22T13:54:33Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/812dbff17513cbd2aeb2ff9c41214711bd1c0004"
        },
        "date": 1719071058627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63550.87999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 12.142237593610112,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 9.638549754010011,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.83201469806029,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "girazoki",
            "username": "girazoki",
            "email": "gorka.irazoki@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f8feebc12736c04d60040e0f291615479f9951a5",
          "message": "Reinitialize should allow to override existing config in collationGeneration (#4833)\n\nCurrently the `Initialize` and `Reinitialize` messages in the\ncollationGeneration subsystem fail if:\n-  `Initialize` if there exists already another configuration and\n- `Reinitialize` if another configuration does not exist\n\nI propose to instead change the behaviour of `Reinitialize` to always\nset the config regardless of whether one exists or not.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Andrei Sandu <54316454+sandreim@users.noreply.github.com>",
          "timestamp": "2024-06-23T09:35:36Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f8feebc12736c04d60040e0f291615479f9951a5"
        },
        "date": 1719140642898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63542.37000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 9.708812270940026,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.201256159110041,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.297835754270108,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nazar Mokrynskyi",
            "username": "nazar-pc",
            "email": "nazar@mokrynskyi.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "686aa233e67c619bcdbc8b758a9ddf92c3315cf1",
          "message": "Block import cleanups (#4842)\n\nI carried these things in a fork for a long time, I think wouldn't hurt\nto have it upstream.\n\nOriginally submitted as part of\nhttps://github.com/paritytech/polkadot-sdk/pull/1598 that went nowhere.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2024-06-23T11:36:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/686aa233e67c619bcdbc8b758a9ddf92c3315cf1"
        },
        "date": 1719148222833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63542.409999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52936.59999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.297929376860174,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 7.179568960989949,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.607189222469868,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez",
            "email": "oliver.tale-yazdi@parity.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7df94a469e02e1d553bd4050b0e91870d6a4c31b",
          "message": "Dont publish example pallets (#4861)\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2024-06-24T09:16:34Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7df94a469e02e1d553bd4050b0e91870d6a4c31b"
        },
        "date": 1719226313958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63548.55000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.851494898030021,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.260658322589915,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0272067420301116,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Muharem",
            "username": "muharem",
            "email": "ismailov.m.h@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5e62782d27a18d8c57da28617181c66cd57076b5",
          "message": "treasury pallet: remove unused config parameters (#4831)\n\nRemove unused config parameters `ApproveOrigin` and `OnSlash` from the\ntreasury pallet. Add `OnSlash` config parameter to the bounties and tips\npallets.\n\npart of https://github.com/paritytech/polkadot-sdk/issues/3800",
          "timestamp": "2024-06-24T12:31:55Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5e62782d27a18d8c57da28617181c66cd57076b5"
        },
        "date": 1719234951665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63544.569999999985,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 6.948956350090043,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 9.378985339300037,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.0932228218401407,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}