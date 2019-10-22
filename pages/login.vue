<template lang="pug">
.container
  form#login-box(@submit.prevent="signIn")
    h2 Sign In
    .form-input
      input(
        type="email"
        name="email"
        placeholder="Account"
        autofocus
      )
      i.fas.fa-user
    .form-input
      input(
        type="password"
        name="password"
        placeholder="Password"
      )
      i.fas.fa-lock
    button 登入
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('users', {
      updateAuthentication: 'UPDATE_AUTHENTICATION'
    }),
    signIn () {
      this.updateAuthentication({ id: Number(this.$route.query.id), value: true })
      this.$router.push(`/users/${this.$route.query.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: darken($c-white, 10);
  @include center-flex;
  #login-box {
    @include size(300px, auto, 10px);
    background-color: $c-white;
    box-shadow: 5px 10px 20px rgba(black, 0.05);
    @include center-flex(flex-start);
    flex-direction: column;
    h2 {
      margin: 20px 0;
      font-size: 30px;
      font-weight: 500;
    }
    .form-input {
      position: relative;
      input {
        @include size(180px, 20px, 10px);
        margin: 10px 0;
        padding: 5px 0 5px 35px;
        border: 0;
        outline: 0;
        &:focus {
          box-shadow: 0px 0px 0px 2px rgba($c-yellow, 0.5);
        }
        &::placeholder {
          color: rgba($c-black, 0.3);
        }
      }
      i {
        font-size: 15px;
        color: $c-yellow;
        position: absolute;
        @include center-position;
        left: 8%;
      }
    }
    button {
      @include size(180px, 30px, 10px);
      margin: 20px 0;
      padding: 0;
      background-color: $c-yellow;
      font-size: 15px;
      font-weight: 500;
      color: $c-white;
      cursor: pointer;
      transition: 0.15s;
      &:hover {
        background-color: white;
        color: $c-yellow;
      }
    }
  }
}
</style>
