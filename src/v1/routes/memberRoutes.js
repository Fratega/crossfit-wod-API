const express = require("express");
const apicache = require("apicache");
const memberController = require("../../controllers/memberController");
const recordController = require("../../controllers/recordController");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();
const cache = apicache.middleware;


/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

// CRUD ENDPOINT FOR MEMBERS

// router.get("/", cache("2 minutes"), memberController.getAllMembers);

// router.get("/:memberId", memberController.getOneMember);

// router.post("/", memberController.createNewMember);

// router.patch("/:memberId", memberController.updateOneMember);

// router.delete("/:memberId", memberController.deleteOneMember);

module.exports = router;