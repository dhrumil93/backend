import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/ayncHandler.js";
import { Jwt } from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken || req.header("Authorization")?.("Bearer", " "); // to retrieve cookie

  if (!token) {
    throw new ApiError(401, "Unauthorized Request !!");
  }
  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  await User.findById(decodedToken?._id).select("-password -refreshToken");
});