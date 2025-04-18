<script>
import { useState } from "@pathscale/appstate-fast";

export default {
	name: "Modules",
	setup() {
		const state = useState({
			counter: 0,
		});

		const actions = {
			addCounter(payload) {
				state.value = { ...state.value, ...payload };
			},
		};

		actions.addCounter({ counter: 1 });
	},
};
</script>
