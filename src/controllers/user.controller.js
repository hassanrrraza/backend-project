import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler ( async(req, res) => {
    res.status(200).json({
        message: "13 april 2025 - 100k"
    })
} )

export { registerUser };
