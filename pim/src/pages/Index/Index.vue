<template>
  <div>
    <v-img
      dark
      src="https://picsum.photos/id/180/1920/1280?blur=5"
      gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.9)"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1 class="display-1 mb-4">
            さぁ、商品の情報を一元管理しよう。
          </h1>
          <h4
            class="subheading"
            :style="{ letterSpacing: '5px' }"
          >
            JANコード発行と商品情報管理ツール
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <v-row
      align="center"
      justify="center"
      style="margin-top:-150px"
    >
      <v-card height="500" color="#FFFFFF" width="60%">
        <v-card-text class="fill-height">
          <v-row class="fill-height">
            <v-col>
              <v-btn
                block
                height="100%"
                elevation="16"
                color="#94e5a0"
              >
                <div>
                  <v-icon
                    size="24"
                    color="primary"
                    class="my-2"
                  >
                    mdi-plus
                  </v-icon>
                  <div class="caption primary--text">
                    JANコードの発行
                  </div>
                </div>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                block
                height="100%"
                elevation="16"
                color="#f1c58e"
              >
                <div>
                  <v-icon
                    size="24"
                    color="primary"
                    class="my-2"
                  >
                    mdi-plus
                  </v-icon>
                  <div class="caption primary--text">
                    商品情報管理
                  </div>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgHeight: 500,
    }
  }
}
</script>