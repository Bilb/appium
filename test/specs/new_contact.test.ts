import { newUser } from "./utils/create_account";

describe("Contact", () => {
  it("Create new contact", async () => {
    const userA = await newUser("User A");
    const userB = await newUser("User B");
  });
});
