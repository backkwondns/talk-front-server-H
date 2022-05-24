# Talk (KAKAO Talk Clone)

진행: 중단
태그: Apollo, Back-End, Express, Front-End, GraphQL, Material-UI, Mobx, MongoDB, NoSQL, Node.JS, React.JS, TypeScript

# Talk (채팅 App)

## 개인 프로젝트

## 1. 개발 동기 및 목표

개발 동기

- 프로젝트 고민 하던 중 최대한 많은 내용의 개발을 해볼 수 있는 프로젝트 고민
- 적당한 난이도와 적당한 기간에 개발할 수 있는 내용 선정
- 이전에 해보지 못하고 최근 인기를 얻고 있는 기술 사용

개발 목표

- 초기 카카오톡과 비슷한 컨텐츠를 구성
- GraphQL, Apollo, Material-UI 등등 최대한 많은 기술 활용

## 2.  결과물

친구목록 페이지

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled.png)

친구추가

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%201.png)

프로필 페이지

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%202.png)

채팅목록 페이지

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%203.png)

채팅창

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%204.png)

---

## 3. 디렉토리 구조

- src (React)
    - /atoms
        
        avatar.tsx
        
        button.tsx
        
        closeButton.tsx
        
        iconButton.tsx
        
        input.tsx
        
        list.tsx
        
        print.tsx
        
        index.ts
        
    - /interfaces
        
        atoms.interface.ts
        
        friend.interface.ts
        
        layout.interface.ts
        
        login.interface.ts
        
        organisms.interface.ts
        
        talks.interface.ts
        
        index.ts
        
    - /organisms
        
        friendListItem.tsx
        
        loading.tsx
        
        multiAvatar.tsx
        
        roomChat.tsx
        
        index.ts
        
    - /pages
        - /friend
            - /friends
                
                friends.container.tsx
                
                friends.tsx
                
            - /profile
                
                profile.container.tsx
                
                profile.tsx
                
        - /layout
            - /appHeader
                - /friendAdd
                    
                    friendAdd.container.tsx
                    
                    friendAdd.tsx
                    
                
                appHeader.container.tsx
                
                appHeader.tsx
                
            - /appFooter
                
                appFooter.container.tsx
                
                appFooter.tsx
                
            
            layout.tsx
            
        - /login
            
            login.container.tsx
            
            login.tsx
            
        - /register
            
            register.container.tsx
            
            register.tsx
            
        - /setting
            
            setting.container.tsx
            
            setting.tsx
            
        - /talk
            - room
                
                room.container.tsx
                
                room.tsx
                
            - talks
                
                talks.container.tsx
                
                talks.tsx
                
        
        index.ts
        
    - /stores
        
        friend.store.ts
        
        graphql.store.ts
        
        layout.store.ts
        
        login.store.ts
        
        root.store.ts
        
        talks.store.ts
        
    - /libs
        
        accessToken.ts
        
        common.ts
        
        time.ts
        
        index.ts
        
    
    App.tsx
    
    index.tsx
    
    router.tsx
    
- server (Express)
    - /db
        - /schema
            
            account.model.ts
            
            friend.model.ts
            
            talk.model.ts
            
        
        account.ts
        
        friend.ts
        
        talks.ts
        
    - /graphql
        - /account
            
            account.resolvers.ts
            
            account.schema.ts
            
        - /friend
            
            friend.resolvers.ts
            
            friend.schema.ts
            
        - /talks
            
            talks.resolvers.ts
            
            talks.schema.ts
            
        
        index.ts
        
    - /interface
        
        account.interface.ts
        
        friend.interface.ts
        
        talks.interface.ts
        
        index.ts
        
    - /libs
        
        auth.ts
        
        axiosGraphql.ts
        
        genToken.ts
        
        sendRefreshToken.ts
        
    
    server.ts
    

---

## 4. DB 구조

[Account](https://www.notion.so/552f582ddce3458dabc0512dd0fa78f4)

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%205.png)

[friend](https://www.notion.so/8529976d8c644d2ebb7c0a28bc604b80)

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%206.png)

[talk](https://www.notion.so/6b3da3aad14946a59de8736ede15ec9e)

![Untitled](Talk%20(KAKAO%20Talk%20Clone)%2022629985d35840b8ae56dca36afa1dee/Untitled%207.png)

---

## 5. 한계점

- 해당 프로젝트를 하던 중 팀 프로젝트를 할 기회가 생겨 현재 중단 상태