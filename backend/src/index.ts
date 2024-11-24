import app from "./server";
import colors from "colors";
import "dotenv/config";
const port = +process.env.PORT || 4000;
app.get("/", async (request, reply) => {
  reply.code(200).send({ message: "Hello World" });
});
app.listen({ port }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
  console.log(
    colors.blue.bold(`Server is now listening on  http://localhost:${port}`)
  );
});
