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
    const url = '/sign-in';
    return axiosClient.post(url, payload);
  },

  getMe = async (payload) => {
    const url = '/me';
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
    const accessToken = `${token_type} ${access_token}`;
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('expired_at', expired_at); // expired_at is a timestamp
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

Các bạn hãy tạo ra login form bằng UI lib và Form lib mà project của bạn đang sử dụng hen. Ở đây mình dùng

- UI Lib: [Reactstrap](https://reactstrap.github.io/)
- Form management: [React Hook Form](https://react-hook-form.com/)
- Form validation schema: [Joi](https://hapi.dev/module/joi/)
- Code này có sử dụng thêm một số hàm do mình tự viết nên code này chưa chạy được nhé mn, code chỗ này mang tính chất tham khảo thôi nghen.

:::tip

Mình tạo `SignInForm` component chỉ để phục vụ cho việc render giao diện cho cái SignIn Form và phần validation. Nhưng khi submit thì mình để việc handle logic cho component cha xử lý, đó là lý do bạn thấy lúc `handleSignInSubmit()`, mình gọi cái props do component truyền vào. 

:::

```js title="/features/auth/SignInForm/index.jsx" {31-34}
function SignInForm(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const schemaKeys = {
    login: Joi.string()
      .min(3)
      .max(100)
      .required()
      .messages({
        'string.min': 'Username must be at least 3 characters.',
        'string.max': 'Username too long.',
      }),

    password: Joi.string()
      .min(6)
      .required()
      .messages({
        'string.empty': t('common.validations.required_password'),
        'string.min': t('common.validations.minlength_password', { number: 6 }),
      })
  };
  const { validationResolver, validationSchema } = useValidationResolver(schemaKeys);
  const form = useForm({
    mode: "onBlur",
    defaultValues: { username: '', password: '' },
    validationResolver,
    validationContext: { validationSchema }
  });

  const handleSignInSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
  };

  return (
    <div className="sign-in-form">
      <Form onSubmit={form.handleSubmit(handleSignInSubmit)}>
        <InputField
          name="username"
          label="Username"
          form={form}
        />

        <PasswordField
          name="password"
          label="Password"
          form={form}
          showForgotLink
        />

        <FormGroup className="sign-in-form__actions">
          <Button block color="primary">Log in</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
``` 


## 4. Handle login form submit

Sau khi đã có được `LoginForm` component, mình tiếp tục handle logic khi user click nút `Log in`. Cụ thể ở đây, khi submit mình handle:

- Tiến hành gọi action `signIn()` để gửi `username + password` lên server, đổi lại `access_token` và lưu nó vào `localStorage`.
- Tiếp đến, dùng access_token gọi `getMe()` để lấy đầy đủ thông tin của user hiện tại bao gồm: thông tin cơ bản, settings, roles/permissions, ...


Ở đoạn code phía dưới, mọi người sẽ thấy có 2 dòng code thế này, đặc biệt là liên quan tới `unwrapResult`

```js {2}
const signInResult = await dispatch(signIn(payload));
unwrapResult(resultAction); // MUST HAVE THIS LINE TO CATCH ERROR
```

Cái này là của Redux Toolkit, chức năng như sau: 

- `Dòng 1`: có thể dùng `await` cho async action để handle những trường hợp như: đợi action chạy xong, mình làm một việc khác, đơn giản như redirect tới nơi nào đó chẳng hạn.
- `Dòng 2`: phải có cái `unwrapResult()` thì khi có lỗi ở bên action, bạn có thể catch ở đây và show lỗi lên UI chẳng hạn. Không có cái này, sẽ không bắt được lỗi bên action nhé mọi người. 

:::tip

Việc tách logic và UI ra 2 component khác nhau giúp bạn có cái nhìn tổng quát hơn, tốt hơn và tập trung vào mỗi nhiệm vụ hơn.

- Ở component `SignInForm`: render UI + validation, không đụng logic, lúc submit đẩy lên component `SignIn`
- Ở component `SignIn`: chứa `SignInForm` và handle logic khi form submit.

Nhìn tổng quát code dưới đây, nó khá dễ hiểu, à mình biết có SignInForm và khi submit mình làm cái này, và không cần biết SignInForm nó render ra cái gì kệ nó 😊

:::


```js title="/features/auth/SignIn/index.jsx" {10-29,38}
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import { getMe, signIn } from "app/customerSlice";
import SignInForm from "../SignInForm";

function SignIn(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async values => {
    try {
      const payload = {
        ...values,
        your_extra_param: 'param value here',
      };
      const signInResult = await dispatch(signIn(payload));
      unwrapResult(resultAction); // MUST HAVE THIS LINE TO CATCH ERROR

      // Usually, we have a getMe() endpoint to fully fetch all information needed for current logged in user
      const getMeResult = await dispatch(getMe());
      const loggedInUser = unwrapResult(resultAction); // MUST HAVE THIS LINE TO CATCH ERROR
      console.log({loggedInUser});

      history.push('/success-url-after-sign-in');
    } catch (error) {
      toast.error(error.message);
      console.log("Failed to sign in : ", error);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in__logo-icon">
        <img src={Images.LOGO_URL} alt="company logo here" />
      </div>

      <SignInForm onSubmit={handleSubmit} />
    </div>
  );
}
```


## 5. Tự động gắn JWT vào requests

Cuối cùng sau khi đăng nhập thành công và thực hiện `getMe()` và những requests khác nữa. Làm thế nào để tự động gắn token vào requests mà mình không cần phải làm đi làm lại nhiều lần. 

:::tip Dùng chức năng request interceptor của axios 😍

Cụ thể là trong `axiosClient`, chúng ta hãy thêm vào một `request interceptor` để kiểm tra xem token có tồn tại không? Nếu có hãy tự động gắn vào request hehe.

:::

```js title="/api/axiosClient.js" {9-23}
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {};

  const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  if (accessToken) {
    customHeaders.Authorization = accessToken;
  }

  return {
    ...config,
    headers: {
      ...customHeaders,  // auto attach token
      ...config.headers, // but you can override for some requests
    }
  };
});

export default axiosClient;
```

Đơn giản đúng không nào? hehe có thể bạn vẫn còn thắc mắc chỗ này 

```js {3-6}
return {
  ...config,
  headers: {
    ...customHeaders,  // auto attach token
    ...config.headers, // but you can override for some requests
  }
};
```

Cái object `config` là do mỗi request truyền vào, mỗi request sẽ có một config khác nhau tùy mình truyền vào tham số gì. Thỉnh thoảng, chúng ta muốn đổi `Authorization` header thành một token khác để thực hiện gọi API cho một bên API khác chẳng hạn, thì phải làm sao? Đó là lý do có khúc code này, ưu tiên cái headers được truyền từ `config` hơn là cái headers được tự động attach token vào hehee.

Một ví dụ đơn giản cho việc đổi cả `baseURL` và `headers` sẽ như sau, lưu ý tham số `config` nhé, đó chính là object được nhận ở `request interceptor` hehee

```js
const getExternalApi = () => {
  const url = '/resource-name';
  const config = {
    baseURL: 'https://your-new-base-api-url.com/api',
    headers: {
      Authorization: 'your-new-token-to-use-in-new-api'
    },
  };

  return axiosClient.get(url, config);
}
```


Chúc các bạn thành công nhé! 😉 <br/>