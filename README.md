실행방법

npm install
node server.js
호스트명 추가

Finder 폴더 이동 -> /private/etc/ -> hosts 파일 열기 ->
127.0.0.1 site.example 마지막줄에 추가

기본
const response = await fetch("http://localhost:3000/api?message=hello");
await response.json();

단순요청 X
const response = await fetch("http://localhost:3000/api?message=hello",{headers:{"X-token" : "aBcDeF1234567890"}});
await response.json();
