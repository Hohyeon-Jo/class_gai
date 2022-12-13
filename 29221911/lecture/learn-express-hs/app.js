const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3001);

app.use(
    (res, req, next) => {

        console.log("모든 요청에 다 실행됩니다");
        next();
    }
)
app.get('/',
    (req, res, next) => {
            // res.send('hellol Express');
            //res.sendFile(path.join(__dirname), '/index.html');
            console.log("GET / 요청에서만 실행됩니다");
            next();
                },
    (err, req, res, next) => {
        console.error(err);
        res.status(500).send(err.message);
    }
);

app.listen(
    app.get('port'),
    () => {
        console.log(app.get('port'), '번 포트에서 대기');
    }
);