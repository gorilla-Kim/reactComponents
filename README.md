# reactComponents



### 🔨 Redux 사용하기

`npx create-react-app exerciseProject`

`npm i redux react-redux --save`

* 해당 module들을 설치해주세요.

**👉 Dir 구성**

* public
* src
  * components
    * props를 받아 화면에 보여줄 UI를 그려주는 부분 
  * containers
    * components에서 필요한 props를 만들어 넘겨주는 부분
  * modules
    * redux에서 사용할 reducer파일들을 만들어 관리하는 곳
    * index.js에서 모든 reducer들을 combine한다.

### JSON_SERVER

`npx json-server ./data.json --port 4000`