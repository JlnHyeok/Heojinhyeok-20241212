# 올웨이즈 프론트엔드 엔지니어 채용 과제

## 개발 환경 설정

### 1. node.js 설치

vite를 이용해 프로젝트가 build되기 때문에 18.20.2 이상의 node.js를 설치해 주세요.

**node.js 사이트에서 설치**

- https://nodejs.org/ko/

**nvm으로 node.js 설치**

```
# 18.20.2 이상의 버전이 설치되어 있지 않은 경우 설치해 주세요.
$ nvm install 18.20.2

$ nvm use 18.20.2
```

### 2. 의존성 설치

```
# yarn이 설치되어 있지 않은 경우 설치해 주세요.
$ npm install --global yarn

$ yarn install
```

### 3. 로컬 서버 실행

```
$ yarn dev
```

- http://localhost:5173

## 질문

### 1. 자신의 기술적인 역량을 바탕으로 가장 크게 임팩트(테크적인 임팩트, 비즈니스 임팩트 등)를 만들어 낸 사례가 있다면 그 이유와 함께 작성해주시기 바랍니다.
저는 새로운 기술을 학습하고 이를 실제 프로덕션 환경에 적용하는 데 있어 빠르게 적응하고 성과를 내는 강점을 가지고 있습니다.

구체적으로, **MSW(Mock Service Worker)**를 도입하여 백엔드 의존성을 최소화한 개발 환경을 구축함으로써 팀이 백엔드 개발 상황에 구애받지 않고 독립적으로 작업을 진행할 수 있도록 지원했습니다. 이를 통해 개발 속도가 향상되고 팀 간 협업이 더욱 원활해졌습니다.

또한, GitHub Actions를 활용해 배포 자동화 시스템을 구축하여, 반복적인 수작업을 제거하고 배포 프로세스를 간소화했습니다. 이는 개발팀의 생산성을 크게 향상시키는 데 기여했습니다.

그 외에도, Web 기반 프로젝트를 C# 기반의 WPF 애플리케이션으로 성공적으로 마이그레이션한 경험이 있습니다. 당시 C#을 사용해 본 적이 없었지만, 짧은 시간 안에 기술을 익히고 이를 적용하여 프로젝트를 무사히 완료했습니다.

인프라 업무를 해본 적이 없던 시점에서도 빠르게 기술을 습득하여, Data Pipeline을 구축하고 Grafana를 활용한 시스템 모니터링 대시보드를 설계 및 구현했습니다. 이를 통해 시스템의 상태를 한눈에 파악할 수 있는 환경을 제공하여 운영 효율성을 높였습니다.

이러한 경험들은 새로운 기술과 환경에 빠르게 적응하며 문제를 해결하는 제 역량을 증명한 사례들입니다. 저는 이를 기반으로 팀과 프로젝트에 실질적인 가치를 제공하며, 기술적 임팩트를 만들어내는 개발자로 성장하고 있습니다.

### 2. 인생이나 커리어 관점에서 향후 목표가 있으시다면 작성해 주시기 바랍니다.
저는 **사람은 항상 변화하고 발전하는 존재**라고 믿습니다. 매일 같은 상태로 반복되는 삶은 지루하기 마련이고, 어제와는 조금이라도 다른 오늘을 만들어가는 과정에서 소소한 즐거움을 느끼며 살아가는 것이 인간 본연의 모습이라고 생각합니다. 이러한 관점에서, **어제보다 나은 자신**을 만들어가는 데 감사함을 느끼며 이를 성장의 원동력으로 삼고 있습니다.

앞으로도 이런 마음가짐을 유지하며, 한 가지 분야에만 특출난 개발자가 아니라 **강점을 가진 분야를 바탕으로 여러 분야에 능통한 제너럴리스트**로 성장하는 것이 제 목표입니다. 특정 영역에 국한되지 않고, 다양한 기술과 지식을 익히며 더 넓은 관점으로 문제를 해결할 수 있는 개발자가 되고자 합니다.

또한, 개발자에게 **FE와 BE처럼 영역을 구분하며 하나의 영역만 습득하는 것은 한계가 있다고 생각합니다.** 다양한 지식을 두루 갖추어야 전체적인 틀을 이해하는 안목이 생기고, 이를 통해 본인의 전문 분야에서도 더 깊은 역량을 발휘할 수 있다고 믿습니다. 나아가, 업무와 관계없이 누구나 저를 믿고 질문할 수 있는 신뢰받는 개발자로 성장하고 싶습니다.

## 요구 사항 Check List
- 기능 구현
  - [x] 1. 타임 딜 페이지 구현
    - [x] 1.1. 순삭 특가 섹션 화면 구현
    - [x] 1.2. 브랜드 딜 섹션 화면 구현
      - [x] 1.2.1. `전체보기` 클릭 시 브랜드 딜 목록으로 이동
      - [x] 1.2.2. 할인 종료 시간 타이머 표시 및 시간에 따라 작동 기능 구현
      - [x] 1.2.3. 타이머 종료 시 `할인 종료` 문구 표시
    - [x] 1.3. 타임 특가 섹션 화면 구현
      - [x] 1.3.1 탭이 없는 경우 current 에 대한 데이터 표시
      - [x] 1.3.2 탭이 있는 경우 첫번째 탭은 current, 두번째 탭은 next 데이터 표시
      - [x] 1.3.3 타임 특가 (시간에 따라) 구현 완료
      - [x] 1.3.4 오픈하지 않은 시간대의 경우 `오픈 예정` 표시
      - [x] 1.3.5 10,000개가 넘는 데이터를 가정하여 무한 스크롤 구현
  - [x] 2.브랜드 딜  페이지 구현
    - [x] 2.1 `전체보기`를 통해 진입한 경우, 첫번째 API 호출 생략, 캐싱 데이터 사용
    - [x] 2.2 프로그레스 바 구현
    - [x] 2.3 프로그레스 바가 화면에 보일 시, 애니메이션 작동 구현
    - [x] 2.4 무한 스크롤 구현
  - [x] 3. 에러 및 로딩 처리
    - [x] 3.1 네트워크 요청 시, Loading 처리.
    - [x] 3.2 에러 발생에 따라 ErrorBoundary 를 사용하여 에러 처리
    - [x] 3.3 타임 딜 페이지에서 타임 특가 세션 에러 시 전체 에러 표시, 그 외에는 해당 섹션에만 에러 처리 후 타임 특가 세션은 정산 표시
    
## 과제 구현에 대한 설명
- 채택한 라이브러리
  - `react` `tanstack-query` `axios` `dayjs` `embla-carousel-react`
- Carousel 구현을 위해 `embla-carousel-react` 를 사용하였는데, 여러 라이브러리를 찾아보다가 해당 라이브러리가 문서화 및 예제가 잘 정리되어 있고, 타 라이브러리에 비해 용량이 적으며 (약 50kb) 업데이트 일자도 최근에 진행되었기에 채택.
- `tanstack-query` 를 사용하여 네트워크 요청을 최소화하도록 구현하였고, 다량의 데이터 로드 시 전체 데이터를 한번에 보여주는 것 보다 무한 스크롤을 사용하여 렌더링 최적화 적용.
- `axios` 와 `graphql` 중 고민하였으나, 현재 프로젝트 규모도 작고, 현재 데이터들이 비교적 간단하고 정형화 되어있어 `axios` 로도 충분할 것 같았기에 `axios` 를 사용하여 개발 진행.
- ErrorBoundary 와 Fallback 을 사용하여 에러 처리.
- `Tailwind` 와 `css` 중 고민하다가 기본으로 있는 button 컴포넌트가 `css` 로 되어있어 통일감을 주고자 `css` 로 스타일링 진행. 후에 작업하다가 확인해보니 Suspense 의 Loading 부분이 `Tailwind` 형식으로 되어있길래 그냥 `Tailwind` 로 개발할걸..하고 생각이 들었음..
    
## 강조하고 싶은 부분
- 무한 스크롤을 구현하다가 데이터 개수가 홀수로 들어오면 마지막 한칸이 빈 채로 다음 줄로 넘어가는 것이 신경쓰였습니다. 이를 어떻게 처리할까 고민하다가 아래처럼 flatMap 을 사용하여 데이터를 나눠서 렌더링하지않고 합쳐서 렌더링하니 원하던 대로 구현이 가능했습니다.
  ```ts
  export const useVisibleItems = <T extends ItemList>(
    deals: IInfinityResponse<T> | undefined
  ): T["itemList"][number][] => {
    const [visibleItems, setVisibleItems] = useState<T["itemList"][number][]>([]);
  
    useEffect(() => {
      if (!deals) return;
      const allItems = deals.pages.flatMap((page) => page.itemList);
      setVisibleItems(allItems);
    }, [deals]);
  
    return visibleItems;
  };
  ```
- 전체보기를 클릭해서 브랜드 딜 페이지로 이동할 때, API 호출을 하지 않고 기존 데이터를 쓰기위해 어떤식으로 해야할 지 고민했습니다. 전체보기 클릭 시 데이터를 직접적으로 넘기고 이 경우에만 API 호출을 막아야하나 생각했다가 앞서 캐싱한 데이터를 사용하면 요구사항에 맞게 기능이 구현될 것 같아서 코드를 작성했습니다. **그런데** 앞서 호출한 쿼리는 `useSuspenseQuery` 를 사용했었고 브랜드 딜 페이지에서는 `useInfiniteQuery` 를 사용해서 캐싱된 데이터의 형태가 다르게 나와 에러가 발생하여서 코드를 아래와 같이 수정함으로써 문제를 해결하였습니다. (**queryKey** 를 useSuspense 와 다르게 주고 **initialData** 를 설정.)
  ```ts
  export const useInfiniteBrandDeals = ({
    params,
    queryClient,
    options,
  }: {
    params: IBrandDealParams;
    queryClient?: QueryClient;
    options?: Omit<
      UseInfiniteQueryOptions<TBrandDealResponse, Error>,
      "queryKey" | "queryFn"
    >;
  }) => {
    return useInfiniteQuery({
      queryKey: [dealQueryKeys.brandDeal.all],
      queryFn: ({ pageParam = 1 }: { pageParam: number | unknown }) =>
        brandDealService.getBrandDeals({ ...params, page: pageParam }),
  
      // 초기 데이터를 캐싱하여 사용함으로써, 네트워크 요청을 줄일 수 있음
      initialData: () => {
        const cachedData = queryClient?.getQueryData(
          dealQueryKeys.brandDeal.all
        ) as TBrandDealResponse;
        return cachedData ? { pages: [cachedData], pageParams: [1] } : undefined;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.isLastPage ? undefined : allPages.length + 1;
      },
      ...options,
    });
  };
  ```
## 설계 의도
- 폴더 구조
  ```bash
  src
  ├── App.tsx
  ├── index.css
  ├── style.css
  ├── api
  │   ├── client.ts
  │   ├── queryKeys.ts
  │   └── services
  ├── assets
  │   ├── Chevron.tsx
  │   └── index.ts
  ├── components
  │   ├── feature
  │   ├── index.ts
  │   ├── shared
  │   └── ui
  ├── hooks
  │   ├── custom
  │   ├── mutations
  │   └── queries
  ├── main.tsx
  ├── pages
  │   ├── deals
  │   └── index.ts
  ├── router
  │   └── index.tsx
  ├── types
  │   └── deal
  └── utils
      └── date.ts
  ```
- `api`
  - client.ts - 공통 설정을 정의하여 API 호출 인터페이스 제공.
  - queryKeys.ts - 캐싱 키를 중앙에서 관리하여 코드 가독성 향상을 위해 작성.
  - services - 도메인 별 API 호출 로직 작성.
- `components`
  - feature - 특정 기능 또는 페이지에 속하는 컴포넌트 관리
  - shared - 여러 곳에서 공통적으로 사용되는 로직 중심의 컴포넌트 관리
  - ui - 공통 ui (디자인 중심) 컴포넌트 관리
  - index.ts - components 내의 모든 컴포넌트를 일괄적으로 export 하여 외부에서 import 시 편의성 제공.
- `hooks`
  - custom - 프로젝트에서 공통적으로 사용하는 커스텀 훅 관리
  - mutations - 현 과제에서는 사용하지 않았지만 `useMutation` 훅 정의 (생성, 업데이트, 삭제)
  - queries - `useQuery` 훅 정의 (조회)
- `pages` - 각 페이지 단위의 컴포넌트 관리
- `types` - API 관련 (timeDeal, brandDeal, lureDeal 등) Type 을 정의
- `utils` - 공통으로 사용 될 함수 관리.
    
## 아쉬웠던 점 및 개선할 부분
- 회사 프로젝트랑 겹쳐서 급하게 수행했기에 그 점이 많이 아쉽고, 회사에서는 `svelteKit` 을 사용해서 react 와 tanstack-query 를 사용하는건 오랜만이라 폴더 구조나 로직 작성할 때 어색한게 많았습니다.
- components 들을 쪼개는 부분이 미흡하여 공통 컴포넌트들을 추출해내려고 많이 해멨었는데 여유가 된다면 전반적인 코드 구조를 개선해보고 싶습니다.
