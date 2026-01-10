const count = 20; // 한번 새로운 item들이 추가될때 추가되는 item의 갯수
let itemIndex = 0; // item의 index

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const list = document.querySelector('.list');
        
        // 타겟 요소와 루트 요소가 교차하면 isIntersection true
        if (entry.isIntersecting) {
            for (let i = itemIndex; i < itemIndex + count; i++) {
                
                // item을 count 숫자 만큼 생성하고 list에 추가하기
                let item = document.createElement('p');

                item.textContent = i;
                item.className += 'item'
                list.appendChild(item)
            }

            // itemIndex를 +count해서 갱신
            itemIndex = itemIndex + count;
        }
    })
}, {root : null, threshold : 0.1});

// null을 설정하거나 아무것도 설정하지 않으면 브라우저 viewport가 기준이 된다.
// threshold 0.1은 타겟 요소의 10%가 루트 요소와 겹치면 콜백을 실행한다.

// list의 끝 부분을 알려주는 p, 타겟 요소를 관찰하기 시작
observer.observe(document.querySelector('.end'));