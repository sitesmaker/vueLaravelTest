<template>
    <header>
        <div class="row">
            <nav>
               <router-link to="/" class="link"><span>Главная</span></router-link>
               <router-link to="/messages" class="link"><span>Сообщения</span></router-link>
            </nav>
        </div>
    </header>
</template>

<script>

export default {

}
</script>

<style lang="scss">

header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: $yellow;
  height: $header-h;
  display: flex;
  align-items: center;

  nav {
    display: flex;
  }

  .link {
    font-weight: 700;
    padding: 10px;
  }
}
</style>
