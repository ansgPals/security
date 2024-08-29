const express = require("express");
const router = express.Router();

const allowList = ["http://localhost:3000", "http://site.example:3000"];

router.use((req, res, next) => {
  // CORS 교차출처 허용
  // res.header("Access-Control-Allow-Origin", "http://site.example:3000");
  // res.header("Access-Control-Allow-Origin", "*");

  // 여러 교차출처 허용 할때
  const origin = req.headers.origin;
  if (origin && allowList.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  // X-token 헤더 허가코드
  res.header("Access-Control-Allow-headers", "X-token");

  next();
});

// GET 요청 처리
router.get("/", (req, res) => {
  let message = req.query.message;
  if (message === undefined || message === "") {
    res.status(400).send({ message: "message 값이 비었음" });
  } else {
    res.send({ message });
  }
});

module.exports = router;
