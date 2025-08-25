<template>
    <div>
        <img :src="titleImage" alt="title">
        <ErrorComponent v-if="isError" :isError="true"/>
        <ListComponent v-if="pokemons && !isLoading && !isError" :pokemons="pokemons"/>
        <LoadingComponent v-if="isLoading && !isError" :isLoading="isLoading"/>
    </div>
</template>

<script>
// @ts-nocheck

function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { callApi } from '../gateways/gateway';
import LoadingComponent from '../components/LoadingComponent.vue';
import ListComponent from '../components/ListComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
export default stryMutAct_9fa48("0") ? {} : (stryCov_9fa48("0"), {
  name: stryMutAct_9fa48("1") ? "" : (stryCov_9fa48("1"), 'PokemonView'),
  components: stryMutAct_9fa48("2") ? {} : (stryCov_9fa48("2"), {
    LoadingComponent,
    ListComponent,
    ErrorComponent
  }),
  data: stryMutAct_9fa48("3") ? () => undefined : (stryCov_9fa48("3"), () => stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
    pokemons: stryMutAct_9fa48("5") ? ["Stryker was here"] : (stryCov_9fa48("5"), []),
    titleImage: require('../assets/image 1.svg'),
    isLoading: stryMutAct_9fa48("6") ? true : (stryCov_9fa48("6"), false),
    isError: stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7"), false)
  })),
  methods: stryMutAct_9fa48("8") ? {} : (stryCov_9fa48("8"), {
    async all() {
      if (stryMutAct_9fa48("9")) {
        {}
      } else {
        stryCov_9fa48("9");
        this.isLoading = stryMutAct_9fa48("10") ? false : (stryCov_9fa48("10"), true);
        this.isError = stryMutAct_9fa48("11") ? true : (stryCov_9fa48("11"), false);
        try {
          if (stryMutAct_9fa48("12")) {
            {}
          } else {
            stryCov_9fa48("12");
            this.pokemons = await callApi();
          }
        } catch (error) {
          if (stryMutAct_9fa48("13")) {
            {}
          } else {
            stryCov_9fa48("13");
            this.isError = stryMutAct_9fa48("14") ? false : (stryCov_9fa48("14"), true);
          }
        } finally {
          if (stryMutAct_9fa48("15")) {
            {}
          } else {
            stryCov_9fa48("15");
            this.isLoading = stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16"), false);
          }
        }
      }
    }
  }),
  mounted() {
    if (stryMutAct_9fa48("17")) {
      {}
    } else {
      stryCov_9fa48("17");
      this.all();
    }
  }
});

</script>

<style>
body {
    background-color: #F13F07;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh;
}

img {
  display: block;
  margin-left: auto; 
  margin-right: auto;
  margin-top: 21px;
  max-width: 400px;
  height: 147px;

  @media screen and (max-width: 1000px) {
      display: block;
      margin-left: auto; 
      margin-right: auto;
      margin-top: 27px;
      max-width: 200px;
      height: 73.5px;
  }
}
</style>