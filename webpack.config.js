const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./src/app.js'),
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },

    module: {
        rules: [
            // 여기서 로더를 추가할 수 있습니다.
            // {
            //     // 로더가 처리해야할 파일의 패턴(정규표현식)입니다.
            //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
            //     // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
            //     test: /\.js$/,
            //     use: [
            //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
            //         path.resolve('./myLoader.js'),
            //     ],
            // },
            {
                test: /\.css$/,
                // 로더는 왼쪽에서 오른쪽으로 순서대로 작업하기때문에 아래와 같이 적어주도록합니다.
                // 순서를 잘못적어주면 아직 불러온 css로더가 없기때문에 에러가 납니다.
                use: ['style-loader', 'css-loader'],
            },
            {
                // 여기 추가합니다.
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '배너데쓰요' + new Date().toLocaleString(),
        }),
    ],
};
