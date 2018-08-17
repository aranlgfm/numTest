<template>
  <div class="hello">
    <div>
        <h1>숫자야구</h1>
        <table id="numTable">
            <tr>
                <td id="notiText">숫자만 입력해주세요. 4자리 뒤의 숫자는 사라집니다.</td>
            </tr>
            <tr>
                <td>
                    <span id="noteMsg">{{ noteMsg }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <input @keyup="numOnly()" @keyup.13="enterIn()" v-model="myNumber" id="myNumber" type="text" maxlength="4">
                </td>
            </tr>
        </table>
    </div>
    <div id="btnDiv">
        <button v-on:click="enterIn()" id="btn" class="btnText">숫자입력</button>
        <button v-on:click="clickBtn()" id="rebtn" class="btnText">다시하기</button>
    </div>
    <div id="outNumBox">
        <table id="resTable">
            <tr>
            </tr>
        </table>
    </div>
    <div>{{sett}}</div>
  </div>
</template>

<script>
// var socket = io();

// 컴퓨터가 랜덤으로 1~9의 숫자로 된 3자리 숫자를 생성
// 플레이어가 입력한 숫자와 컴퓨터가 생성한 숫자를 비교
// 자리는 다르지만 같은 숫자가 있을 경우 볼
// 같은 자리에 같은 숫자가 왔을 경우 홈런
// 모두 다른 숫자이면 아웃
// 홈런, 볼, 아웃의 결과를 숫자 옆에 출력
// 맞을 때까지 반복
// 맞으면 게임종료메시지 출력
// 입력버튼 누르면 입력창으로 포커스이동
// 게임 끝나면 다시하기 버튼 눌러서 초기화하기

var com = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (var c = 0; c < 10000; c++) {
	var cRan = Math.floor(Math.random() * com.length);
	var temp = com[0];
	com[0] = com[cRan];
	com[cRan] = temp;
}
var comNum = com.slice(0, 4);

// 컴퓨터가 선택한 수를 확인
//console.log(comNum);

export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'aran test success',
			sett: '123',
			myNumber: [],
			noteMsg: '',
		};
	},
	methods: {
		clickBtn: function() {
			console.log('im clicked! 테스트임 지울 것 다시하기 버튼에 연결');
		},
		// 인풋텍스트에서 엔터 쳤을 경우
		enterIn: function() {
			this.checkNum();
		},
		numOnly: function() {
			// 숫자만 입력하기
			for (var i = 0; i < this.myNumber.length; i++) {
				var res = isFinite(this.myNumber[i]);
				if (!res) {
					var len = this.myNumber.length;
					if (i == 0) {
						this.myNumber = [];
					}
					this.myNumber = this.myNumber.slice(0, len - 1);
				}
			}
		},
		// 숫자계산 함수
		checkNum: function() {
			var pNum = this.myNumber;

			// 입력값이 있는지 확인
			if (pNum.length == 0) {
				this.noteMsg.fadeIn('slow');
				// $('#noteMsg').fadeIn('slow');
				// $('#noteMsg').text('입력된 값이 없습니다.');
				// $('#noteMsg').delay(700);
				// $('#noteMsg').fadeOut('slow');
				return;
			}

			//console.log(pNum);			// 플레이어가 입력한 숫자
			var myNum = [];
			myNum[0] = this.myNumber[0];
			myNum[1] = this.myNumber[1];
			myNum[2] = this.myNumber[2];
			myNum[3] = this.myNumber[3];

			// 이미 입력한 숫자를 다시 입력했는지 확인
		},
	},
};

console.log('test');
</script>



<style scoped lang="css" src="./num.css"></style>