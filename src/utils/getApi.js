import axios from "axios";

const dataRequest = axios.create({
    baseURL: "http://localhost:3005",
});

export const apiData = () => dataRequest.get("/data");

// // User相關的 api
// const userRequest = axios.create({
//     baseURL: "https://api/user/",
// });
// // 文章相關的 api
// const articleRequest = axios.create({
//     baseURL: "https://api/article/",
// });
// // 搜尋相關的 api
// const searchRequest = axios.create({
//     baseURL: "https://api/search/",
// });

// // User 相關的 api
// export const apiUserLogin = (data) => userRequest.post("/signIn", data);
// export const apiUserLogout = (data) => userRequest.post("/signOut", data);
// export const apiUserSignUp = (data) => userRequest.post("/signUp", data);

// // 文章相關的 api
// export const apiArticleItem = () => articleRequest.get("/ArticleItem");
// export const apiArticleMsg = (data) => articleRequest.post("/ArticleMsg", data);
// export const apiArticleLink = (data) =>
//     articleRequest.post("/ArticleLink", data);

// // 搜尋相關的 api
// export const apiSearch = (data) =>
//     searchRequest.get(`/Search?searchdata=${data}`);
// export const apiSearchType = () => searchRequest.get(`/SearchType`);
