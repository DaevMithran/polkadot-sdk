window.BENCHMARK_DATA = {
  "lastUpdate": 1716925498120,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "statement-distribution-regression-bench": [
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
        "date": 1716844401847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.40199999999997,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.92799999999993,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.04608676030200003,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.037103448994000005,
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
        "date": 1716851734932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.91999999999993,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.038638358854,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04772121519000001,
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
          "id": "3bf283ff22224e7713cf0c1b9878e9137dc6dbf7",
          "message": "[subsytem-bench] Remove redundant banchmark_name param (#4540)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/3601\n\nSince we print benchmark results manually, we don't need to save\nbenchmark_name anywhere, better just put the name inside `println!`.",
          "timestamp": "2024-05-28T08:51:40Z",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/3bf283ff22224e7713cf0c1b9878e9137dc6dbf7"
        },
        "date": 1716888348464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.94199999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03838162524400001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04736182489,
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
        "date": 1716901825824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.92399999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.40399999999998,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03954887485799999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04928162677200004,
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
        "date": 1716912815140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.40399999999998,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.94999999999993,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.036255953064,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.045810916002,
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
        "date": 1716919815120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.902,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.037057450898000006,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04731493461599998,
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
        "date": 1716925470609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95799999999997,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.40399999999995,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03720920827200003,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.046185171588000014,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}