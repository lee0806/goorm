import express from "express"; // express import
import type { Request, Response } from "express"; // type import

const app = express(); // 서버 앱 인스턴스를 생성
const PORT = 4000; // 서버 포트 주소

app.use(express.json()); // 미들웨어 등록

app.get("/api/health", (req : Request, res : Response) => { // 엔드포인트 등록, 핸들러 실행
    res.json({ OK : true, message : "server is running" }); // 응답 값
});

app.post("/api/hello", (req : Request, res : Response ) => {
    const { message } = req.body; // 클라이언트가 보낸 json body
    
    try {
        console.log("받은 메세지", message);
    } catch (error) {
        console.error(error);
    }


    res.json({
        OK : true,
        received: message,
    });
});

app.listen(PORT, () => { // 서버 실행
    console.log(`server listening on http://localhost:${PORT}`); // 서버가 실행되면 console 
});