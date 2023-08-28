---
title: HTTP接口管理平台 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# HTTP接口管理平台

> v1.0.0

Base URLs:

* <a href="http://127.0.0.1:7001">开发环境: http://127.0.0.1:7001</a>

# 用户模块

## POST register

POST /user/register

> Body 请求参数

```yaml
username: wxw
password: "112233"
email: 123456@qq.com
role: 开发者

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» username|body|string| 否 |none|
|» password|body|string| 否 |none|
|» email|body|string| 否 |none|
|» role|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 400,
  "message": "用户已存在"
}
```

```json
{
  "code": 200,
  "message": "注册成功",
  "data": {
    "created_at": "zhMon Aug 28 2023 11:59:31 GMT+0800 (中国标准时间)",
    "id": 15,
    "username": "wxw4",
    "password": "c17d562c1894ff570047c865b5ed16e5",
    "email": "112233@qq.com",
    "role": "开发者",
    "updated_at": "2023-08-28T03:59:31.580Z"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» updated_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» username|string|true|none||none|
|»» password|string|true|none||none|
|»» email|string|true|none||none|
|»» role|string|true|none||none|

## POST login

POST /user/login

> Body 请求参数

```yaml
email: 123456@qq.com
password: "112233"
role: 开发者

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» email|body|string| 否 |none|
|» password|body|string| 否 |none|
|» role|body|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "created_at": "string",
    "updated_at": "string",
    "id": 0,
    "username": "string",
    "email": "string",
    "password": "string",
    "role": "string",
    "deleted_at": null
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» updated_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» username|string|true|none||none|
|»» email|string|true|none||none|
|»» password|string|true|none||none|
|»» role|string|true|none||none|
|»» deleted_at|null|true|none||none|

## DELETE userLoginOut

DELETE /user/{userId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer| 是 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 项目模块

## POST createProject

POST /project/create

> Body 请求参数

```yaml
name: HTTP管理1
description: byteDance—project

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» name|body|string| 否 |none|
|» description|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "项目已存在"
}
```

```json
{
  "code": 200,
  "message": "项目创建成功",
  "data": {
    "created_at": "zhMon Aug 28 2023 12:45:15 GMT+0800 (中国标准时间)",
    "id": 7,
    "name": "HTTP管理5",
    "description": "byteDance—project",
    "updated_at": "2023-08-28T04:45:15.174Z"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» updated_at|string|true|none||none|

## PUT updateProject

PUT /project/update

> Body 请求参数

```yaml
name: http管理1
description: byte
id: "0"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» name|body|string| 否 |none|
|» description|body|string| 否 |none|
|» id|body|number| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {
    "created_at": "string",
    "id": 0,
    "name": "string",
    "description": "string",
    "updated_at": "string",
    "deleted_at": null
  },
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|
|» msg|string|true|none||none|

## DELETE deleteProject

DELETE /project/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|

## GET projectList

GET /project

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "项目列表获取成功",
  "data": [
    {
      "created_at": "zhSun Aug 27 2023 12:07:00 GMT+0800 (中国标准时间)",
      "id": 1,
      "name": "http管理1",
      "description": "bytedance",
      "updated_at": "2023-08-27T04:39:01.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhSun Aug 27 2023 12:48:49 GMT+0800 (中国标准时间)",
      "id": 3,
      "name": "HTTP管理2",
      "description": "byteDance—project-8.27",
      "updated_at": "2023-08-27T04:48:49.000Z",
      "deleted_at": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|

## GET findProjectsByUserId

GET /project/user/{userId}

通过当前用户，查找该用户所拥有的项目，若用户无项目，则前端项目列表为空。即用户打开软件登录成功后的界面需要用到的数据。

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "用户的项目查找成功",
  "data": [
    {
      "created_at": "zhSun Aug 27 2023 12:07:00 GMT+0800 (中国标准时间)",
      "id": 1,
      "name": "http管理1",
      "description": "bytedance",
      "updated_at": "2023-08-27T04:39:01.000Z",
      "deleted_at": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» created_at|string|false|none||none|
|»» id|integer|false|none||none|
|»» name|string|false|none||none|
|»» description|string|false|none||none|
|»» updated_at|string|false|none||none|
|»» deleted_at|null|false|none||none|

# 项目成员模块

## POST createProjectUser

POST /project/member/create

> Body 请求参数

```yaml
projectId: 0
email: string
role: string
username: qwe1

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» projectId|body|number| 否 |none|
|» email|body|string| 否 |none|
|» role|body|string| 否 |none|
|» username|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "该项目成员本身存在数据库，现已将其加入项目，其信息除邮箱号之外，其本身信息保留不变",
  "data": {
    "created_at": "zhMon Aug 28 2023 19:23:08 GMT+0800 (中国标准时间)",
    "id": 17,
    "username": "qwe1",
    "email": "112233@qq.com",
    "password": "992f3c4e7ec9a0e96173284c816612bd",
    "role": "测试者",
    "updated_at": "2023-08-28T11:23:08.000Z",
    "deleted_at": null
  }
}
```

```json
{
  "code": 200,
  "message": "成员添加成功",
  "data": {
    "created_at": "zhMon Aug 28 2023 19:25:28 GMT+0800 (中国标准时间)",
    "id": 18,
    "username": "qwe1",
    "email": "112234@qq.com",
    "password": "992f3c4e7ec9a0e96173284c816612bd",
    "role": "测试者",
    "updated_at": "2023-08-28T11:25:28.667Z"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» username|string|true|none||none|
|»» email|string|true|none||none|
|»» password|string|true|none||none|
|»» role|string|true|none||none|
|»» updated_at|string|true|none||none|

## DELETE deleteProjectUser

DELETE /project/member/{id}

删除项目成员只是将该成员从项目中移除，但不是删除其账户（数据库中仍存在其记录）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|

## GET projectUserList

GET /project/member

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "成员列表获取成功",
  "data": [
    {
      "created_at": "zhSun Aug 27 2023 22:18:32 GMT+0800 (中国标准时间)",
      "id": 1,
      "project_id": 1,
      "user_id": 12,
      "updated_at": "2023-08-27T14:18:32.000Z",
      "deleted_at": null,
      "user": null
    },
    {
      "created_at": "zhSun Aug 27 2023 22:31:49 GMT+0800 (中国标准时间)",
      "id": 3,
      "project_id": 1,
      "user_id": 14,
      "updated_at": "2023-08-27T14:31:49.000Z",
      "deleted_at": null,
      "user": {
        "id": 14,
        "username": "qwe1",
        "email": "123456@qq.com",
        "role": "开发者"
      }
    },
    {
      "created_at": "zhMon Aug 28 2023 19:23:08 GMT+0800 (中国标准时间)",
      "id": 4,
      "project_id": 1,
      "user_id": 17,
      "updated_at": "2023-08-28T11:23:08.000Z",
      "deleted_at": null,
      "user": {
        "id": 17,
        "username": "qwe1",
        "email": "112233@qq.com",
        "role": "测试者"
      }
    },
    {
      "created_at": "zhMon Aug 28 2023 19:23:59 GMT+0800 (中国标准时间)",
      "id": 5,
      "project_id": 1,
      "user_id": 17,
      "updated_at": "2023-08-28T11:23:59.000Z",
      "deleted_at": null,
      "user": {
        "id": 17,
        "username": "qwe1",
        "email": "112233@qq.com",
        "role": "测试者"
      }
    },
    {
      "created_at": "zhMon Aug 28 2023 19:25:28 GMT+0800 (中国标准时间)",
      "id": 6,
      "project_id": 1,
      "user_id": 18,
      "updated_at": "2023-08-28T11:25:28.000Z",
      "deleted_at": null,
      "user": {
        "id": 18,
        "username": "qwe1",
        "email": "112234@qq.com",
        "role": "测试者"
      }
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» project_id|integer|true|none||none|
|»» user_id|integer|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|
|»» user|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» username|string|true|none||none|
|»»» email|string|true|none||none|
|»»» role|string|true|none||none|

# 接口模块

## POST createInterface

POST /interface/create

> Body 请求参数

```json
{
  "projectId": 1,
  "name": "login",
  "description": "登录",
  "url": "/login",
  "method": "get",
  "request_params": {
    "username": "wxw",
    "password": "123456"
  },
  "response_data": {
    "msg": "success"
  }
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» projectId|body|integer| 是 |none|
|» name|body|string| 是 |none|
|» url|body|string| 是 |none|
|» method|body|string| 是 |none|
|» request_params|body|object| 是 |none|
|»» username|body|string| 是 |none|
|»» password|body|string| 是 |none|
|» response_data|body|object| 是 |none|
|»» msg|body|string| 是 |none|
|» description|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "接口添加成功",
  "data": {
    "created_at": "zhMon Aug 28 2023 00:13:24 GMT+0800 (中国标准时间)",
    "id": 6,
    "project_id": 1,
    "name": "login",
    "description": "登录",
    "url": "/login",
    "method": "get",
    "request_params": {
      "username": "wxw",
      "password": "123456"
    },
    "response_data": {
      "msg": "success"
    },
    "updated_at": "2023-08-27T16:13:24.681Z"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» project_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» url|string|true|none||none|
|»» method|string|true|none||none|
|»» request_params|object|true|none||none|
|»»» username|string|true|none||none|
|»»» password|string|true|none||none|
|»» response_data|object|true|none||none|
|»»» msg|string|true|none||none|
|»» updated_at|string|true|none||none|

## DELETE deleteInterface

DELETE /interface

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|integer| 否 |none|
|version|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET interfaceList

GET /interface

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer| 否 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "接口列表获取成功",
  "data": [
    {
      "created_at": "zhSun Aug 27 2023 23:53:38 GMT+0800 (中国标准时间)",
      "id": 1,
      "project_id": 1,
      "name": "register",
      "description": null,
      "url": "/register",
      "method": "post",
      "request_params": null,
      "response_data": null,
      "updated_at": "2023-08-27T15:53:38.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhSun Aug 27 2023 23:57:59 GMT+0800 (中国标准时间)",
      "id": 2,
      "project_id": 1,
      "name": "login",
      "description": null,
      "url": "/login",
      "method": "get",
      "request_params": null,
      "response_data": null,
      "updated_at": "2023-08-27T15:57:59.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhSun Aug 27 2023 23:58:59 GMT+0800 (中国标准时间)",
      "id": 3,
      "project_id": 1,
      "name": "login",
      "description": null,
      "url": "/login",
      "method": "get",
      "request_params": null,
      "response_data": null,
      "updated_at": "2023-08-27T15:58:59.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhMon Aug 28 2023 00:07:33 GMT+0800 (中国标准时间)",
      "id": 4,
      "project_id": 1,
      "name": "复道六院克",
      "description": "次委已类连业区且府眼八格带三值石林后。位常包同与究者毛也况来族。办龙族当究党将照型总八行发往也。求织发她包响美头解率设装处石济般。",
      "url": "http://gilqawu.mx/xgnbgx",
      "method": "quis dolor Ut ullamco",
      "request_params": {
        "req": "update"
      },
      "response_data": {
        "msg": "success"
      },
      "updated_at": "2023-08-27T16:36:39.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhMon Aug 28 2023 00:13:24 GMT+0800 (中国标准时间)",
      "id": 6,
      "project_id": 1,
      "name": "login",
      "description": "登录",
      "url": "/login",
      "method": "get",
      "request_params": {
        "password": "123456",
        "username": "wxw"
      },
      "response_data": {
        "msg": "success"
      },
      "updated_at": "2023-08-27T16:13:24.000Z",
      "deleted_at": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» project_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string¦null|true|none||none|
|»» url|string|true|none||none|
|»» method|string|true|none||none|
|»» request_params|object|true|none||none|
|»»» req|string|false|none||none|
|»»» password|string|true|none||none|
|»»» username|string|true|none||none|
|»» response_data|object|true|none||none|
|»»» msg|string|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|

## PUT updateInterface

PUT /interface/update

> Body 请求参数

```json
{
  "version": "1.0.0",
  "id": 13,
  "projectId": 2,
  "name": "后习先无知",
  "description": "入感战度只观据少入亲习你究间支命。华提人土声应手合步基六型拉界太许开合。价接包存口正领直须性没响。干构两以领术九常之权发存接间。",
  "url": "http://hujh.aw/jhplglc",
  "method": "est culpa",
  "request_params": {},
  "response_data": {}
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» id|body|integer| 是 |none|
|» projectId|body|integer| 是 |none|
|» name|body|string| 是 |none|
|» description|body|string| 是 |none|
|» url|body|string| 是 |none|
|» method|body|string| 是 |none|
|» request_params|body|object| 是 |none|
|» response_data|body|object| 是 |none|
|» version|body|string| 是 |接口版本号|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "接口更新成功",
  "data": {
    "created_at": "zhMon Aug 28 2023 00:07:33 GMT+0800 (中国标准时间)",
    "id": 4,
    "project_id": 1,
    "name": "复道六院克",
    "description": "次委已类连业区且府眼八格带三值石林后。位常包同与究者毛也况来族。办龙族当究党将照型总八行发往也。求织发她包响美头解率设装处石济般。",
    "url": "http://gilqawu.mx/xgnbgx",
    "method": "quis dolor Ut ullamco",
    "request_params": {
      "req": "update"
    },
    "response_data": {
      "msg": "success"
    },
    "updated_at": "2023-08-27T16:42:31.120Z",
    "deleted_at": null
  }
}
```

```json
{
  "code": 200,
  "message": "接口更新成功,更新日志已添加",
  "data": {
    "created_at": "zhMon Aug 28 2023 21:13:27 GMT+0800 (中国标准时间)",
    "id": 13,
    "project_id": 2,
    "name": "后习先无知",
    "description": "入感战度只观据少入亲习你究间支命。华提人土声应手合步基六型拉界太许开合。价接包存口正领直须性没响。干构两以领术九常之权发存接间。",
    "url": "http://hujh.aw/jhplglc",
    "method": "est culpa",
    "request_params": {},
    "response_data": {},
    "updated_at": "2023-08-28T13:22:07.877Z",
    "deleted_at": null
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» project_id|integer|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» url|string|true|none||none|
|»» method|string|true|none||none|
|»» request_params|object|true|none||none|
|»» response_data|object|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|

# 接口版本管理模块

## GET interfaceVersion

GET /interface/version/{projectId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "项目的接口版本记录查找成功",
  "data": [
    {
      "created_at": "zhMon Aug 28 2023 19:32:56 GMT+0800 (中国标准时间)",
      "id": 1,
      "interface_id": 7,
      "version": "1.0.0",
      "log": null,
      "updated_at": "2023-08-28T11:32:56.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhMon Aug 28 2023 19:33:42 GMT+0800 (中国标准时间)",
      "id": 2,
      "interface_id": 8,
      "version": "1.0.0",
      "log": null,
      "updated_at": "2023-08-28T11:33:42.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhMon Aug 28 2023 19:33:50 GMT+0800 (中国标准时间)",
      "id": 3,
      "interface_id": 9,
      "version": "1.0.0",
      "log": null,
      "updated_at": "2023-08-28T11:33:50.000Z",
      "deleted_at": null
    },
    {
      "created_at": "zhMon Aug 28 2023 19:34:00 GMT+0800 (中国标准时间)",
      "id": 4,
      "interface_id": 10,
      "version": "1.0.0",
      "log": null,
      "updated_at": "2023-08-28T11:34:00.000Z",
      "deleted_at": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» created_at|string|true|none||none|
|»» id|integer|true|none||none|
|»» interface_id|integer|true|none||none|
|»» version|string|true|none||none|
|»» log|null|true|none||none|
|»» updated_at|string|true|none||none|
|»» deleted_at|null|true|none||none|

# 数据模型

<h2 id="tocS_Tag">Tag</h2>

<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 1,
  "name": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||标签ID编号|
|name|string|false|none||标签名称|

<h2 id="tocS_Category">Category</h2>

<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 1,
  "name": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||分组ID编号|
|name|string|false|none||分组名称|

<h2 id="tocS_Pet">Pet</h2>

<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 1,
  "category": {
    "id": 1,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 1,
      "name": "string"
    }
  ],
  "status": "available"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||宠物ID编号|
|category|[Category](#schemacategory)|true|none||分组|
|name|string|true|none||名称|
|photoUrls|[string]|true|none||照片URL|
|tags|[[Tag](#schematag)]|true|none||标签|
|status|string|true|none||宠物销售状态|

#### 枚举值

|属性|值|
|---|---|
|status|available|
|status|pending|
|status|sold|

