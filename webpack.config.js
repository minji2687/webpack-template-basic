const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// export

module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "public"),
    // path.resolve(1,2) 1번째 인수와 2번쨰 인수의 경로를 합쳐주는 역활을 함
    //__dirname 은 현재 파일이 있는 경로를 지칭한다
    // 이 두 부분을 합쳐서 절대적인 경로를 output에 path에 제공을 할 수 있다.
    // filename: "main.js",
    clean: true, //구성 옵션을 바꿨을 경우 이전에 생성된 것들을 삭제해주는 기능
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // css-loader main.js 자바스크립트파일에서 css를 해석할 수 있게 도와줌
        // style-loader가 해석된 내용을 dist/index.html에 삽입을 해주는 역활을 한다.
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],
  devServer: {
    host: "localhost",
  },
};
