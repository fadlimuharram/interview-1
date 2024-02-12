import data from "../../api_preview.json";

/**
 * @swagger
 * /api/:
 *   get:
 *     description: Returns 5000 photos
 *     responses:
 *       200:
 *         description: 5000 photos
 */
export default function handler(req, res) {
  res.status(200).json(data);
}
