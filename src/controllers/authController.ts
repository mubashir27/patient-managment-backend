import asyncHandler from "express-async-handler";

const createUser = asyncHandler(() => {
  console.log("hello bro I am from createUser");
});

export { createUser };
