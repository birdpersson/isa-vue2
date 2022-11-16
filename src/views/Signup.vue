<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        country: "",
        phone: "",
        jmbg: "",
        gender: "",
        occupation: "",
        employment: "",
        username: "",
        password: "",
        password2: "",
      },
      error: false,
      success: false,
      messages: {
        errorUsername: "",
        errorFirstName: "",
        errorLastName: "",
        errorAddress: "",
        errorCity: "",
        errorCountry: "",
        errorPhone: "",
        errorGender: "",
        errorNewPass: "",
        errorRepNewPass: "",
        errorNotEqualNewPassword: "",
        errorResponse: "",
        successResponse: "",
      },
    };
  },
  methods: {
    signup: function (user) {
      if (this.user.username == "") {
        this.messages.errorUsername = `<h4>Email can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorUsername = ""), 3000);
      } else if (this.user.firstname == "") {
        this.messages.errorFirstName = `<h4>First name can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorFirstName = ""), 3000);
      } else if (this.user.lastname == "") {
        this.messages.errorLastName = `<h4>Last name can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorLastName = ""), 3000);
      } else if (this.user.address == "") {
        this.messages.errorAddress = `<h4>Street address can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorAddress = ""), 3000);
      } else if (this.user.city == "") {
        this.messages.errorCity = `<h4>City can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorCity = ""), 3000);
      } else if (this.user.country == "") {
        this.messages.errorCountry = `<h4>Country can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorCountry = ""), 3000);
      } else if (this.user.phone == "") {
        this.messages.errorPhone = `<h4>Phone number can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorPhone = ""), 3000);
      } else if (this.user.gender == "") {
        this.messages.errorGender = `<h4>Gender of user can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorGender = ""), 3000);
      } else if (this.user.password == "") {
        this.messages.errorNewPass = `<h4>Password can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorNewPass = ""), 3000);
      } else if (this.user.password2 == "") {
        this.messages.errorRepNewPass = `<h4>Confirmation password can't be empty!</h4>`;
        setTimeout(() => (this.messages.errorRepNewPass = ""), 3000);
      } else {
        if (this.user.password !== this.user.password2) {
          this.messages.errorNotEqualNewPassword = `<h4>Your passwords don't match! Please try again...</h4>`;
          setTimeout(() => (this.messages.errorNotEqualNewPassword = ""), 3000);
        } else {
          axios
            .post("http://localhost:8080/auth/signup", {
              username: user.username,
              password: user.password,
              firstname: user.firstname,
              lastname: user.lastname,
              address: user.address,
              city: user.city,
              country: user.country,
              phone: user.phone,
              jmbg: user.jmbg,
              gender: user.gender,
              occupation: user.occupation,
              employment: user.employment,
            })
            .then((response) => this.signupSuccessful(response))
            .catch(() => this.signupFailed());
        }
      }
    },
    signupSuccessful: function (response) {
      if (response.status === 201) {
        console.log(response.data);
        axios
          .post("http://localhost:8080/auth/login", {
            username: this.user.username,
            password: this.user.password,
          })
          .then((Response) => this.loginSuccessful(Response.data))
          .catch(() => this.loginFailed());
      }
      this.signupFailed();
    },
    signupFailed: function () {
      this.error = true;
      setTimeout(() => (this.error = false), 5000);
      this.messages.errorResponse = `<h4>Username already exists!</h4>`;
      // setTimeout(() => this.messages.errorResponse='', 5000);
    },
    loginSuccessful: function (data) {
      console.log(data);
      if (!data.accessToken) {
        this.loginFailed();
        return;
      }
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("role", data.role);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
      this.error = false;
      this.$router.push("/");
    },
    loginFailed: function () {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
      this.error = true;
      setTimeout(() => (this.error = false), 3000);
    },
  },
};
</script>

<template>
  <div id="signup">
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex alignlogin d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Create Account</h3>
                  <div
                    class="alert alert-danger"
                    v-if="error"
                    v-html="messages.errorResponse"
                  ></div>

                  <form class="form-signin">
                    <div
                      v-if="messages.errorUsername"
                      class="alert alert-danger"
                      v-html="messages.errorUsername"
                    ></div>
                    <div class="form-label-group">
                      <b>Enter email address</b>
                      <input
                        v-model="user.username"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorFirstName"
                      id="testError"
                      class="alert alert-danger"
                      v-html="messages.errorFirstName"
                    ></div>
                    <div class="form-label-group">
                      <b>Enter first name</b>
                      <input
                        v-model="user.firstname"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorLastName"
                      class="alert alert-danger"
                      v-html="messages.errorLastName"
                    ></div>
                    <div class="form-label-group">
                      <b>Enter last name</b>
                      <input
                        v-model="user.lastname"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorAddress"
                      class="alert alert-danger"
                      v-html="messages.errorAddress"
                    ></div>
                    <div class="form-label-group">
                      <b>Street address</b>
                      <input
                        v-model="user.address"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorCity"
                      class="alert alert-danger"
                      v-html="messages.errorCity"
                    ></div>
                    <div class="form-label-group">
                      <b>City</b>
                      <input
                        v-model="user.city"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorCountry"
                      class="alert alert-danger"
                      v-html="messages.errorCountry"
                    ></div>
                    <div class="form-label-group">
                      <b>Country</b>
                      <input
                        v-model="user.country"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorPhone"
                      class="alert alert-danger"
                      v-html="messages.errorPhone"
                    ></div>
                    <div class="form-label-group">
                      <b>Enter phone number</b>
                      <input
                        v-model="user.phone"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div class="form-label-group">
                      <b>Enter JMBG</b>
                      <input
                        v-model="user.jmbg"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorGender"
                      class="alert alert-danger"
                      v-html="messages.errorGender"
                    ></div>
                    <div class="form-label-group">
                      <b>What is your Gender?</b>
                      <br />
                      <input
                        type="radio"
                        v-model="user.gender"
                        required
                        value="Male"
                      />
                      Male
                      <input
                        type="radio"
                        v-model="user.gender"
                        required
                        value="Female"
                      />
                      Female
                      <input
                        type="radio"
                        v-model="user.gender"
                        required
                        value="Other"
                      />
                      Other
                      <br />
                      <br />
                    </div>

                    <div class="form-label-group">
                      <b>Enter Occupation</b>
                      <input
                        v-model="user.occupation"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div class="form-label-group">
                      <b>Enter Employment</b>
                      <input
                        v-model="user.employment"
                        class="form-control"
                        placeholder=""
                        required
                        autofocus
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorNewPass"
                      class="alert alert-danger"
                      v-html="messages.errorNewPass"
                    ></div>
                    <div class="form-label-group">
                      <b>Create a password</b>
                      <input
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                      <br />
                    </div>

                    <div
                      v-if="messages.errorNotEqualNewPassword"
                      class="alert alert-danger"
                      v-html="messages.errorNotEqualNewPassword"
                    ></div>
                    <div
                      v-if="messages.errorRepNewPass"
                      class="alert alert-danger"
                      v-html="messages.errorRepNewPass"
                    ></div>
                    <div class="form-label-group">
                      <b>Confirm your password</b>
                      <input
                        v-model="user.password2"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                      <br />
                    </div>

                    <button
                      type="button"
                      class="
                        btn btn-lg btn-primary btn-block btn-login
                        text-uppercase
                        font-weight-bold
                        mb-2
                      "
                      v-on:click="signup(user)"
                    >
                      Sign up
                    </button>
                    Have an account?
                    <router-link to="/login" class="medum" exact
                      >Log in</router-link
                    >.
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>