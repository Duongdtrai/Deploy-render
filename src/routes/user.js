const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *      - "[USER]: user"
 *     summary: Thông tin user
 *     parameters:
 *      - in: "path"
 *        name: "userId"
 *        type: "string"
 *     responses:
 *       200:
 *         description: "OK"
 *       500:
 *         description: "Internal error"
 *     security:
 *      - Bearer: []
 */
router.get('/user', async (req, res) => {
    try {
        res.status(200).json({
            name: 'duong',
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
