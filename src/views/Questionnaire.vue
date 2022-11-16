<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "A1 Have you tested positive for HIV or do you think you may be HIV positive?", value: "A1" },
        { text: "A2 Have you ever had hepatitis B or hepatitis C or think you may have hepatitis now?", value: "A2" },
        { text: "A3 Have you ever injected yourself or been injected with illegal or non-prescribed drugs including body-building drugs or cosmetics?", value: "A3" },
        { text: "A4 Have you ever been given money or drugs for sex?", value: "A4" },
        { text: "A5 In the last 12 months have you had sex with:", value: "A5", disabled: true },
        { text: "a anyone who is HIV positive;", value: "a" },
        { text: "b anyone with hepatitis B, hepatitis C or HTLV;", value: "b" },
        { text: "c anyone who has ever been given money or drugs for sex;", value: "c" },
        { text: "d anyone who has ever injected drugs; or", value: "d" },
        { text: "e anyone who may ever have had sex in parts of the world where AIDS/HIV is very common?", value: "e" },
        { text: "A6 Male donors only; In the last 12 months have you had oral or anal sex with a man, with or without a condom?", value: "A6" },
        { text: "A7 Female donors only; In the last 12 months have you had sex with a man who has ever had oral or anal sex with antoer man, with or without a condom?", value: "A7" },

        { text: "B1 Have you ever been told that you should not give blood?", value: "B1" },
        { text: "B2 Have you ever had a serious illness or seen a doctor about your heart?", value: "B2" },
        { text: "B3 Have you ever had any hospital investigations or tests or operations?", value: "B3" },
        { text: "B4 Are you taking any prescribed medicine or tablets or other treatments?", value: "B4" },
        { text: "B5 In the last 7 days have you taken any additional medicines or tablets?", value: "B5" },

        { text: "C1 In the last 2 weeks have you had any illness, infection or fever or do you think you have one now?", value: "C1" },
        { text: "C2 In the last 4 weeks have you been in contact with anyone with an infectious disease?", value: "C2" },
        { text: "C3 In the last 8 weeks have you had any immunisations, vaccinations or jabs?", value: "C3" },
        { text: "C4 In the last 12 months have you had your ears, face or body pierced, had a tattoo or any cosmetic treatment that involved piercing your skin?", value: "C4" },
        { text: "C5 In the last 12 months have you had accupuncture?", value: "C5" },
        { text: "C6 In the last 12 months have you been exposed unintentionally to someone else's blood or body fluids eg through a needle prick or bite or broken skin?", value: "C6" },
        { text: "C7 Have you had jaundice or hepatitis?", value: "C7" },
        { text: "C8 Have you received a blood transfusion since 1st January 1980", value: "C8" },
        { text: "C9 Has anyone in your family had CJD?", value: "C9" },
        { text: "C10 Were you treated with growth hormone before 1985?", value: "C10" },
        { text: "C11 Did you have brain surgery or an operation for a tumor or cyst in your spine before August 1992?", value: "C11" },
        { text: "C12 Female donors only; Have you ever had treatment for infertility?", value: "C12" },
      ],
    };
  },
  methods: {
    submit: function (selected) {
      alert(selected);
    }
  },
};
</script>

<template>
<div id="form">
  <b-form-group
    label="Check any that apply"
    v-slot="{ ariaDescribedby }"
  >
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      :aria-describedby="ariaDescribedby"
      switches
      stacked
    ></b-form-checkbox-group>
    <b-button type="button" v-on:click="submit(selected)">Submit</b-button>
  </b-form-group>
</div>
</template>

<style>
#form {
  text-align: left;
}
</style>