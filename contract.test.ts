import { test } from "vitest";
import { FSWorld, e } from "xsuite";

test("Test", async () => {
  using world = await FSWorld.start();

  const wallet = await world.createWallet({
    address: { shard: 0 },
    balance: 10n ** 18n,
  });
  const caller = await world.createContract({
    address: { shard: 0 },
    code: "file:output/contract.wasm",
    codeMetadata: [],
  });

  await world.callContracts(
    Array.from({ length: 200 }, () =>
      ({
        sender: wallet,
        callee: caller,
        funcName: "compute",
        gasLimit: 100_000_000,
      }),
    ),
  );
});
