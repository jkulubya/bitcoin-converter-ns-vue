<template>
  <grid-layout rows="*, 2*" columns="*">
		<label
			text="1 BTC"
			row="0"
			col="0"
			verticalAlignment="middle"
			class="h1 text-center">
		</label>
		<list-view
			:items="currencies"
			row="1"
			col="0"
			class="list-group"
		>
			<template scope="item">
				<grid-layout rows="auto" columns="*, *" class="list-group-item">
					<label
						:text="item.currency"
						row="0"
						col="0"
						class="h2">
					</label>
					<label
						:text="item.amount"
						row="0"
						col="1"
						class="text-right">
					</label>
				</grid-layout>
			</template>
		</list-view>
	</grid-layout>
</template>

<script>
export default {
  data: () => {
    return {
			currencies: []
    }
  },
  methods: {
    convertCurrencies() {
			let codes = ["USD", "GBP", "EUR", "JPY", "UGX"];
      let url = "https://api.coinbase.com";
      url += "/v2/prices/spot?currency=";
			let result = {};
			codes.forEach(element => {
				console.log("tamtamtam");
				this.$http.getJSON(url+element)
					.then(response => {
						this.currencies.push({
							currency: response.data.currency,
							amount: response.data.amount
						});
					})
					.catch(error => {
						console.log("ERROR: " + error)
					})
			});
			console.log(this.currencies.length);
    }
  },
  created() {
		this.convertCurrencies();
  }
}
</script>

<style lang="scss" scoped>
	
</style>
