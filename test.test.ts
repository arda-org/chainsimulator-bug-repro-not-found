import { test } from "vitest";
import { FSWorld, e } from "xsuite";

test("Test", async () => {
  // using world = FSWorld.new({ proxyUrl: "http://localhost:8085" });
  using world = await FSWorld.start({
    saveLogs: true,
  });

  const wallet = await world.createWallet({
    address: { shard: 0 },
    balance: 10n ** 18n,
    kvs: {
      esdts: [
        { id: "TOKEN-123456", amount: 1000 },
      ],
    }
  });
  const wallet2 = await world.createWallet({
    address: { shard: 1 },
  });

  await world.doTransfers(
    Array.from({ length: 100 }, () =>
      ({
        sender: wallet,
        receiver: wallet2,
        esdts: [
          { id: "TOKEN-123456", amount: 1 },
        ],
        gasLimit: 10_000_000,
      }),
    ),
  );
});
