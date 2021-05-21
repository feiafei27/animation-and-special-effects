<template>
  <div class="main">
    <ul>
      <li>
        <a href="">
          <i class="iconfont icon-bilibili"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-weixin"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-weibo"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-github"></i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="iconfont icon-in"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "000.icon-shine"
  }
</script>

<style lang="scss" scoped>

  .main {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    background-color: #2c3a47;
    z-index: 25;

    ul{
      display: flex;

      li{
        list-style: none;
        margin: 0 18px;

        a{
          text-decoration: none;
          position: relative;
          color: white;
          width: 64px;
          height: 64px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 50%;
          background-color: #2c3a47;
          transition: 0.6s;

          &:hover{
            text-shadow: 0 0 4px #25ccf7;
          }

          &::before{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 50%;
            background-color: #25ccf7;
            transition: 0.6s;
            transform: scale(0.8);
            z-index: -1;
          }

          &:hover::before{
            box-shadow: 0 0 14px 2px #25ccf7;
            transform: scale(1.05);
          }

          i{
            font-size: 25px;
          }
        }
      }
    }
  }

</style>
