---
id: dang-nhap-voi-jwt
title: Các bước thực hiện đăng nhập với JWT 🎉
sidebar_label: Đăng nhập
image: https://images.unsplash.com/photo-1507470855518-469f3b3dad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80
---

Cùng mình xem qua các bước setup cho việc đăng nhập và quản lý JWT được trả về từ phía server như thế nào nha 😍

<!--truncate-->

Các bước cần thực hiện:
1. Setup userApi
2. Lưu thông tin user vào Redux
3. Chuẩn bị login form
4. Handle login form submit
5. Tự động gắn JWT vào requests

Rồi chiến thôi nào! 🚀

## 1. Setup userApi

Đầu tiên, mình cần một file API để làm việc với server. Ở đây các bạn thấy có 2 APIs là `signIn()` và `getMe()`

- **signIn()**: cái này mình sẽ gửi `username + password` lên server để đổi lại một `JWT` token
- Sau khi có thông tin token, mình sẽ lưu nó xuống `localStorage` cùng với thời gian token bị hết hạn. Phần này sẽ làm ở phía sau hehe.
- **getMe()**: khi có token, mình sẽ gọi lên server một lần nữa để lấy đầy đủ thông tin của user đang đăng nhập.

```js title="/api/userApi.js" {2-5}
const userApi = {
  signIn: (payload) => {
    // Cái đường dẫn API này tuỳ thuộc vào BE của bạn cho cái nào thì dùng cái đó
    const url = '/users/sign-in';
    return axiosClient.post(url, payload);
  },

  getMe = async (payload) => {
    const url = '/users/me';
    const response = await axiosClient.get(url, payload);
    return response.data;
  }
}

export default userApi;
```

## 2. Lưu thông tin user vào Redux

Đa số website đều có thông tin đăng nhập của người dùng, và thông tin này đươc sử dụng kha khá nhiều nơi trong hệ thống. Chính vì lý do đó, chúng ta sẽ thực hiện việc lưu thông tin người dùng vào redux nha. 😊

### Setup userSlice

```js title="/app/userSlice.js"
//  Thunk API
export const signIn = createAsyncThunk(
  'user/signIn',
  async (params, thunkAPI) => {
    const response = await userApi.signIn(params);

    // Save access token to storage
    const { access_token, token_type, expired_at } = response;
    const accessToken = token_type
      ? `${token_type} ${access_token}`
      : access_token;
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('expired_at', expired_at);

    return response.object;
  }
);

export const getMe = createAsyncThunk(
  'user/getMe',
  async (params) => userApi.getMe(params)
);


// ---------------------
//      MAIN SLICE
// ---------------------
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload || {};
    },
    [getMe.rejected]: (state, action) => {
      state.current = {};
    },

    [signIn.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }
});


const { reducer: userReducer } = userSlice;
export default userReducer;
```

### Thêm userReducer vào redux store

```js title="/app/store.js" {6}
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    // ... 
    user: userReducer,
  },
});

export default store;
```


## 3. Chuẩn bị login form

- 


## 4. Handle login form submit




## 5. Tự động gắn JWT vào requests






Chúc các bạn thành công nhé! 😉 <br/>
Nếu gặp vấn đề gì thì hãy thông báo lên group nhé! 🙂