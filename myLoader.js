module.exports = function myLoader(item) {
    //item 은 로더함수로 처리할 파일입니다.
    console.log('Hello Loader');

    return item.replace('console.log(', 'alert(');
};
