<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="../assets/mainimage/event.png"></v-img>
      </v-col>

      <v-col class="center">
        <v-card class="membership">
          <div v-if="userInfo && userInfo.uname" class="card_title_wrap">
            <h3 class="card-title">
              {{ userInfo.uname }} 님의 MY CROWN
              <img src="../assets/mainimage/logo.png" class="logo" />
            </h3>
            <p>
              {{ stamps }}
              <span class="num_gray">/ 10</span>
            </p>
          </div>
          <div v-else class="card_title_wrap">
            <h3 class="card-title">
              로그인 후 확인 가능합니다
              <img src="../assets/mainimage/logo.png" class="logo" />
            </h3>
          </div>
          <div v-if="userInfo && userInfo.uname">
            <div class="progress_size">
              <div class="progress_bar">
                <div class="progress" :style="{ width: `${(stamps / 10) * 100}%` }"></div>
              </div>
            </div>
            <v-card-subtitle>{{ 10 - stamps }}개만 더 채우면 @@@크라운으로 올라가요!</v-card-subtitle>
          </div>
          <div v-else class="login_prompt">
            <p>로그인하고 나만의 멤버십 혜택을 확인해보세요!</p>

          <div class="btn_wrap">
            <router-link to="/Login" class="crownred">
              <div class="btn">로그인</div>
            </router-link>
            <router-link to="/Join" class="crownred">
              <div class="btn">회원가입</div>
            </router-link>
          </div>
        </div>

          <div class="my_btn_wrap" v-if="userInfo && userInfo.uname">
            <router-link :to="{ path: '/Coupon' }" class="my_btn_deco">
              <div class="my_btn">
                <p>쿠폰 0</p>
                <v-icon>loyalty</v-icon>
              </div>
            </router-link>
            <div class="my_btn">
              <p>바코드</p>
              <v-icon>mdi-barcode</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="wrap_size">
        <router-link to="/likemenulist" class="menu_list">
          <h3 class="my_menu_title">나만의 메뉴 목록</h3>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <div class="my_menu">
          <div v-for="item in favoriteList" :key="item.id" class="my_menu_item">
            <v-img class="menu_recom mt-3" width="100" :src="item.img" cover />
            <p class="mt-2">{{ item.title }}</p>
          </div>
        </div>
      </v-col>
      <v-col class="wrap_size">
        <h3>추천 메뉴</h3>
        <v-slide-group class="mt-3">
          <v-slide-group-item class="recom_wrap">
            <div class="recom_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/menu01.png" />
              <p class="mt-2">초코 카페라떼</p>
            </div>
            <div class="recom_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/menu02.png" />
              <p class="mt-2">카페라떼</p>
            </div>
            <div class="recom_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/menu01.png" />
              <p class="mt-2">초코 카페라떼</p>
            </div>
            <div class="recom_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/menu02.png" />
              <p class="mt-2">카페라떼</p>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
      <v-col class="wrap_size">
        <h3>NEWS</h3>
        <v-slide-group class="mt-3">
          <v-slide-group-item class="news_wrap">
            <div class="news_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/news1.jpg" />
              <p class="mt-2">[프로모션] 쿠팡이츠 할인 프로모션(08.12 - 08.18)</p>
            </div>
            <div class="news_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/news2.jpg" />
              <p class="mt-2">The Coolest Frappe</p>
            </div>
            <div class="news_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/news3.jpg" />
              <p class="mt-2">초코 카페라떼</p>
            </div>
            <div class="news_size">
              <v-img class="menu_recom mt-3" src="../assets/mainimage/news4.jpg" />
              <p class="mt-2">카페라떼</p>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      favoriteList: [],
      stamps: 0,
      orderHistory: [],
      userInfo: JSON.parse(localStorage.getItem("loggedInUser")) || {}
    };
  },
  created() {
    this.loadOrderHistory();
    this.loadFavorites();
  },
  methods: {
    loadOrderHistory() {
      const savedOrderHistory = localStorage.getItem("orderHistory");
      if (savedOrderHistory) {
        this.orderHistory = JSON.parse(savedOrderHistory);
        this.stamps = this.orderHistory.length;
      }
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      this.favoriteList = favorites;
    }
  }
};
</script>
<style scoped>
.membership {
  margin-top: -80px;
  border-radius: 15px !important;
}
.center {
  margin-left: 2%;
  margin-right: 2%;
}
.logo {
  width: 35px;
}

.card-title {
  display: flex;
  align-items: center;
}

.card_title_wrap {
  padding: 16px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.num_gray {
  color: rgb(180, 180, 180);
}

.recom_wrap {
  display: flex;
}

.recom_size {
  width: 8%;
  text-align: center;
  margin-right: 14px;
}

.news_wrap {
  display: flex;
  margin-bottom: 100px;
}

.news_size {
  width: 20%;
  margin-right: 14px;
  overflow: hidden;
}

.progress_size {
  width: 93%;
  margin: auto;
}

.progress_bar {
  width: 100%;
  height: 5px;
  background-color: #dedede;
}

.progress_bar .progress {
  width: 72%;
  height: 5px;
  background-color: #e80a4d;
}
.my_btn_deco {
  text-decoration: none;
}

.my_btn {
  padding: 10px 15px 10px 15px;
  border: 1px solid #dedede;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
}
.my_btn p {
  margin-bottom: 0px;
  margin-right: 10px;
  text-decoration: none;
  color: #000000;
}

.my_btn_wrap {
  width: 93%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 26px;
}

.btn_wrap {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.btn {
  padding: 10px 50px 10px 50px;
  border: 1px solid #dedede;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
}
.btn p {
  margin-bottom: 0px;
  margin-right: 10px;
  text-decoration: none;
  color: #000000;
}

.my_menu {
  width: 100%;
  display: flex;
}
.my_menu_list > img {
  width: 100px !important;
  height: 100px !important;
}

.menu_list {
  display: flex;
  text-decoration: none;
  margin-top: 10px;
}

.crownred {
  color: #e80a4d;
  text-decoration: none;
}

.my_menu_title {
  color: #000000;
  text-decoration: none;
}

.login_prompt {
  padding: 0px 0 26px 16px !important;
}
.login_prompt p {
  margin-bottom: 5px !important;
}

.wrap_size {
  margin-left: 20px;
  margin-bottom: 30px;
}

</style>