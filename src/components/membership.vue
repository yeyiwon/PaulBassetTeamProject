<template>
  <v-container>
    <div class="header">
      <p class="menu_title">멤버십</p>
    </div>
    <div>
      <v-tabs color="black" grow v-model="tab" class="P_14">
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab href="#mycrown"> MY CROWN</v-tab>
        <v-tab href="#history">적립내역</v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab" style="height: 100%;">
      <v-tab-item value="mycrown" class="grey lighten-4">
        <div class="white pa-5">
          <v-col class="d-flex justify-center">
            <v-chip outlined color="red" class="text_pink">{{ stamps }}/10</v-chip>
          </v-col>
          <v-col>
            <h2 class="P_25 text-center"> {{ userInfo.uname }} 님의 MY CROWN</h2>
          </v-col>
          <v-card class="pa-5" elevation="4">
            <v-row class="d-flex justify-center">
              <v-col class="ma-1" v-for="index in 10" :key="index" cols="2">
                <v-img
                  src="@/assets/etc/CROWN.png"
                  alt="Crown"
                  style="width: 50px;"
                  :style="{ opacity: index > stamps ? '0.5' : '1' }"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="white mt-4 pa-2">
          <v-col>
            <p class="P_16 mb-2"><span class="font-weight-bold"> {{ userInfo.uname }} </span>님의 크라운 등급 혜택</p>

            <v-card class="pa-5" elevation="4">
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="P_20">WELCOME</p>
                <p class="P_14 text_gray500">회원 가입시 웰컴 등급이 됩니다.</p>
              </div>
              <v-divider></v-divider>
              <p class="P_14 pa-3 text_gray500">멤버쉽 카드로 첫 구매시 다음 날 무료음료 쿠폰 제공 e-Stamp 프로모션 시 참여 가능 제공</p>
              <div class="d-flex justify-end">
                <a href="#none" class="P_14 text_gray300 mt-2">다른 등급 혜택 보러가기<v-icon class="pl-1">keyboard_arrow_right</v-icon></a>
              </div>
            </v-card>
            <p class="P_12 text_gray500 mt-4">
              크라운의 유효기간은 1년입니다.
              크라운 12개 적립 시 다음날 무료 음료 쿠폰이 발행됩니다.
            </p>
            <p class="P_12 text_gray500 mt-2">
              생일 축하 쿠폰은 회원 계정에 등록된 법정생년월일 7일 전 발급 됩니다.
            </p>
          </v-col>
        </div>
        <div class="grey lighten-4 mt-4 pb-16">
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header class="P_16 text_pink">크라운에 대해 궁금하세요?</v-expansion-panel-header>
              <v-expansion-panel-content class="P_14">
                크라운은 월드 바리스타 챔피언을 상징하며 폴바셋 브랜드의 고유성과 자부심을 표상합니다. 폴바셋 소사이어티 카드로 3천원 이상 결제 시 고객님의 계정에 크라운이 1개 적립되며 1만원 이상 결제 시 5천원 단위로 크라운이 추가 적립 됩니다. 적립된 크라운은 폴 바셋 음료를 더 즐기실 수 있는 다양한 혜택으로 돌려 드립니다.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-tab-item>

      <v-tab-item value="history">
        <div class="d-flex align-center py-2 history_date">
                    <div class="d-flex cPoint" @click="showDatePicker = !showDatePicker">
                        <v-icon class="pr-3">mdi-calendar</v-icon>
                        <p class="P_12" >{{ startDate }} - {{ endDate }}</p>
                    </div>
                    <div>
                        <v-btn small class="ml-2 text_gray200" outlined rounded @click="calculateDate('7days')">7일</v-btn>
                        <v-btn small class="ml-2 text_gray200" outlined rounded @click="calculateDate('1month')">1개월</v-btn>
                        <v-btn small class="ml-2 text_gray200" outlined rounded @click="calculateDate('3months')">3개월</v-btn>
                    </div>
                </div>
            <v-dialog v-model="showDatePicker"  persistent width="290">
                <v-date-picker v-model="dates" range @input="handleDateChange"></v-date-picker>
                <v-card class="text-center">
                    <v-btn width="290" text @click="showDatePicker = false">취소</v-btn>
                </v-card>
            </v-dialog>

        <div class="grey lighten-4 pt-2 pb-1">
          <h3 class="mb-4">적립 내역</h3>
          <v-row class="white ma-3 pa-2" v-for="order in paginatedOrderHistory" :key="order.id">
            <v-col class="d-flex align-center">
              <v-icon x-large class="pr-5">approval</v-icon>
              <div>
                <p>주문일: {{ order.orderDate }}</p>
                <p>결제 금액: {{ order.totalPrice.toLocaleString() }}원</p>
              </div>
              <div class="ml-auto text-end">
                <div class="ml-auto text-end">
            <p class="P_12 text_gray500">유효기간</p>
            <p class="P_12 text_gray500">{{ order.expiryDate }}</p>
          </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      tab: "mycrown",
      orderHistory: [],
      stamps: 0,
      page: 1,
      itemsPerPage: 10,
      userInfo: JSON.parse(localStorage.getItem("loggedInUser")) || {} ,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      showDatePicker: false,
      dates: [new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[0]],
    };

  },
  computed: {
    totalPages() {
      return Math.ceil(this.orderHistory.length / this.itemsPerPage);
    },
    paginatedOrderHistory() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.orderHistory.slice(start, end);
    }
  },
  created() {
    this.loadOrderHistory();
  },
  methods: {
  loadOrderHistory() {
  const savedOrderHistory = localStorage.getItem('orderHistory');
  if (savedOrderHistory) {
    this.orderHistory = JSON.parse(savedOrderHistory);
    this.stamps = this.orderHistory.length; 

    // 적립 내역 최신순으로 정렬
    this.orderHistory.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

    // 각 주문에 유효기간 추가
    this.orderHistory = this.orderHistory.map(order => {
      const orderDate = new Date(order.orderDate);
      const expiryDate = new Date(orderDate);
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      
      console.log('Order Date:', orderDate);
      console.log('Expiry Date:', expiryDate);

      return { ...order, expiryDate: expiryDate.toISOString().split('T')[0] };
    });

    console.log('Order History:', this.orderHistory);
  }
},
calculateDate(period) {
      const today = new Date();
      let startDate, endDate;

      switch (period) {
        case '7days':
          endDate = today;
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 7);
          break;
        case '1month':
          endDate = today;
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 1);
          break;
        case '3months':
          endDate = today;
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 3);
          break;
        default:
          return;
      }

      this.startDate = startDate.toISOString().split('T')[0];
      this.endDate = endDate.toISOString().split('T')[0];
    },
    handleDateChange() {
      if (this.dates.length === 2) {
        this.showDatePicker = false;
      }
      const [aDate, bDate] = this.dates;
      this.startDate = aDate;
      this.endDate = bDate;
    },

  }
};
</script>

</script>
<style scoped>
p{
    margin: 0;
    padding: 0;
}

v-col{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}

.P_16{
    font-size: 16px;
}

.P_12{
    font-size: 12px;
}

.P_10{
    font-size: 10px;
}

.P_14{
    font-size: 14px;
}

.P_24{
    font-size: 24px;
}

.P_20{
    font-size: 20px;
}
.text_pink{
    color: #EA094B;
}

.text_gray500{
    color: #606060;
}

.text_gray300{
    color: #C1C1C1;
}

.text_white{
    color: #FFFFFF;
}
.text_brown{
    color: #503629;
}

.history_date{
  display: flex;
  justify-content: space-between;
}
</style>
