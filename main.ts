import "./import-esm";
import { Got } from "got";

(async function () {
  const got = await importESM<Got>("got");
  const { data } = await got
    .post("https://httpbin.org/anything", {
      json: {
        hello: "world",
      },
    })
    .json();

  console.log(data);
})();
