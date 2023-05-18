
const dev={
    BACK_END_API_ENDPOINT : "http://localhost:8080",
    API_KEY : "sldjfldsjfo08324lkjsdf124lkj23425264ljsdfklsjfl972394374_dev"
}

const prod={
    BACK_END_API_ENDPOINT : "https://userauth.com",
    API_KEY : "sldjfldsjfo08324lkjsdf124lkj23425264ljsdfklsjfl972394374"
}
const config=process.env.NODE_ENV === 'development' ? dev : prod

if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
}

export default  config