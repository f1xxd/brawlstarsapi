import { $ } from "bun"

const swagger = await fetch("https://api.brawlstars.com/v1/", {
  headers: {
    Authorization: `Bearer ${process.env.JWT_TOKEN}`,
  },
})

await Bun.write(
  Bun.file("./src/schemas/swagger.yml"),
  await swagger.text(),
)

await $`bunx sta -p ./src/schemas/swagger.yml -n ./src/schemas/generated.ts --no-client`
