# parcel-typescript-react-redux

typescript-react-redux with parcel

> 이 프로젝트는 노마트코드의 **_초보자를 위한 리덕스 101_** 을 보고 parcel, typescript로 변경하여 따라한 내용입니다.

## 프로젝트 환경설정

1. github repository 생성 parcel-typescript-react-redux
2. local pc에서 프로젝트가 생성될 폴더에서 git clone https://github.com/antnf3/parcel-typescript-react-redux.git 실행
3. yarn init
4. git add .
5. git commit -m "first init"
6. git push origin master

## parcel 설치

```shell
> yarn global add parcel-bundler
```

## react 설치

```shell
> yarn add react react-dom @types/react @types/react-dom
```

## typescript 설정

```shell
> touch tsconfig.json
```

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "target": "es5",
    "jsx": "react",
    "baseUrl": "./src",
    "paths": {
      "~*": ["./*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 프로젝트 폴더구조

```shell
> mkdir src
> mkdir src/components
> mkdir src/routes
> touch index.html
> touch index.tsx
> touch src/components/App.tsx
> touch src/routes/Home.tsx
> touch src/routes/Detail.tsx
```

## 추가 패키지 설치

```shell
> yarn add react-router-dom @types/react-router-dom
> yarn add redux react-redux @types/react-redux
```

## Redux-Toolkit

```shell
> yarn add @reduxjs/toolkit
```

[✔] 1. createAction
[✔] 2. createReducer
[✔] 3. configureStore
[✔] 4. createSlice
